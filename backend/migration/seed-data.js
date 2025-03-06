import { sequelize } from "../config/database.js";
import Vehicle from "../models/Vehicle.js";

const seedDatabase = async () => {
  try {
    await sequelize.sync(); // Ensure tables exist
    const vehicles = [
        { name: "Swift", type: "Hatchback", wheels: 4 },
        { name: "Creta", type: "SUV", wheels: 4 },
        { name: "Honda City", type: "Sedan", wheels: 4 },
        { name: "Harley Davidson", type: "Cruiser", wheels: 2 },
        { name: "Yamaha R1", type: "Sports", wheels: 2 },
        { name: "Tesla Model S", type: "Electric Sedan", wheels: 4 },
        { name: "Jeep Wrangler", type: "Off-Road SUV", wheels: 4 },
        { name: "Ducati Panigale V4", type: "Superbike", wheels: 2 },
        { name: "Royal Enfield Classic 350", type: "Cruiser", wheels: 2 },
        { name: "Kawasaki Ninja 650", type: "Sport Tourer", wheels: 2 }
      ];
      

    await Vehicle.bulkCreate(vehicles);
    console.log("Seed data inserted!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedDatabase();
