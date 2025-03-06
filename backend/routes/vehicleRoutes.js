
import express from "express";
import { getVehicleTypes, getVehiclesByType } from "../controllers/vehicleController.js";

const router = express.Router();

router.get("/types", getVehicleTypes);
router.get("/:type", getVehiclesByType);

export default router;
