import React, { useContext } from 'react';

import Context from '../../../services/context/Context';

import s from "./SelectedCity.module.scss";

const SelectedCity = () => {
    const { searchId } = useContext(Context);

    return (
        <div className={s.selected}>
            <h1 className={s.selected__city}>{searchId.name}</h1>
        </div>
    )
};

export default SelectedCity;
