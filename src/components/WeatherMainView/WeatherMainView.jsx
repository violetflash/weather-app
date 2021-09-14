import React, { useContext } from 'react';

import Context from '../../services/context/Context';

import s from './WeatherMainView.module.scss';
import cloud from './icons/cloud.svg';
import partlyCloudy from './icons/partly_cloudy.svg';
import rain from './icons/rain.svg';
import storm from './icons/storm.svg';
import sun from './icons/sun.svg';
import { getCelsius } from "../../utils/functions";


const WeatherMainView = () => {
    const { response, baseState } = useContext(Context);

    const { temp, more } = response;

    const getConditionedStat = (id) => {
        const idStr = String(id);

        if (idStr === "800") return { icon :sun, desc: "Преимущественно солнечно" };
        if (idStr === "801") return { icon :partlyCloudy, desc: "Редкая облачность" };
        if (idStr.startsWith("8")) return { icon :cloud, desc: "Облачно" };
        if (idStr.startsWith("5")) return { icon :rain, desc: "Дождь" };
        if (idStr.startsWith("2")) return { icon :storm, desc: "Шторм" };

        return {icon: partlyCloudy, desc: "Облачно" };
    };

    const icon = getConditionedStat(more.id).icon;
    const desc = getConditionedStat(more.id).desc;

    const conditionedTemp = baseState === 'C' ? getCelsius(temp) : temp.toFixed(0);

    return (
        <section className={s.weather}>
            <div className={s.weather__top}>
                <img className={s.weather__icon} src={icon} alt=""/>
                <span className={s.weather__temperature}>{conditionedTemp}</span>
            </div>
            <p className={s.weather__desc}>{desc}</p>
        </section>
    )
};

export default WeatherMainView;