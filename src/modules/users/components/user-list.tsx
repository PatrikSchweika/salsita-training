import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../users-slice";
import {getUsersInUpperCase} from "../users-selectors";
import {MemoButton} from "../../root/components/memo-button";
import {User} from "../user-types";

export const UserList: FC = () => {
    const userList: User[] = useSelector(getUsersInUpperCase);
    const dispatch = useDispatch();

    const addUserOneCallback = useCallback(
        () => dispatch(usersActions.addUser({firstName: 'Arya', lastName: 'Stark'})),
        [dispatch]
    );

    const addUserTwoCallback = useCallback(
        () => dispatch(usersActions.addUser({firstName: 'Daenerys', lastName: 'Targaryen'})),
        [dispatch]
    );

    return (
    <>
        <MemoButton onClick={addUserOneCallback}>Add No one</MemoButton>
        <MemoButton onClick={addUserTwoCallback}>Add Mother of Dragons</MemoButton>
        {userList.length > 0 ? userList.map(user =>
                <li key={user.id}>{user.firstName} {user.lastName}</li>) :
            <div>No Users</div>
        }
    </>
    );
}