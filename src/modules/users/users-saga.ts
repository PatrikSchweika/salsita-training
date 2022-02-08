import {fork, takeEvery, call, put} from 'redux-saga/effects';
import {usersActions} from "./users-slice";
import {UsersEffects} from "./users-effects";
import {User, UserId, UserIds} from "./user-types";
import {normalizeAndStore} from "../entities/entities-saga";
import {user} from "../entities/entities-schema";

export function* getUsers() {
    try {
        const users: User[] = yield call(UsersEffects.getUsers);
        const userIds: UserIds = yield call(normalizeAndStore, users, [user]);
        
        yield put(usersActions.usersLoaded(userIds));
    }
    catch (e) {
        console.log('failed: ', e);
    }
}

export function* getUser(id: UserId) {
    try {
        const foundUser: User = yield call(UsersEffects.getUser, id);
        const userId: UserId = yield call(normalizeAndStore, foundUser, user);

        yield put(usersActions.detailUserLoaded(userId));
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
    yield takeEvery(usersActions.addUser, addUser);
}