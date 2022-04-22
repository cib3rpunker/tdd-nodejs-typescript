import express, { Application } from 'express';
// import router from './routes';
import UserRouter from './user/UserRouter';

const app: Application = express();

app.use(express.json());
// app.use('/', router);
app.use('/', UserRouter);

console.log('app.ts 🥖 NODE_ENV:', process.env.NODE_ENV);

export default app;
