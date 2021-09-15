import React, { useEffect } from 'react';
import Loader from "../../../Loader";

import restApiService from "../../../../services/restApiService/restApiService";
import { capitalizer } from "../../../../utils/functions";

import s from './Dropdown.module.scss';

const Dropdown = (
    {
        setInputValue,
        setIsDropdownOpen,
        setShowSearchBar,
        citiesList, setCitiesList,
        setChoice
    }) => {

    const { getCitiesList } = restApiService;

    useEffect(() => {
        getCitiesList()
            .then((res) => {
                setCitiesList({ full: res.cities, inDropdown: res.cities });
            });
    }, [setCitiesList, getCitiesList]);

    const cityHandler = (name, id) => {
        setInputValue(capitalizer(name));
        setChoice({ name: capitalizer(name), id });
        setIsDropdownOpen(false);
    }

    const sortByName = (a, b) => {
        if (a.name > b.name) {
            return 1;
        }

        if (a.name < b.name) {
            return -1;
        }

        return 0;
    };

    const dropdown = citiesList.inDropdown.length && citiesList.full.length ? citiesList.inDropdown
        .sort(sortByName)
        .map((city) => {
            const { name, id } = city;
            return (
                <li className={s.dropdown__item} key={id}>
                    <button
                        className={s.dropdown__btn}
                        onClick={() => cityHandler(name, id)}
                    >
                        {capitalizer(name)}
                    </button>
                </li>
            )
    }) : <li className={s.dropdown__noMatch}>Данные отсутствуют</li>;

    const loader = !citiesList.full.length && !citiesList.inDropdown.length ? <Loader/> : null;

    const closeHandler = () => {
        setIsDropdownOpen(false);
        setShowSearchBar(false);
    };

    return (
        <div className={s.dropdown}>
            <ul className={s.dropdown__list}>
                <li className={s.dropdown__item}>
                    <button className={s.dropdown__back} onClick={closeHandler}>назад</button>
                </li>
                {loader}
                {dropdown}
            </ul>
        </div>

    )

};

export default Dropdown;
