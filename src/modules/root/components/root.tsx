import React from 'react';
import {Header} from './header'
import {UserList} from "../../users/components/user-list";

export const Root = () => (
    <>
        <Header title='User Management' />
        <UserList />
    </>
)