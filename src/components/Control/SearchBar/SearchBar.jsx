import React, { useState, useContext } from 'react';

import Dropdown from "./Dropdown/Dropdown";
import Context from '../../../services/context/Context';

import s from './SearchBar.module.scss';
import { _CITIES_CURR_ID } from "../../../services/restApiService/restApiService";


const SearchBar = ({ setShowSearchBar }) => {
    const { setSearchId } = useContext(Context);

    const [choice, setChoice] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const [citiesList, setCitiesList] = useState({ full: [], inDropdown: [] });

    const okHandler = () => {
        setShowSearchBar(false);
        setSearchId({ ...choice });
        localStorage.setItem(_CITIES_CURR_ID, JSON.stringify({ ...choice }));
    };

    const inputHandler = (e) => {
        e.target.value = e.target.value
            .replace(/[^А-Яа-я -]/, '')
            .replace(/\s\s/, ' ')
            .replace(/--/, '-');

        const regExp = new RegExp(e.target.value, 'i');

        setIsDropdownOpen(true);
        setChoice("");
        // setSearchId(null);
        setInputValue(e.target.value);
        setCitiesList(() => {
            return {
                full: [...citiesList.full],
                inDropdown: citiesList.full.filter(city => regExp.test(city.name))
            }
        });
    }

    const dropdown = isDropdownOpen ?
        <Dropdown
            setInputValue={setInputValue}
            setIsDropdownOpen={setIsDropdownOpen}
            citiesList={citiesList}
            setCitiesList={setCitiesList}
            setChoice={setChoice}
            setShowSearchBar={setShowSearchBar}
        /> : null;

    const confirm = choice ? <button className={s.search__confirm} onClick={okHandler}>ОК</button> : null;

    return (
        <div className={s.search}>
            <label className={s.search__label}>
                <input
                    className={s.search__input}
                    type="text"
                    placeholder="Поиск города"
                    value={inputValue}
                    onChange={inputHandler}
                />
                {confirm}
            </label>

            {dropdown}
        </div>

    )

};

export default SearchBar;
