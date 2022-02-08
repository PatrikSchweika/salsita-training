import {combineReducers} from "redux";
import {usersReducer} from "../users/users-slice";
import {titleReducer} from "../title/title-slice";
import {entitiesReducer} from "../entities/entities-slice";
import {router5Reducer} from "redux-router5";

export const rootReducer = combineReducers({
    users: usersReducer,
    title: titleReducer,
    entities: entitiesReducer,
    router: router5Reducer,
})

export type RootState = ReturnType<typeof rootReducer>;