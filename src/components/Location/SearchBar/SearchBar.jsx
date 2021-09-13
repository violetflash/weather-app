import React, { useState } from 'react';

import s from './SearchBar.module.scss';
import { addConditionedStyle } from "../../../utils/functions";
import Dropdown from "./Dropdown/Dropdown";

const SearchBar = ({ setShowSearchBar }) => {
    const [inputValue, setInputValue] = useState("");

    const closeHandler = () => {
        setShowSearchBar(false);
    };

    const inputHandler = (e) => setInputValue(e.target.value);

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
                <button className={s.search__confirm} onClick={closeHandler}>ОК</button>
            </label>

            <Dropdown setInputValue={setInputValue} />
        </div>

    )

};

export default SearchBar;