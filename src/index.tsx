import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './modules/root/components/root';
import {AddUser, User, UserName} from "./modules/users/user-types";

interface State {
    readonly title: string;
    readonly users: User[];
}

let state : State = {
    title: 'User Management',
    users: []
}

const addUser: AddUser = (userName: UserName) => {
    const userToAdd = {
        ...userName,
        id: state.users.length
    };

    state = {
        ...state,
        users: [...state.users, userToAdd]
    };

    render();
}

const render = () => ReactDOM.render(
    <React.StrictMode>
        <Root title={state.title} users={state.users} addUser={addUser} />
    </React.StrictMode>,
    document.getElementById('root')
);

render();