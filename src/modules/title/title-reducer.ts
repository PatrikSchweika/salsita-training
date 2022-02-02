import {Action, Reducer} from "redux";

interface TitleState {
    title: string;
}

const initState: TitleState = { title: 'User Management' };

export const titleReducer: Reducer<TitleState> = (state = initState) => {
    return state;
};