import {combineReducers} from "redux";
import {usersReducer} from "../users/users-reducer";

export const rootReducer = combineReducers({
    users: usersReducer
})

type RootState = ReturnType<typeof rootReducer>;