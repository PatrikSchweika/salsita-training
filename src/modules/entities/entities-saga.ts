import {normalize, Schema} from "normalizr";
import {user} from "./entities-schema";
import {put} from "redux-saga/effects";
import {entitiesActions} from "./entities-slice";
import {UserEntities} from "./normalized-user-types";

export function* normalizeAndStore<T,R>(data: T, schema: Schema<T>) {
    const normData = normalize<T, UserEntities, R>(data, schema);

    yield put(entitiesActions.entitiesUpdated(normData.entities));

    return normData.result;
}