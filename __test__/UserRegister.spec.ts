import request from 'supertest';
import app from '../src/app';

import User from '../src/user/User';
import sequelize from '../src/config/database';

beforeAll(() => {
  return sequelize.sync(/* {force: true} */);
});

beforeEach(() => {
  return User.destroy({ truncate: true });
});

const validUser = {
  username: 'user1',
  email: 'user1@test.com',
  password: 'P4ssword'
};

const postUser = (user = validUser) => {
  return request(app).post('/api/1.0/users').send(user);
};

describe('User Registration', () => {
  it('returns 200 OK when signup request i valid', async () => {
    const response = await postUser();
    expect(response.status).toBe(200);
  });

  it('returns success message when signup request is valid', async () => {
    const response = await postUser();
    expect(response.body.message).toBe('User created');
  });

  it('saves the user to database', async () => {
    await postUser();
    const userList = await User.findAll();
    expect(userList.length).toBe(1);
  });

  it('saves the username and email to database', async () => {
    await postUser();
    const userList = await User.findAll();
    const savedUser = userList[0];
    expect(savedUser.get('username')).toBe('user1');
    expect(savedUser.get('email')).toBe('user1@test.com');
  });

  it('hashes the password in database', async () => {
    await postUser();
    const userList = await User.findAll();
    const savedUser = userList[0];
    expect(savedUser.get('password')).not.toBe('P4ssword');
  });

  // 'returns 400 when username is null'
  it('returns 400 when username is empty', async () => {
    const response = await postUser({
      username: '',
      email: 'user1@test.com',
      password: 'P4ssword'
    });

    expect(response.status).toBe(400);
  });

  it('returns validationErros field in response body when validation error occurs', async () => {
    const response = await postUser({
      username: '',
      email: 'user1@test.com',
      password: 'P4ssword'
    });

    const body = response.body;
    expect(body.validationErrors).not.toBeUndefined();
  });

  it(`returns "🔴 Please enter a valid username" when username is empty. Typescript protects against null or undefined values`, async () => {
    const response = await postUser({
      username: '',
      email: 'user1@test.com',
      password: 'P4ssword'
    });

    const body = response.body;
    expect(body.validationErrors.username).toBe(
      '🔴 Please enter a valid username.'
    );
  });

  it(`returns "🔴 Please enter a valid email" when email is empty. Typescript protects against null or undefined values`, async () => {
    const response = await postUser({
      username: 'user1',
      email: '',
      password: 'P4ssword'
    });

    const body = response.body;
    expect(body.validationErrors.email).toBe('🔴 Please enter a valid email.');
  });

  it(`returns "🔴 Please enter a valid username/email" when both are invalid. Typescript protects against null or undefined values`, async () => {
    const response = await postUser({
      username: '',
      email: '',
      password: 'P4ssword'
    });

    const body = response.body;

    expect(Object.keys(body.validationErrors)).toEqual(['username', 'email']);
  });
});
