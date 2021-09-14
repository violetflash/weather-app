import React, { useState } from 'react';

import s from './SearchBar.module.scss';
// import { addConditionedStyle } from "../../../utils/functions";
import Dropdown from "./Dropdown/Dropdown";

const SearchBar = ({ setShowSearchBar, searchTerm, setSearchTerm }) => {
    const [inputValue, setInputValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const [citiesList, setCitiesList] = useState({ full: [], inDropdown: [] });

    const closeHandler = () => {
        setShowSearchBar(false);
    };

    const inputHandler = (e) => {
        e.target.value = e.target.value
            .replace(/[^А-Яа-я -]/, '')
            .replace(/\s\s/, ' ')
            .replace(/--/, '-');

        const regExp = new RegExp(e.target.value, 'i');

        setIsDropdownOpen(true);
        setSearchTerm("");
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
            setSearchTerm={setSearchTerm}
            citiesList={citiesList}
            setCitiesList={setCitiesList}
        /> : null;

    const confirm = searchTerm ? <button className={s.search__confirm} onClick={closeHandler}>ОК</button> : null;

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
