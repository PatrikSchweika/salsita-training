import {schema} from "normalizr";
import Entity = schema.Entity;

const skill = new Entity('skills');

const userSkill = new Entity('userSkills', {
    skill: skill
}, {
    idAttribute: (val) => `${val.parent.id}:${val.skill.id}`
});

const user = new Entity('users', {
    skills: [userSkill]
});