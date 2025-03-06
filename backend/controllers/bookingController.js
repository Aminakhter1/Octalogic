
import Booking from "../models/Booking.js";
import Vehicle from "../models/Vehicle.js";
import { Op } from "sequelize";

export const createBooking = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  try {
    // Check if the vehicle is already booked for the requested dates
    const conflictingBooking = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          {
            startDate: { [Op.between]: [startDate, endDate] },
          },
          {
            endDate: { [Op.between]: [startDate, endDate] },
          },
        ],
      },
    });

    if (conflictingBooking) {
      return res.status(400).json({ message: "Vehicle is already booked for the selected dates" });
    }

    // Create the booking
    const booking = await Booking.create({ firstName, lastName, vehicleId, startDate, endDate });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error processing booking" });
  }
};
