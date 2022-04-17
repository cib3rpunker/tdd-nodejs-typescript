import express, { Application } from 'express';
// import router from './routes';
import UserRouter from './user/UserRouter';

const app: Application = express();

app.use(express.json());
// app.use('/', router);
app.use(/* '/', */ UserRouter);




export default app;
