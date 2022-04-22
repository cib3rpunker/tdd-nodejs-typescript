import { Sequelize } from 'sequelize';
import { Dialect } from 'sequelize/types';

// import config from 'config';
// import {config} from 'node-config-ts'
import config from '../config';

const getSqliteStorage = (): string => {
  // if (config.NODE_ENV === config.sqlite.dev_env) {
  //   return config.sqlite.dev_storage;
  // }

  return config.NODE_ENV === config.sqlite.dev_env
    ? config.sqlite.dev_storage
    : config.sqlite.test_storage;
};

const sequelize = new Sequelize(
  config.sqlite.database,
  config.sqlite.username,
  config.sqlite.password,
  {
    dialect: config.sqlite.dialect as Dialect,
    storage: getSqliteStorage(),
    logging: config.sqlite.logging
  }
);

export default sequelize;
