import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../users-slice";
import {getUserList} from "../users-selectors";
import {MemoButton} from "../../root/components/memo-button";

export const UserList: FC = () => {
    const userList = useSelector(getUserList);
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
        <MemoButton onClick={addUserOneCallback} value='Add No One'>Add No one</MemoButton>
        <MemoButton onClick={addUserTwoCallback} value='Add Mother of Dragons'>Add Mother of Dragons</MemoButton>
        {userList.length > 0 ? userList.map(user =>
                <li>{user}</li>) :
            <div>No Users</div>
        }
    </>
    );
}

// <button onClick={() => dispatch(usersActions.addUser({firstName: 'Arya', lastName: 'Stark'}))}>
//     Add No One
// </button>
// <button onClick={() => dispatch(usersActions.addUser({firstName: 'Daenerys', lastName: 'Targaryen'}))}>
//     Add Mother of Dragons
// </button>