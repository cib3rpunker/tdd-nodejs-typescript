/* tslint:disable */
/* eslint-disable */
declare module 'node-config-ts' {
  interface IConfig {
    sqlite: DbConf;
    test: DbConf;
  }
  interface DbConf {
    database: string;
    username: string;
    password: string;
    dialect: Config.Dialect;
    storage: string;
    logging: boolean;
  }
  export const config: Config;
  export type Config = IConfig;
}
