import {fork} from "redux-saga/effects";
import {usersSaga} from "../users/users-saga";
import {usersRouteSaga} from "../users/users-route-saga";

export function* rootSaga() {
    yield fork(usersRouteSaga);
    yield fork(usersSaga);
}