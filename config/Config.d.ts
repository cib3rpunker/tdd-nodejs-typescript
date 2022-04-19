/* tslint:disable */
/* eslint-disable */
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
