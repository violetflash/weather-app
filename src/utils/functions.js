const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses];

    if (condition) {
        classes.push(newClass);
    }

    return classes.join(' ');
};

const getCelsius = (temp) => {
    return `${Math.trunc(temp - 273)}`;
};

const windDegToText = deg => {
    if (deg > 348.75) return 'Северный';
    if (deg > 326.25) return 'С-С-З';
    if (deg > 303.75) return 'Северо-Западный';
    if(deg > 281.25) return 'З-С-З';
    if(deg > 258.75) return 'Западный';
    if(deg > 236.25) return 'З-Ю-З';
    if(deg > 213.75) return 'Юго-Западный';
    if(deg > 191.25) return 'Ю-Ю-З';
    if(deg > 168.75) return 'Южный';
    if(deg > 146.25) return 'Ю-Ю-В';
    if(deg > 123.75) return 'Юго-Восточный';
    if(deg > 101.25) return 'В-Ю-В';
    if(deg > 78.75) return 'Восточный';
    if(deg > 56.25) return 'В-С-В';
    if(deg > 33.75) return 'Северо-Восточный';
    if (deg > 11.25) return 'С-С-В';
    if (deg > 0) return 'Северный';

}

function utcToLocale(epoch) {
    return new Date(epoch * 1000).toLocaleString();
}

const capitalizer = str => {
    if (str.includes(' ')) {
        return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
    }

    if (str.includes('-')) {
        return str.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join('-');
    }

    return str[0].toUpperCase() + str.slice(1);
}

const checkLS = (key, field, initial) => (
    localStorage.getItem(key) ?
        JSON.parse(localStorage.getItem(key))[field] :
        initial
);

export {
    addConditionedStyle,
    capitalizer,
    checkLS,
    utcToLocale,
    getCelsius,
    windDegToText
};
