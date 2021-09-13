

const RestApiService = {
    _CITIES_DB: "%PUBLIC_URL%/cities_db.json",

    getResource: async (url) => {
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Could not fetch ${url} - received ${res.status} status!`);
        return await res.json();
    }
};

console.log(RestApiService.getResource(RestApiService._CITIES_DB));

export default RestApiService;