import { createReducer } from "@reduxjs/toolkit";
import { addPersonToFavourite, removePersonFromFavourite } from '../actions';


const favourite = createReducer(initialState, {
        [addPersonToFavourite]: state => state,
        [removePersonFromFavourite]: state => state
    },
[],
state => state
);

export default favourite;