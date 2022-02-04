import {RootState} from "../root/root-reducer";
import {createSelector} from "reselect";
import {User} from "./user-types";
import {getDenormUsers} from "../entities/entities-selectors";

export const getUsersState = (state: RootState) => state.users;

export const getUsersIds = createSelector(
    getUsersState,
    (state) => state.userIds
);

export const getUsers = createSelector(
    getUsersIds,
    getDenormUsers,
    (userIds, users) => userIds.map(id => users[id])
);


export const getUsersList = createSelector(
    getUsers,
    (users) => users.map((user: User) => ({
        ...user,
        lastName: user.lastName.toUpperCase()
    }))
);