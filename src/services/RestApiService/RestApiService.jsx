const restApiService = {
    _CITIES_DB: "data/cities_db.json",

    getResource: async (url) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Could not fetch ${url} - received ${res.status} status!`);
        return await res.json();
    }
};

export default restApiService;