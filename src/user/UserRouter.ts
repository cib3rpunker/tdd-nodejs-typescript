import express from 'express';
import * as UserService from './UserService';

const router = express.Router();

router.post('/api/1.0/users', async (req, res) => {
  await UserService.save(req.body);

  return res.send({ message: 'User created' });
});

export default router;

// METHOD B
// const user = Object.assign({}, req.body, { password: hash });

// METHOD A
// const user = {
//   username: req.body.username,
//   email: req.body.email,
//   password: hash,
// };
