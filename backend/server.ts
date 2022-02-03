import express from 'express';
import {User, UserName} from "../src/modules/users/user-types";

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users: User[] = [{id: 0, firstName: 'Donald', lastName: 'Trump'}];

app.get('/users', (req, res) => {
   res.json(users);
});

app.post('/users', (req, res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;

   if (firstName === undefined || lastName === undefined) {
      res.sendStatus(400);
   }
   else {
      const newUser: User = {
         id: users.length,
         firstName: firstName,
         lastName: lastName
      };

      users = [...users, newUser];

      res.json(newUser);
   }
});

app.listen(port, () =>
    console.log(`The server is running on port ${port}!`)
)