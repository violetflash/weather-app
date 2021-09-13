import React from 'react';

import s from './DetailsItem.module.scss';

const DetailsItem = props => {
    return (
        <div className={s.detailsItem}>
            <p className={s.detailsItem__title}>Details title</p>
            <p className={s.detailsItem__desc}>Details description</p>
        </div>
    )
};

export default DetailsItem;