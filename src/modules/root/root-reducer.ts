import {combineReducers} from "redux";
import {usersReducer} from "../users/users-slice";
import {titleReducer} from "../title/title-slice";

export const rootReducer = combineReducers({
    users: usersReducer,
    title: titleReducer
})

export type RootState = ReturnType<typeof rootReducer>;