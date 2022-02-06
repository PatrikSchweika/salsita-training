import {Skill, User, UserSkill} from "../users/user-types";

export type NormSkill = Skill;

export interface NormUser extends Omit<User, 'skills'> {
    skills: string[];
}

export interface NormUserSkill extends Omit<UserSkill, 'skill'> {
    id: string;
    skill: string;
}

export interface UserEntities {
    skills: { [key: string]: NormSkill };
    userSkills: { [key: string]: NormUserSkill };
    users: { [key: string]: NormUser };
}