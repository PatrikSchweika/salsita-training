import {Skill, User, UserId, UserName, UserSaveRequest} from "./user-types";

const usersUrl = '/users';
const skillsUrl = '/skills';

export const getUsers = () => fetch(usersUrl)
    .then(res => res.json() as Promise<User[]>);

export const getSkills = () => fetch(skillsUrl)
    .then(res => res.json() as Promise<Skill[]>);

export const getUser = (id: UserId) => fetch(`${usersUrl}/${id}`)
    .then(res => res.json() as Promise<User>);

export const postUser = (user: UserSaveRequest) => fetch(usersUrl,
    {method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)})
    .then(res => res.json() as Promise<User>);

export const updateUser = (user: UserSaveRequest) => fetch(`${usersUrl}/${user!.id}`,
    { method: 'PATCH', body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json() as Promise<User>);

export const UsersEffects = {
    getSkills,
    getUsers,
    getUser,
    postUser,
    updateUser
};