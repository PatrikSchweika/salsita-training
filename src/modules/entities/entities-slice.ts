import {UserEntities} from "./normalized-user-types";
import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import _ from "lodash";

export type EntitiesState = UserEntities;

const initialState: EntitiesState = {users: {}, userSkills: {}, skills: {}};

const arrayReplaceCustomizer = (objValue: undefined, srcValue: undefined) => {
    if (_.isArray(objValue) && _.isArray(srcValue)) {
        return srcValue;
    }

    return undefined;
}

const updateEntities: CaseReducer<EntitiesState, PayloadAction<EntitiesState>> = (state, action) =>
    _.mergeWith(state, action.payload, arrayReplaceCustomizer)

const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        entitiesUpdated : updateEntities
    }
});

export const entitiesActions = entitiesSlice.actions;
export const entitiesReducer = entitiesSlice.reducer;