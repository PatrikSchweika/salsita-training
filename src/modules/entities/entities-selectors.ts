import {RootState} from "../root/root-reducer";
import {createSelector} from "reselect";
import _ from "lodash";
import {NormSkill, NormUser, NormUserSkill} from "./normalized-user-types";

export const getEntities = (state: RootState) => state.entities;

export const getSkillEntities = createSelector(
    getEntities,
    entities => entities.skills
);

export const getUserEntities = createSelector(
    getEntities,
    entities => entities.users
);

export const getUserSkillEntities = createSelector(
    getEntities,
    entities => entities.userSkills
);

const createUserSkillFromNorm = (userSkill: NormUserSkill, skills: {[key:string]:NormSkill}) => ({
    skill: skills[userSkill.skill],
    level: userSkill.level
});

export const getDenormUserSkills = createSelector(
    getUserSkillEntities,
    getSkillEntities,
    (userSkills, skills) => _.mapValues(userSkills, (userSkill: NormUserSkill) =>
        createUserSkillFromNorm(userSkill, skills))
);

export const getDenormUsers = createSelector(
    getUserEntities,
    getDenormUserSkills,
    (users, userSkills) => _.mapValues(users, (user: NormUser) => ({
        ...user,
        skills: user.skills.map(skill => userSkills[skill])
    }))
);