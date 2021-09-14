import React from 'react';

import s from './DetailsItem.module.scss';

const DetailsItem = ({ title, value }) => {
    return (
        <div className={s.detailsItem}>
            <p className={s.detailsItem__title}>{title}</p>
            <p className={s.detailsItem__desc}>{value}</p>
        </div>
    )
};

export default DetailsItem;