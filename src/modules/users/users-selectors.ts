import {RootState} from "../root/root-reducer";
import {createSelector} from "reselect";
import {User} from "./user-types";

export const getUsersState = (state: RootState) => state.users;

export const getUsers = createSelector(
    getUsersState,
    (state) => state.users
)

export const getUsersInUpperCase = createSelector(
    getUsers,
    (users) => users.map((user: User) => ({...user, lastName: user.lastName.toUpperCase()}))
)