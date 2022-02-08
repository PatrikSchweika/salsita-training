import {Route} from "router5";

export const usersListRoute = 'users';
export const userDetailRoute = 'users.detail';

export const routes: Route[] = [
    { name: usersListRoute, path: '/users' },
    { name: userDetailRoute, path: '/detail/:id' }
];