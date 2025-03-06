
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Vehicle from './Vehicle.js';

const Booking = sequelize.define('Booking', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  vehicleId: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: { model: Vehicle, key: 'id' }
  },
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE, allowNull: false },
});

// Define Relationship
Vehicle.hasMany(Booking, { foreignKey: 'vehicleId' });
Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId' });

export default Booking;
