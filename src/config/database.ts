import { Sequelize } from 'sequelize';
import { Dialect } from 'sequelize/types';

// import config from 'config';
// import {config} from 'node-config-ts'
import config from '../config'


const sequelize = new Sequelize(
  config.sqlite.database,
  config.sqlite.username,
  config.sqlite.password,
  {
    dialect: config.sqlite.dialect as Dialect,
    storage: config.sqlite.storage,
    logging: config.sqlite.logging,
  }
);

export default sequelize;
