
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('freedb_myOctalogic', 'freedb_octalogic-user', '5z5mRyU2&%A%ZdF', {
  host: 'sql.freedb.tech',
  dialect: 'mysql',
  port: 3306, // ensure port is a number, not a string
  logging: false,
  dialectOptions: {
    connectTimeout: 10000, // Timeout for establishing a connection
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error; // Rethrow error to let Vercel handle it
  }
};

export { sequelize, connectDB };
