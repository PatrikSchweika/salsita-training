import {fork, takeEvery} from "redux-saga/effects";
import { actions, actionTypes } from 'redux-router5'
import {endsWithSegment} from "router5-helpers";
import {userCreateRoute, userDetailRoute, usersListRoute} from "../router/routes";
import {getSkills, getUser, getUsers} from "./users-saga";

function* onTransition({payload}: ReturnType<typeof actions.transitionSuccess>) {

    const route = payload.route;

    const isCurrentRoute = endsWithSegment(route);

    if (isCurrentRoute(usersListRoute)) {
        yield fork(getUsers);
    }
    else if (isCurrentRoute(userDetailRoute)) {
        const id = route.params['id'] as string;

        if (!id) {
            console.log('User ID is missing for userDetail route.')
            return;
        }

        yield fork(getUser, id);
    }

    if (isCurrentRoute(userDetailRoute) || isCurrentRoute(userCreateRoute)) {
        yield fork(getSkills);
    }
}

export function* usersRouteSaga() {
    yield takeEvery(actionTypes.TRANSITION_SUCCESS, onTransition);
}