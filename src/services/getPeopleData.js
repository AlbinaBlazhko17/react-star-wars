import { HTTP, SWAPI_ROOT, SWAPI_PEOPLE } from '../constants/api';

const getId = (url, category) => {
    const id = url
                .replace(HTTP + SWAPI_ROOT + category, '')
                .replace(/\//g, '');
    return id;
};

export const getPeopleImg = id => ``;

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);