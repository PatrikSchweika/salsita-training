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


export const getDenormUsers = createSelector(
    getUserEntities,
    getUserSkillEntities,
    getSkillEntities,
    (users, userSkills, skills) => _.mapValues(users, (user: NormUser) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        regnalNumber: user.regnalNumber,
        skills: user.skills.map(skillId =>
            createUserSkillFromNorm(userSkills[skillId], skills))
    }))
)

export const getDenormSkills = createSelector(
    getSkillEntities,
    skills => _.mapValues(skills, (skill: NormSkill) => ({
                id: skill.id,
                name: skill.name
            }
        ))
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