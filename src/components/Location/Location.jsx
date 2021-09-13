import React, { useState } from 'react';

import s from './Location.module.scss';
import SelectedCity from "./SelectedCity/SelectedCity";
import SearchBar from "./SearchBar/SearchBar";

const Location = props => {
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
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
        />;

    return (
        <div className={s.location}>
            {selected}
            {searcher}
        </div>

    )

};

export default Location;