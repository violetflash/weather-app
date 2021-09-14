import React, { useContext } from 'react';

import Context from '../../services/context/Context';
import DetailsItem from './DetailsItem/DetailsItem';

import s from './WeatherDetails.module.scss';
import { windDegToText } from "../../utils/functions";

const WeatherDetails = props => {
    const { response } = useContext(Context);
    const { wind, humidity, pressure, pop } = response;
    const windValue = `${wind.speed} м/с, ${windDegToText(wind.deg)}`
    const pressureValue = `${pressure} мм.рт.ст.`;
    const humidityValue = `${humidity}%`;
    const popValue = `${(+pop * 100).toFixed(0)}%`;

    return (
        <div className={s.details}>
            <DetailsItem title="Ветер" value={windValue}/>
            <DetailsItem title="Давление" value={pressureValue}/>
            <DetailsItem title="Влажность" value={humidityValue}/>
            <DetailsItem title="Вероятность дождя" value={popValue}/>
        </div>
    )
};

export default WeatherDetails;