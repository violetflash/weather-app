import React, { useState, useEffect } from 'react';
import restApiService from "../../../../services/restApiService/restApiService";
import Loader from "../../../Loader";

import { capitalizer } from "../../../../utils/functions";

import s from './Dropdown.module.scss';

const Dropdown = ({ setInputValue }) => {
    const [citiesList, setCitiesList] = useState(null);

    const { getResource, _CITIES_DB } = restApiService;

    useEffect(() => {
        getResource(_CITIES_DB)
            .then((res) => setCitiesList(res.cities));
    }, []);

    const cityHandler = (name) => setInputValue(capitalizer(name));

    const dropdownList = citiesList ? citiesList.map((city) => {
        const { name, id } = city;
        return (
            <li className={s.dropdown__city} key={id}>
                <button onClick={() => cityHandler(name)}>{capitalizer(name)}</button>
            </li>
        )
    }) : <Loader />;

    return (
        <ul className={s.dropdown}>
            {dropdownList}
        </ul>
    )

};

export default Dropdown;