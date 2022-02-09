import React, {FC, useEffect} from "react";
import {User, UserId} from "../user-types";
import {useDispatch, useSelector} from "react-redux";
import {getDetailUser, getSkills} from "../users-selectors";
import {RouterLink} from "../../root/components/router-link";
import {userCreateRoute, usersListRoute} from "../../router/routes";
import {usersActions} from "../users-slice";
import {UserForm, UserFormValues} from "./user-form";
import {SubmitHandler} from "react-hook-form";

export const UserDetail: FC = () => {
    const user = useSelector(getDetailUser);
    const skills = useSelector(getSkills);
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<UserFormValues> = (data) => {
        console.log(data);

        dispatch(usersActions.saveUser({
            id: user.id,
            firstName: data.firstName,
            lastName: data.lastName,
            skills: data.skills
        }));
    };

    return (
        <>
            <h2>User edit</h2>
            <UserForm onSubmit={onSubmit} skills={skills} user={user} key={user?.id} />
            <RouterLink routeName={usersListRoute}>Back to user list</RouterLink>
        </>
    );
}