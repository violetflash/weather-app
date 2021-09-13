import React from 'react';

import s from './WeatherMainView.module.scss';
import cloud from './icons/cloud.svg';
import partlyCloudy from './icons/partly_cloudy.svg';
import rain from './icons/rain.svg';
import sun from './icons/sun.svg';
import storm from './icons/storm.svg';


const WeatherMainView = props => {
    return (
        <div className={s.weather}>
            <div className={s.weather__top}>
                <img className={s.weather__icon} src={sun} alt=""/>
                <span className={s.weather__temperature}>19</span>
            </div>
            <p className={s.weather__desc}>Преимущественно солнечно</p>
        </div>
    )
};

export default WeatherMainView;