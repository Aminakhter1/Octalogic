import { sequelize } from "../config/database.js";
import Vehicle from "../models/Vehicle.js";
import Booking from "../models/Booking.js";

const setupDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // WARNING: Deletes existing tables!
    console.log("Database & tables created!");
    process.exit();
  } catch (error) {
    console.error("Error setting up the database:", error);
    process.exit(1);
  }
};

setupDatabase();
