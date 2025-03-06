
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('freedb_myOctalogic', 'freedb_octalogic-user', '5z5mRyU2&%A%ZdF', {
  host: 'sql.freedb.tech',
  dialect: 'mysql2',
  port: 3306, // Ensure port is a number, not a string
  logging: false,
  dialectOptions: {
    connectTimeout: 10000, // Timeout for establishing a connection
  },
  pool: {
    max: 5,          // Maximum number of connections in the pool
    min: 0,          // Minimum number of connections in the pool
    acquire: 30000,  // Maximum time, in milliseconds, that pool will try to get a connection before throwing an error
    idle: 10000      // Maximum time, in milliseconds, that a connection can be idle before being released
  }
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
