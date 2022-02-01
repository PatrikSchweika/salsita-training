import React, {FC, useState} from 'react';
import {User} from "../user-types";

export const UserList: FC = () => {

    const [users, setUsers] = useState<User[]>([])

    const addUser = (firstName: string, lastName: string) => {
        const userToAdd : User = {
            firstName: firstName,
            lastName: lastName,
            id: users.length
        };

        setUsers([...users, userToAdd]);
    }

    return (
        <>
            <button onClick={() => addUser('Arya', 'Stark')}>Add No One</button>
            <button onClick={() => addUser('Daenerys', 'Targaryen')}>Add Mother of Dragons</button>
            {users.length > 0 ? users.map(user =>
                <li>{user.firstName} {user.lastName}</li>) :
                <div>No Users</div>
            }
        </>
    )
}