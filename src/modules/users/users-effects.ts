import {User, UserId, UserName} from "./user-types";

const usersUrl = '/users';

export const getUsers = () => fetch(usersUrl)
    .then(res => res.json() as Promise<User[]>);

export const getUser = (id: UserId) => fetch(`${usersUrl}/${id}`)
    .then(res => res.json() as Promise<User>);

export const postUser = (userName: UserName) => fetch(usersUrl,
    {method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userName)})
    .then(res => res.json() as Promise<User>);

export const UsersEffects = {
    getUsers,
    getUser,
    postUser
}