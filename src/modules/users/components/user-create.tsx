import {FC} from "react";
import {UserForm, UserFormValues} from "./user-form";
import {RouterLink} from "../../root/components/router-link";
import {usersListRoute} from "../../router/routes";
import {useDispatch, useSelector} from "react-redux";
import {SubmitHandler} from "react-hook-form";
import {getSkills} from "../users-selectors";
import {usersActions} from "../users-slice";

export const UserCreate: FC = () => {
    const skills = useSelector(getSkills);
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<UserFormValues> = (data) => {
        console.log(data);

        dispatch(usersActions.saveUser({
            firstName: data.firstName,
            lastName: data.lastName,
            skills: data.skills
        }));
    };

    return (
        <>
            <h2>User Create</h2>
            <UserForm skills={skills} onSubmit={onSubmit}/>
            <RouterLink routeName={usersListRoute}>Back to user list</RouterLink>
        </>
    );
}