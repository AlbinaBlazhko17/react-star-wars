import { createAction } from '@reduxjs/toolkit';

export const setPersonToFavourite = createAction('ADD_PERSON_TO_FAVOURITE');

export const removePersonFromFavourite = createAction('REMOVE_PERSON_FROM_FAVOURITE');