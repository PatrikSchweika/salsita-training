import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../root/root-reducer";
import {usersActions} from "../users-slice";

export const UserList: FC = () => {

    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();

    return (
    <>
        <button onClick={() => dispatch(usersActions.addUser({firstName: 'Arya', lastName: 'Stark'}))}>
            Add No One
        </button>
        <button onClick={() => dispatch(usersActions.addUser({firstName: 'Daenerys', lastName: 'Targaryen'}))}>
            Add Mother of Dragons
        </button>
        {users.length > 0 ? users.map(user =>
                <li>{user.firstName} {user.lastName}</li>) :
            <div>No Users</div>
        }
    </>
    )
}