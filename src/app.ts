import express, { Application } from 'express';
// import router from './routes';
import User from './user/User';

const app: Application = express();

app.use(express.json());
// app.use('/', router);

app.post('/api/1.0/users', (req, res) => {
  User.create(req.body).then(() => {
    return res.send({ message: 'User created' });
  });
});

export default app;
