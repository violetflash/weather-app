import React from 'react';

import Location from "../Location/Location";
import BaseSwitcher from "../BaseSwitcher/BaseSwitcher";
import WeatherMainView from "../WeatherMainView/WeatherMainView";
import WeatherDetails from "../WeatherDetails/WeatherDetails";



import useFetch from "../../hooks/useFetch/useFetch";

import s from './App.module.scss';

const App = () => {

    const { response, error } = useFetch(2122104);
    console.log(response);
    // response.then(res => console.log(res));

    return (
        <div className={s.weatherApp}>
            <div className="container">
                <div className={s.weatherApp__content}>
                    <header className={s.weatherApp__header}>
                        <Location />
                        <BaseSwitcher />
                    </header>
                    <section className={s.weatherApp__body}>
                        <WeatherMainView />
                    </section>
                    <section className={s.weatherApp__details}>
                        <WeatherDetails />
                    </section>
                </div>

            </div>

        </div>
    );
};

export default App;
