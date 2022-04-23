
import dotenv from 'dotenv';
// import { Dialect } from 'sequelize/types';
// import assert from 'assert';

dotenv.config();

// const {
// 	// PORT,
// 	// HOST,
// 	// HOST_URL,
// 	// COOKIE_ENCRYPT_PWD,
// 	// SQL_SERVER,
// 	// SQL_DATABASE,
// 	// SQL_USER,
// 	// SQL_PASSWORD,
// 	// OKTA_ORG_URL,
// 	// OKTA_CLIENT_ID,
// 	// OKTA_CLIENT_SECRET
// 	SQLITE_DATABASE,
// 	SQLITE_USERNAME,
// 	SQLITE_PASSWORD,
// 	SQLITE_DIALECT,
// 	SQLITE_STORAGE,
// 	SQLITE_LOGGING
// } = process.env;

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';
const SQLITE_DATABASE = process.env.SQLITE_DATABASE as string;
const SQLITE_USERNAME = process.env.SQLITE_USERNAME as string;
const SQLITE_PASSWORD = process.env.SQLITE_PASSWORD as string;
const SQLITE_DIALECT = process.env.SQLITE_DIALECT;
const SQLITE_DEV_STORAGE = process.env.SQLITE_DEV_STORAGE as string;
const SQLITE_TEST_STORAGE = process.env.SQLITE_TEST_STORAGE as string;
const SQLITE_LOGGING: boolean = process.env.SQLITE_LOGGING === 'true';
const SQLITE_DEV_ENV = process.env.SQLITE_DEV_ENV as string;
const SQLITE_TEST_ENV = process.env.SQLITE_TEST_ENV as string;
// const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';

// assert( PORT, 'PORT is required' );
// assert( HOST, 'HOST is required' );

const config = {
	NODE_ENV: NODE_ENV,
	port: PORT,
	// host: HOST,
	// url: HOST_URL,
	// cookiePwd: COOKIE_ENCRYPT_PWD,
	// sql: {
	// 	server: SQL_SERVER,
	// 	database: SQL_DATABASE,
	// 	user: SQL_USER,
	// 	password: SQL_PASSWORD,
	// 	options: {
	// 		encrypt: sqlEncrypt,
	// 		enableArithAbort: true
	// 	}
	// },
	sqlite: {
		database: SQLITE_DATABASE,
		username: SQLITE_USERNAME,
		password: SQLITE_PASSWORD,
		dialect: SQLITE_DIALECT,
		dev_storage: SQLITE_DEV_STORAGE,
		test_storage: SQLITE_TEST_STORAGE,
		logging: SQLITE_LOGGING,
		dev_env: SQLITE_DEV_ENV,
		test_env: SQLITE_TEST_ENV
		// ,
		// options: {
		// 	encrypt: sqlEncrypt,
		// 	enableArithAbort: true
		// }
	}
	// okta: {
		// url: OKTA_ORG_URL,
		// clientId: OKTA_CLIENT_ID,
		// clientSecret: OKTA_CLIENT_SECRET
	// }
};

export default config;