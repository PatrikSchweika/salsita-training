import {RootState} from "../root/root-reducer";
import {createSelector} from "reselect";

export const getUsersState = (state: RootState) => state.users;

export const getUsers = createSelector(
    getUsersState,
    (state) => state.users
)

export const getUserList = createSelector(
    getUsers,
    (users) => users.map(user => `${user.firstName} ${user.lastName.toUpperCase()}`)
)