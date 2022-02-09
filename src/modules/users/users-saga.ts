import {fork, takeEvery, call, put} from 'redux-saga/effects';
import {usersActions} from "./users-slice";
import {UsersEffects} from "./users-effects";
import {Skill, SkillIds, User, UserId, UserIds} from "./user-types";
import {normalizeAndStore} from "../entities/entities-saga";
import {skill, user} from "../entities/entities-schema";
import {actions} from "redux-router5";
import {usersListRoute} from "../router/routes";

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

export function* getSkills() {
    try {
        const skills: Skill[] = yield call(UsersEffects.getSkills);
        const skillIds: SkillIds = yield call(normalizeAndStore, skills, [skill]);

        yield put(usersActions.skillsLoaded(skillIds));
    }
    catch (e) {
        console.log('failed: ', e);
    }
}

function* saveUser({payload}: ReturnType<typeof usersActions.saveUser>) {
    try {
        if (payload.id) {
            yield call(UsersEffects.updateUser, payload);
            yield put(actions.navigateTo(usersListRoute));
        }
        else {
            yield call(UsersEffects.postUser, payload);
            yield put(actions.navigateTo(usersListRoute));
        }

        yield fork(getUsers);
    }
    catch (e) {
        console.log('failed: ', e);
    }
}

export function* usersSaga() {
    yield takeEvery(usersActions.saveUser, saveUser);
}