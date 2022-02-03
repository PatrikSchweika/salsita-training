import {User, UserName} from "./user-types";

export const getUsers = () => fetch('/users')
        .then(res => res.json() as Promise<User[]>);

export const postUser = (userName: UserName) => fetch('/users',
    {method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userName)})
    .then(res => res.json() as Promise<User>);

export const UsersEffects = {
    getUsers,
    postUser
}