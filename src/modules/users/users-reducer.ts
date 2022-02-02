import {UserActions, UserActionTypes} from "./user-actions";
import {Reducer} from "redux";
import {User} from "./user-types";

interface UsersState {
    users: User[];
}

const initState: UsersState = { users: [] };

export const usersReducer: Reducer<UsersState, UserActions> = (state = initState, action) => {
    switch (action.type) {
        case UserActionTypes.usersAddUser:

            const userToAdd: User = {
                ...action.payload,
                id: state.users.length
            }

            return {
                ...state,
                users: [...state.users, userToAdd]
            }
        default:
            return state;
    }
}