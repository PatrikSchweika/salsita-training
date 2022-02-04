import {User} from "../users/user-types";
import {normalize} from "normalizr";
import {user} from "./entities-schema";
import {put} from "redux-saga/effects";
import {entitiesActions} from "./entities-slice";
import {NormUser, UserEntities} from "./normalized-user-types";

export function* normalizeAndStore(data: User[]) {
    const normData = normalize<NormUser, UserEntities, string[]>(data, [user]);

    yield put(entitiesActions.entitiesUpdated(normData.entities));

    return normData.result;
}