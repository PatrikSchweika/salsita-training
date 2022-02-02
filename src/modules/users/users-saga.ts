import {fork, takeEvery, call, put} from 'redux-saga/effects';
import {usersActions} from "./users-slice";
import {UsersEffects} from "./users-effects";
import {User} from "./user-types";

function* getUsers() {
    try {
        const users: User[] = yield call(UsersEffects.getUsers);
        yield put(usersActions.usersLoaded(users))
    }
    catch (e) {
        console.log('failed: ', e);
    }
}

function* addUser({payload}: ReturnType<typeof usersActions.addUser>) {
    try {
        yield call(UsersEffects.postUser, payload);
        yield fork(getUsers);
    }
    catch (e) {
        console.log('failed: ', e);
    }
}

export function* usersSaga() {
    yield fork(getUsers);
    yield takeEvery(usersActions.addUser, addUser);
}