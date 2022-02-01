import React, {FC} from 'react';
import {Header} from './header'
import {UserList} from "../../users/components/user-list";
import {AddUser, User} from "../../users/user-types";

interface RootProps {
    title: string;
    users: User[];
    addUser: AddUser;
}

export const Root: FC<RootProps> = ({title, users, addUser}) => (
    <>
        <Header title={title} />
        <UserList users={users} addUser={addUser} />
    </>
)