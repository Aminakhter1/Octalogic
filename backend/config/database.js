
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('freedb_myOctalogic', 'freedb_octalogic-user', '5z5mRyU2&%A%ZdF', {
  host: 'sql.freedb.tech',
  dialect: 'mysql',
   // Change to 'postgres' if using PostgreSQL
   port:"3306",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

export { sequelize, connectDB };
