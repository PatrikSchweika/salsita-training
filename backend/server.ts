import express from 'express';
import {Skill, User, UserName, UserSaveRequest, UserSkill} from "../src/modules/users/user-types";

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const skills: Skill[] = [{id: 'skill-0', name: 'Politics'},{id: 'skill-1', name: 'Sword Fighting'}, {id: 'skill-2', name: 'Dragon Riding'}];
const users: User[] = [{id: 'user-0', firstName: 'Donald', lastName: 'Trump', regnalNumber: 1, skills: [{skill: skills[0], level: 9999}]}];

app.get('/users', (req, res) => {
   res.json(users);
});

app.get('/users/:id', (req, res) => {
   const id: string = req.params.id;
   const user = users.find(user => user.id === id);

   if (!user) {
      res.sendStatus(404);
      return;
   }

   res.json(user);
});

const calculateRegnalNumber = ({ firstName, lastName }: UserName) =>
    users.reduce((n) => n + 1, 0);

const calculateSkillLevel = (regnalNumber: number) => regnalNumber * 3;

app.patch('/users/:id', (req, res) => {
   const id = req.params.id;
   const userRequest = req.body as UserSaveRequest;

   if (!userRequest) {
      res.sendStatus(400);
      return;
   }

   const user = users.find(user => user.id === id);

   if (!user) {
      res.sendStatus(404);
      return;
   }

   const {firstName, lastName, skills: skillIds} = userRequest;

   user.regnalNumber = calculateRegnalNumber(userRequest);
   user.firstName = firstName;
   user.lastName = lastName;
   const level = calculateSkillLevel(user.regnalNumber);
   user.skills = [];

   skillIds.forEach(id => {
      const skill = skills.find(skill => skill.id === id);

      if (skill) {
         user.skills.push({
            skill: skill,
            level
         });
      }
   });

   res.json(user);
});

app.get('/skills', (req, res) => {
   res.json(skills);
});

const isUserName = (userName: unknown): userName is UserName => (
    typeof userName === 'object' &&
       userName !== null &&
       'firstName' in userName &&
       'lastName' in userName
);

app.post('/users', (req, res) => {
   const userRequest = req.body as UserSaveRequest;

   if (!userRequest) {
      res.sendStatus(400);
      return;
   }

   const {firstName, lastName, skills: skillIds} = userRequest;

   const regnalNumber = calculateRegnalNumber(userRequest);
   const userSkills: UserSkill[] = []
   const level = calculateSkillLevel(regnalNumber);

   skillIds.forEach(id => {
      const skill = skills.find(skill => skill.id === id);

      if (skill) {
         userSkills.push({skill, level});
      }
   });

   const newUser: User = {
      id: `user-${users.length}`,
      firstName,
      lastName,
      regnalNumber,
      skills: userSkills
   };

   users.push(newUser);
   res.json(newUser);
});

app.listen(port, () =>
    console.log(`The server is running on port ${port}!`)
);