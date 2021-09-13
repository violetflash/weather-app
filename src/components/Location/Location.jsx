import React from 'react';

import s from './Location.module.scss';

const Location = props => {

    const findLocationClass = [s.location__btn, s.location__find]

    return (
        <div className={s.location}>
            <h1 className={s.location__city}>Омск</h1>
            <div className={s.location__controls}>
                <button className={s.location__btn}>Сменить город</button>
                <button className={findLocationClass.join(' ')}>Мое местоположение</button>
            </div>
        </div>

    )

};

export default Location;