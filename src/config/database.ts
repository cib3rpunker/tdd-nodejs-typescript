// const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hoaxify', 'my-db-user', 'hahahaha', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// const sequelize = new Sequelize('hoaxify', 'postgres', 'hahahaha', {
//   dialect: 'postgres',
//   storage: './database.sqlite',
// });

export default sequelize;
// module.exports = sequelize;
