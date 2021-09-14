import { useEffect, useState } from 'react';

const useFetch = (id) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const APIkey = 'e9bc19a6f7701bfb42833e22b1a7521a';
        const currentQuery = `//api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIkey}`;
        // const details = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${APIkey}`;
        // const query = type ? currentQuery : details;

        const fetchData = async() => {
            try {
                const db = await fetch(currentQuery);
                const res = await db.json();
                const weather = {
                    coords: { lat: res.coord.lat, lon: res.coord.lon },
                    wind: res.wind.speed,
                    pressure: res.main.pressure,
                    humidity: res.main.humidity
                };

                const details = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coords.lat}&lon=${weather.coords.lon}&exclude=daily&appid=${APIkey}`;
                const fullDb = await fetch(details);
                const fullRes = await fullDb.json();
                setResponse(fullRes);
            } catch(err) {
                setError(err);
            }
        }
        fetchData();
    }, [id]);

    return { response, error };
};

export default useFetch;
