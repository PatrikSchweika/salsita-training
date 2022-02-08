export interface UserName {
    firstName: string;
    lastName: string;
}

export interface User extends UserName {
    id: string;
    regnalNumber: number;
    skills: UserSkill[];
}

export interface Skill {
    id: string;
    name: string;
}

export interface UserSkill {
    skill: Skill;
    level: number;
}

export type UserId = string;
export type UserIds = UserId[];