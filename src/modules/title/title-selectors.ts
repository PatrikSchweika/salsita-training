import {RootState} from "../root/root-reducer";
import {createSelector} from "reselect";

export const getTitleState = (state: RootState) => state.title;

export const getTitle = createSelector(
    getTitleState,
    (state) => state.title
)