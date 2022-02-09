import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SkillIds, UserId, UserIds, UserName, UserSaveRequest} from "./user-types";
import {actions} from "redux-router5";

interface UsersState {
    userIds: UserIds;
    detailUserId: UserId;
    skillIds: SkillIds;
}

const initState: UsersState = { userIds: [], detailUserId: '', skillIds: [] };

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
        }),
        skillsLoaded: (state, action: PayloadAction<SkillIds>) => ({
            ...state,
            skillIds: action.payload
        })
    }
});

export const usersActions = {
    ...usersSlice.actions,
    saveUser: createAction<UserSaveRequest, 'users/saveUser'>('users/saveUser'),
};

export const usersReducer = usersSlice.reducer;