// export {};
// const Sequelize = require('sequelize');
// const sequelize = require('../config/database');

import Sequelize from 'sequelize';
import sequelize from '../config/database';

const Model = Sequelize.Model;

class User extends Model {}

User.init(
  {
    username: { type: Sequelize.STRING /* required: true */ },
    email: { type: Sequelize.STRING /* required: true */ },
    password: { type: Sequelize.STRING /* required: true */ },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

export default User;
// module.exports = User;
