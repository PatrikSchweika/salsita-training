import React, {FC} from 'react';
import {Header} from './header'
import {UserList} from "../../users/components/user-list";

export const Root: FC = () => (
    <>
        <Header />
        <UserList />
    </>
)