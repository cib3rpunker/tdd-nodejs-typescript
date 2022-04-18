import app from './app';
import sequelize from './config/database';
const PORT = process.env.PORT || 3000;

sequelize.sync();
console.log('NODE_ENV: ', process.env.NODE_ENV);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
