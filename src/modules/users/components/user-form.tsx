import { FC } from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Skill, User} from "../user-types";
import {useSelector} from "react-redux";
import {getSkills} from "../users-selectors";

interface UserFormProps {
    user?: User;
    onSubmit: SubmitHandler<UserFormValues>;
    skills: Skill[];
}

export interface UserFormValues {
    firstName: string;
    lastName: string;
    skills: string[];
}

export const UserForm: FC<UserFormProps> = (props) => {
    const { user, onSubmit, skills } = props;

    const { register, handleSubmit, control, formState: { errors } } = useForm<UserFormValues>({
        defaultValues: {
            firstName: user?.firstName,
            lastName: user?.lastName,
            skills: user?.skills.map(skill => skill.skill.id)}
        });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name</label>
                <input {...register('firstName', { required: true })} />
                {errors.firstName?.type === 'required' && 'Required'}
            </div>
            <div>
                <label>Last Name</label>
                <input {...register('lastName', { required: true })} />
                {errors.lastName?.type === 'required' && 'Required'}
            </div>

            <Controller
                name='skills'
                control={control}
                rules={{ required: true }}
                render={({ field: {onChange, value} }) => {
                    return (
                        <>
                            <label>Skills</label>
                            <select
                                id='skills'
                                multiple
                                value={value}
                                onChange={(event) =>
                                    onChange(
                                        Array.from(event.target.selectedOptions).map(
                                            (selectedOption) => selectedOption.value
                                        )
                                    )
                                }
                            >
                                {skills.map(skill => (
                                    <option key={skill.id} value={skill.id}>
                                        {skill.name}
                                    </option>
                                ))}
                            </select>
                            {errors.skills && 'Required'}
                        </>
                    );
                }}
            />

            <div>
                <button type='submit'>Save</button>
            </div>
        </form>
    );
};