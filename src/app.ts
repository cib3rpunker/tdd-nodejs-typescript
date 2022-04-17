import express, { Application } from 'express';
// import router from './routes';
import User from './user/User';
import bcrypt from 'bcrypt';

const app: Application = express();

app.use(express.json());
// app.use('/', router);

app.post('/api/1.0/users', (req, res) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    //METHOD C
    const user = { ...req.body, password: hash };

    // METHOD B
    // const user = Object.assign({}, req.body, { password: hash });

    // METHOD A
    // const user = {
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: hash,
    // };

    User.create(user).then(() => {
      return res.send({ message: 'User created' });
    });
  });
});

export default app;
