/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import * as UserService from './UserService';

const router = express.Router();

// Promise returned in function argument where a void return was expected. eslint@typescript-eslint/no-misused-promises
router.post('/api/1.0/users', async (req, res) => {
  const user = req.body;
  // console.log('👿 req.body:', req.body);
  // console.log('🙃 user:', user);

  if (
    user.username === null ||
    user.username === undefined ||
    user.username === ''
  ) {
    return res.status(400).send({
      validationErrors: { username: '🔴 Please enter a valid username.' }
    });
  }

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
