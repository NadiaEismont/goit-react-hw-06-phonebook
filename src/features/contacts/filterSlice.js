import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = '';

export const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        changingFilter(action) {
            return action.payload;
        }
    }
})

export const { changingFilter } = filterSlice.actions