import React from 'react';
import s from "./ControlsBtn.module.scss";

const Controls = ({ setShowSearchBar }) => {
    const findLocationClass = [s.controls__find];

    const showCitiesHandler = () => {
        setShowSearchBar(true);
    };

    return (
        <div className={s.controls}>
            <button className={s.controls__btn} onClick={showCitiesHandler}>Сменить город</button>
            <button className={findLocationClass.join(' ')}>Мое местоположение</button>
        </div>
    )

};

export default Controls;