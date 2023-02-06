import { createReducer } from "@reduxjs/toolkit";
import { omit } from 'lodash';
import { addPersonToFavourite, removePersonFromFavourite } from '../actions';

const initialState = {};

const favourite = createReducer(initialState, {
        [addPersonToFavourite]: (state, action) => {
            return {...state, ...action.payload}
        },
        [removePersonFromFavourite]: (state, action) => { return omit(state, [action.payload]) }
    },
[],
state => state
);

export default favourite;