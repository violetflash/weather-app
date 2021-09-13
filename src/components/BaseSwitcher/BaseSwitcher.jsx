import React, { useState } from 'react';

import s from './BaseSwitcher.module.scss';
import { addConditionedStyle } from "../../utils/functions";

const BaseSwitcher = props => {
    const [activeBaseState, setActiveBaseState] = useState('C');

    const switchHandler = (e) => {
        setActiveBaseState(e.target.name);
    };

    const bases = ["C", "F"];
    const switchButtons = bases.map((base) => {
        const initialClass = base === "C" ? [s.switcher__celsius] : [s.switcher__fahrenheit];
        const btnClass = addConditionedStyle(activeBaseState === base, initialClass, s.active);

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