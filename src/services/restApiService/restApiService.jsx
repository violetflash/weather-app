const _CITIES_DB = "data/cities_db.json";
const _CITIES_LS_KEY = 'citiesList';
const _CITIES_CURR_ID = 'cityId';
const _INITIAL_ID = { name: "Омск", id: "1496153"};

const restApiService = {
    getCitiesList: async () => {
        const res = await fetch(_CITIES_DB);
        if (!res.ok) throw new Error(`Could not fetch ${_CITIES_DB} - received ${res.status} status!`);
        return await res.json();
    }
};

export default restApiService;

export { _CITIES_CURR_ID, _CITIES_LS_KEY, _INITIAL_ID };
