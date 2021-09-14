import { useEffect, useState } from 'react';

const useFetch = (id) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const APIkey = 'e9bc19a6f7701bfb42833e22b1a7521a';
        const baseQuery = `//api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIkey}`;

        const fetchData = async() => {
            try {
                const baseDb = await fetch(baseQuery);
                const baseRes = await baseDb.json();
                const query = `https://api.openweathermap.org/data/2.5/onecall?lat=${baseRes.coord.lat}&lon=${baseRes.coord.lon}&exclude=minutely,hourly&appid=${APIkey}`;
                const db = await fetch(query);
                const details = await db.json();

                const weather = {
                    name: baseRes.name,
                    more: {
                        id: details.current.weather[0].id,
                        main: details.current.weather[0].main,
                        desc: details.current.weather[0].description
                    },
                    wind: {
                        speed: details.current.wind_speed,
                        deg: details.current.wind_deg
                    },
                    temp: details.current.temp,
                    pressure: details.current.pressure,
                    humidity: details.current.humidity,
                    pop: details.daily[0].pop
                };

                setResponse(weather);
            } catch(err) {
                setError(err);
            }
        }
        fetchData();
    }, [id]);

    return { response, error };
};

export default useFetch;
