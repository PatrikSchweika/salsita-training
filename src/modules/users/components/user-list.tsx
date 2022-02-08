import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../users-slice";
import {getUsersList} from "../users-selectors";
import {MemoButton} from "../../root/components/memo-button";
import {User} from "../user-types";
import {RouterLink} from "../../root/components/router-link";
import {userDetailRoute} from "../../router/routes";

export const UserList: FC = () => {
    const userList: User[] = useSelector(getUsersList);
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
        <ul>
        {userList.length > 0 ?
            userList.map(user =>
                <li key={user.id}><RouterLink routeName={userDetailRoute} params={{'id': user.id}}>{user.firstName} {user.regnalNumber}. {user.lastName}</RouterLink>
                    {user.skills.map(skill => <div key={skill.skill.id}>Skill: {skill.skill.name} Level: {skill.level}</div>)}
                </li>) :
            <div>No Users</div>
        }
        </ul>
    </>
    );
}