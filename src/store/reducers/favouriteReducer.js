import { createReducer } from "@reduxjs/toolkit";
import { addPersonToFavourite, removePersonFromFavourite } from '../actions';
import { getLocalStorage } from '@utils/localStorage';

const favourite = createReducer(getLocalStorage('store'),
        (builder) => {
           builder
                .addCase(addPersonToFavourite, (state, action) => { state.push(action.payload) }) 
                .addCase(removePersonFromFavourite,  (state, action) => { return state = state.filter(item => item.id !== action.payload) })
                .addDefaultCase(state => state)
        }
);

export default favourite;