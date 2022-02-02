import {Reducer} from "redux";
import {createReducer} from "@reduxjs/toolkit";

interface TitleState {
    title: string;
}

const initState: TitleState = { title: 'User Management' };

export const titleReducer: Reducer<TitleState> = createReducer(initState, (builder) => {});