import React, { useState } from 'react';

import s from './Control.module.scss';
import SelectedCity from "./SelectedCity/SelectedCity";
import SearchBar from "./SearchBar/SearchBar";
import ControlsBtn from "./ControlsBtn/ControlsBtn";
import BaseSwitcher from "./BaseSwitcher/BaseSwitcher";

const Control = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);


    const searcher = showSearchBar ?
        <SearchBar
            setShowSearchBar={setShowSearchBar}
            showSearchBar={showSearchBar}
        /> :
        null;

    const selected = showSearchBar ?
        null :
        <SelectedCity
            setShowSearchBar={setShowSearchBar}
        />;

    const controlsBtn = showSearchBar ?
        null :
        <ControlsBtn setShowSearchBar={setShowSearchBar}/>;

    return (
        <header className={s.control}>
            <div className={s.control__top}>
                {selected}
                {searcher}
                <BaseSwitcher />
            </div>
            {controlsBtn}
        </header>
    )
};

export default Control;
