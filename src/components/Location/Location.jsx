import React, { useState } from 'react';

import s from './Location.module.scss';
import SelectedCity from "./SelectedCity/SelectedCity";
import SearchBar from "./SearchBar/SearchBar";

const Location = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");


    const searcher = showSearchBar ?
        <SearchBar
            setShowSearchBar={setShowSearchBar}
            showSearchBar={showSearchBar}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        /> :
        null;

    const selected = showSearchBar ?
        null :
        <SelectedCity
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
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
