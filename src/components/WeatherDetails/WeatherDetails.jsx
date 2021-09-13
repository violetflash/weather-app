import React from 'react';

import DetailsItem from './DetailsItem/DetailsItem';

import s from './WeatherDetails.module.scss';

const WeatherDetails = props => {
    return (
        <div className={s.details}>
            <DetailsItem/>
            <DetailsItem/>
            <DetailsItem/>
            <DetailsItem/>
        </div>
    )
};

export default WeatherDetails;