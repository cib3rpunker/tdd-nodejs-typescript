// const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize';
// import config from 'config';
import { config as dbConfig } from 'node-config-ts';

// const dbConfig = config.get('database');
// const dbConfig = config.;
//.get('database');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    // dialect: dbConfig.dialect,
    dialect: 'sqlite',
    storage: dbConfig.storage,
    logging: dbConfig.logging,
  }
);

// const sequelize = new Sequelize('hoaxify', 'my-db-user', 'hahahaha', {
//   dialect: 'sqlite',
//   storage: './database.sqlite',
//   logging: false,
// });

// const sequelize = new Sequelize('hoaxify', 'postgres', 'hahahaha', {
//   dialect: 'postgres',
//   storage: './database.sqlite',
// });

export default sequelize;
// module.exports = sequelize;
