const _CITIES_DB = "data/cities_db.json";

const restApiService = {
    _CITIES_LS_KEY: 'citiesList',

    getCitiesList: async () => {
        const res = await fetch(_CITIES_DB);
        if (!res.ok) throw new Error(`Could not fetch ${_CITIES_DB} - received ${res.status} status!`);
        return await res.json();
    }
};

export default restApiService;
