import app from './app';
import config from './config';
import sequelize from './config/database';

sequelize.sync();
console.log('index.ts 🚀 NODE_ENV:', config.NODE_ENV);

app.listen(PORT, () => {
  console.log('Server is running on port:', config.port);
});
