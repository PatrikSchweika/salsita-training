import {combineReducers} from "redux";
import {usersReducer} from "../users/users-slice";
import {titleReducer} from "../title/title-slice";
import {entitiesReducer} from "../entities/entities-slice";

export const rootReducer = combineReducers({
    users: usersReducer,
    title: titleReducer,
    entities: entitiesReducer
})

export type RootState = ReturnType<typeof rootReducer>;