import {combineReducers} from "redux";
import {usersReducer} from "../users/users-reducer";
import {titleReducer} from "../title/title-reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    title: titleReducer
})

type RootState = ReturnType<typeof rootReducer>;