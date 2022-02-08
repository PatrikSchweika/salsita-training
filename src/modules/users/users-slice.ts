import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserId, UserIds, UserName} from "./user-types";

interface UsersState {
    userIds: UserIds;
    detailUserId: UserId;
}

const initState: UsersState = { userIds: [], detailUserId: '' };

const usersSlice = createSlice({
    name: 'users',
    initialState: initState,
    reducers: {
        usersLoaded: (state, action: PayloadAction<UserIds>) => ({
            ...state,
            userIds: action.payload
        }),
        detailUserLoaded: (state, action: PayloadAction<UserId>) => ({
            ...state,
            detailUserId: action.payload
        })
    }
});

export const usersActions = {
    ...usersSlice.actions,
    addUser: createAction<UserName, 'users/addUser'>('users/addUser'),
}
export const usersReducer = usersSlice.reducer;