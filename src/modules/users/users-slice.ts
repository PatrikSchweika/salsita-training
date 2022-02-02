import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserName} from "./user-types";

interface UsersState {
    users: User[];
}

const initState: UsersState = { users: [] };

const usersSlice = createSlice({
    name: 'users',
    initialState: initState,
    reducers: {
        addUser: (state, action: PayloadAction<UserName>) => {
            const userToAdd: User = {
                ...action.payload,
                id: state.users.length
            }

            return {
                ...state,
                users: [...state.users, userToAdd]
            }
        },
    }
})

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;