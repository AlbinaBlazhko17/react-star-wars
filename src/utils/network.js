const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

export const getApiResource = async (url) => {

    try {
        const res =  await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        const data = (await res).json;

        return data;
    } catch(e) {
        throw e;
    }
}