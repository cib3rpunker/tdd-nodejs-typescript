/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Request, Response, NextFunction } from 'express';
import * as UserService from './UserService';

const router = express.Router();

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  if (
    user.username === null ||
    user.username === undefined ||
    user.username === ''
  ) {
    req.body.validationErrors = {
      username: '🔴 Please enter a valid username.'
    };
  }

  next();
};

const validEmail = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  if (user.email === null || user.email === undefined || user.email === '') {
    req.body.validationErrors = {
      ...req.body.validationErrors,
      email: '🔴 Please enter a valid email.'
    };
  }

  next();
};

// Promise returned in function argument where a void return was expected. eslint@typescript-eslint/no-misused-promises
router.post(
  '/api/1.0/users',
  validateUsername,
  validEmail,
  async (req, res, next) => {
    if (req.body.validationErrors) {
      const response = { validationErrors: { ...req.body.validationErrors } };
      return res.status(400).send(response);
    }

    await UserService.save(req.body);
    return res.send({ message: 'User created' });
  }
);

export default router;
