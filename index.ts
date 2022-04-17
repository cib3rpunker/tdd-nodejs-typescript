import app from './src/app';
import sequelize from './src/config/database';
const PORT = process.env.PORT || 3000;

sequelize.sync();

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
