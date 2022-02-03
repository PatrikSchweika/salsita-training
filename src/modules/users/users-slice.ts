import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserName} from "./user-types";

interface UsersState {
    users: User[];
}

const initState: UsersState = { users: [] };

const usersSlice = createSlice({
    name: 'users',
    initialState: initState,
    reducers: {
        usersLoaded: (state, action: PayloadAction<User[]>) => ({
                ...state,
                users: action.payload
        }),
    }
});

export const usersActions = {
    ...usersSlice.actions,
    addUser: createAction<UserName, 'users/addUser'>('users/addUser')
}
export const usersReducer = usersSlice.reducer;