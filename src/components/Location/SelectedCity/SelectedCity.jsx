import React from 'react';
import s from "./SelectedCity.module.scss";

const SelectedCity = ({ showSearchBar, setShowSearchBar, setSearchTerm }) => {

    const findLocationClass = [s.selected__btn, s.selected__find];

    const showCitiesHandler = () => {
        setSearchTerm("");
        setShowSearchBar(true);
    };

    return (
        <div className={s.selected}>
            <h1 className={s.selected__city}>Омск</h1>
            <div className={s.selected__controls}>
                <button className={s.selected__btn} onClick={showCitiesHandler}>Сменить город</button>
                <button className={findLocationClass.join(' ')}>Мое местоположение</button>
            </div>
        </div>
    )

};

export default SelectedCity;
