import {Reducer} from "redux";
import {createSlice} from "@reduxjs/toolkit";

interface TitleState {
    title: string;
}

const initState: TitleState = { title: 'User Management' };

const titleSlice = createSlice({
    name: 'title',
    initialState: initState,
    reducers: {}
});

export const titleReducer = titleSlice.reducer;
export const titleActions = titleSlice.actions;