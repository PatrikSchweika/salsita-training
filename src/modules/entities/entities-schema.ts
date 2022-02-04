import {schema} from "normalizr";
const {Entity} = schema;

export const skill = new Entity('skills');

export const userSkill = new Entity('userSkills', {
    skill: skill
}, {
    idAttribute: (entity, parent) => `${parent.id}:${entity.skill.id}`
});

export const user = new Entity('users', {
    skills: [userSkill]
});