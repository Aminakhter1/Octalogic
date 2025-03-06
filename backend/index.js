
import express from 'express';
import cors from 'cors';
import { sequelize, connectDB } from './config/database.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/bookings', bookingRoutes);

// Start the server
const PORT = 5000;
const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync(); // Auto-creates tables
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
