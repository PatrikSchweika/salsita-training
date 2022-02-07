import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserIds, UserName} from "./user-types";

interface UsersState {
    userIds: UserIds;
}

const initState: UsersState = { userIds: [] };

const usersSlice = createSlice({
    name: 'users',
    initialState: initState,
    reducers: {
        usersLoaded: (state, action: PayloadAction<UserIds>) => ({
            ...state,
            userIds: action.payload
        }),
    }
});

export const usersActions = {
    ...usersSlice.actions,
    addUser: createAction<UserName, 'users/addUser'>('users/addUser')
}
export const usersReducer = usersSlice.reducer;