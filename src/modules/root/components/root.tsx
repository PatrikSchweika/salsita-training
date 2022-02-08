import React, {FC} from 'react';
import {Header} from './header';
import {UsersRoute} from "../../users/components/users-route";

export const Root: FC = () => (
    <>
        <Header />
        <UsersRoute />
    </>
)