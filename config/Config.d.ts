/* tslint:disable */
/* eslint-disable */
// TODO: DELETE THIS FILE.
// -  node-config-ts package was deleted, this file was related of that dependency.
declare module "node-config-ts" {
  interface IConfig {
    database: string
    username: string
    password: string
    dialect: string
    storage: string
    logging: boolean
  }
  export const config: Config
  export type Config = IConfig
}
