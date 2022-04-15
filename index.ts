export {};

const app = require('./src/app');
// import app from './src/app';

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
