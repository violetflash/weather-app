import React, { useState } from 'react';

import Control from "../Control/Control";
import WeatherMainView from "../WeatherMainView/WeatherMainView";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

import { _CITIES_CURR_ID, _INITIAL_ID } from "../../services/restApiService/restApiService";
import Context from '../../services/context/Context';



import s from './App.module.scss';
import useFetch from "../../hooks/useFetch/useFetch";
import Loader from "../Loader";

const App = () => {
    const initialId = localStorage.getItem(_CITIES_CURR_ID) ?
        JSON.parse(localStorage.getItem(_CITIES_CURR_ID)) : _INITIAL_ID;

    const [searchId, setSearchId] = useState(initialId);
    const [baseState, setBaseState] = useState('C');

    const { response } = useFetch(searchId.id);

    const value = {
        searchId, setSearchId, baseState, setBaseState, response
    }

    const content = response ?
        <Context.Provider value={value}>
            <div className={s.weatherApp}>
                <div className="container">
                    <div className={s.weatherApp__content}>
                        <Control />
                        <WeatherMainView />
                        <section className={s.weatherApp__details}>
                            <WeatherDetails />
                        </section>
                    </div>
                </div>
            </div>
        </Context.Provider> :
        <div className={s.loader}>
            <Loader />
        </div>




    return (
        <>
            {content}
        </>

    );
};

export default App;
