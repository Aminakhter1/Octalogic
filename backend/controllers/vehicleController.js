
import Vehicle from "../models/Vehicle.js";
import { Op } from "sequelize";

// Get distinct vehicle types
// Get distinct vehicle types based on wheels
export const getVehicleTypes = async (req, res) => {
  try {
    const { wheels } = req.query;

    // Validate wheels parameter
    if (!wheels) {
      return res.status(400).json({ message: "Missing wheels parameter" });
    }

    const vehicleTypes = await Vehicle.findAll({
      attributes: ["type"],
      where: { wheels: parseInt(wheels) },  // Convert to integer
      group: ["type"], 
    });

    if (vehicleTypes.length === 0) {
      return res.status(404).json({ message: "No vehicle types found" });
    }

    res.json(vehicleTypes);
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Error fetching vehicle types" });
  }
};


// Get vehicles of a specific type
export const getVehiclesByType = async (req, res) => {
  try {
    const { type } = req.params;
    const vehicles = await Vehicle.findAll({ where: { type } });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicles" });
  }
};
