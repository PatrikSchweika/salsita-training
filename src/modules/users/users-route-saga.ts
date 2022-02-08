import {fork, takeEvery} from "redux-saga/effects";
import { actions, actionTypes } from 'redux-router5'
import {endsWithSegment} from "router5-helpers";
import {userDetailRoute, usersListRoute} from "../router/routes";
import {getUser, getUsers} from "./users-saga";

function* onTransition({payload}: ReturnType<typeof actions.transitionSuccess>) {

    const route = payload.route;

    if (endsWithSegment(route, usersListRoute)) {
        yield fork(getUsers);
    }
    else if (endsWithSegment(route, userDetailRoute)) {
        const id = route.params['id'] as string;

        if (!id) {
            return;
        }

        yield fork(getUser, id);
    }
}

export function* usersRouteSaga() {
    yield takeEvery(actionTypes.TRANSITION_SUCCESS, onTransition);
}