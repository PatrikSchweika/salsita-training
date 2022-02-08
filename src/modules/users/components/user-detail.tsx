import React, {FC, useEffect} from "react";
import {User, UserId} from "../user-types";
import {useDispatch, useSelector} from "react-redux";
import {getDetailUser} from "../users-selectors";
import {RouterLink} from "../../root/components/router-link";
import {usersListRoute} from "../../router/routes";
import {usersActions} from "../users-slice";

interface UserDetailProps {
    userId: UserId;
}

export const UserDetail: FC<UserDetailProps> = (props) => {
    const user: User | undefined = useSelector(getDetailUser);

    const userDetail = user ?
        <>
            <h2>Name: {user.firstName} {user.regnalNumber}. {user.lastName}</h2>
            {user.skills.length === 0 ?
                <div>No skills</div> :
                <ul>{user.skills.map(skill => <li key={skill.skill.id}>Skill: {skill.skill.name} Level: {skill.level}</li>)}</ul>}
        </>
        : <h2>User is loading</h2>;

    return (
        <>
            <h1>User detail</h1>
            {userDetail}
            <RouterLink routeName={usersListRoute}>Back to user list</RouterLink>
        </>
    );
}