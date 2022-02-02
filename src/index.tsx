import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './modules/root/components/root';
import {AddUser, UserName} from "./modules/users/user-types";
import {compose, createStore} from "redux";
import {rootReducer} from "./modules/root/root-reducer";
import {UserActionCreators} from "./modules/users/user-actions";

interface State {
    readonly title: string;
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
    }
}


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let state : State = {
    title: 'User Management'
}

store.subscribe(() => render());

const dispatchUser: AddUser = (userName: UserName) => {
    store.dispatch(UserActionCreators.addUser(userName))
}

const render = () => {
    const users = store.getState().users.users;

    ReactDOM.render(
        <React.StrictMode>
            <Root title={state.title} users={users} addUser={dispatchUser} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render();