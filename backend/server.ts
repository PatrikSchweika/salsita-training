import express from 'express';
import {Skill, User, UserName, UserSkill} from "../src/modules/users/user-types";

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const skills: Skill[] = [{id: 'skill-0', name: 'Politics'},{id: 'skill-1', name: 'Sword Fighting'}, {id: 'skill-2', name: 'Dragon Riding'}];
const users: User[] = [{id: 'user-0', firstName: 'Donald', lastName: 'Trump', regnalNumber: 1, skills: [{skill: skills[0], level: 9999}]}];

app.get('/users', (req, res) => {
   res.json(users);
});

const isUserName = (userName: unknown): userName is UserName => (
    typeof userName === 'object' &&
       userName !== null &&
       'firstName' in userName &&
       'lastName' in userName
);

app.post('/users', (req, res) => {
   const userName = req.body;

   if (!isUserName(userName)) {
      res.sendStatus(400);
      return;
   }

   const firstName = userName.firstName;
   const lastName = userName.lastName;

   const regnalNumber = users.filter(user =>
       user.firstName === firstName &&
       user.lastName === lastName).length + 1;

   const userSkills: UserSkill[] = []
   const level = 3 * regnalNumber;

   if (firstName === 'Arya' && lastName === 'Stark')
   {
      userSkills.push({ skill: skills[1], level})
   }
   else if (firstName === 'Daenerys' && lastName === 'Targaryen')
   {
      userSkills.push({ skill: skills[2], level})
   }

   const newUser: User = {
      id: `user-${users.length}`,
      firstName,
      lastName,
      regnalNumber: regnalNumber,
      skills: userSkills
   };

   users.push(newUser);
   res.json(newUser);
});

app.listen(port, () =>
    console.log(`The server is running on port ${port}!`)
);