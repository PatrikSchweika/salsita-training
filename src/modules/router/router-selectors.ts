import {RootState} from "../root/root-reducer";
import {createSelector} from "reselect";

export const getRouterState = (state: RootState) => state.router;

export const getRoute = createSelector(
    getRouterState,
    (state) => state.route
);