import React, {FC} from 'react';
import {Header, HeaderProps} from './header'
import {UserList, UserListProps} from "../../users/components/user-list";

export type RootProps = HeaderProps & UserListProps;

export const Root: FC<RootProps> = ({title, users, addUser}) => (
    <>
        <Header title={title} />
        <UserList users={users} addUser={addUser} />
    </>
)