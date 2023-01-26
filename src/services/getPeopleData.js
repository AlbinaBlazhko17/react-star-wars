import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, GUIDE_IMG_EXTENSION, URL_IMG_PERSON } from '../constants/api';

const getId = (url, category) => {
    const id = url
                .replace(HTTPS + SWAPI_ROOT + category, '')
                .replace(/\//g, '');
    return id;
};

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);