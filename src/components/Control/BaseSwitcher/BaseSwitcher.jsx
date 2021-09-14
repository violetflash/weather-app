import React, { useContext } from 'react';

import Context from '../../../services/context/Context';

import s from './BaseSwitcher.module.scss';
import { addConditionedStyle } from "../../../utils/functions";

const BaseSwitcher = () => {
    const { baseState, setBaseState } = useContext(Context);

    const switchHandler = (e) => {
        setBaseState(e.target.name);
    };

    const bases = ["C", "F"];
    const switchButtons = bases.map((base) => {

        const initialClass = base === "C" ? [s.switcher__celsius] : [s.switcher__fahrenheit];
        const btnClass = addConditionedStyle(baseState === base, initialClass, s.active);

        return (
            <button
                key={base}
                className={btnClass}
                name={base}
                onClick={switchHandler}
            >
                {base}
            </button>
        );
    })

    return (
        <div className={s.switcher}>
            {switchButtons}
        </div>

    )

};

export default BaseSwitcher;