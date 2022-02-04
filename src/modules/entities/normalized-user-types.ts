import {Skill, UserName} from "../users/user-types";

export type NormSkill = Skill;

export interface NormUser extends UserName {
    id: string;
    regnalNumber: number;
    skills: string[];
}

export interface NormUserSkill {
    id: string;
    skill: string;
    level: number;
}

export interface UserEntities {
    skills: { [key: string]: NormSkill };
    userSkills: { [key: string]: NormUserSkill };
    users: { [key: string]: NormUser };
}