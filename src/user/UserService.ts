import User from './User';
import bcrypt from 'bcrypt';

const save = async (body: any) => {
  const hash = await bcrypt.hash(body.password, 10);
  const user = { ...body, password: hash };
  await User.create(user);
};

export { save };
