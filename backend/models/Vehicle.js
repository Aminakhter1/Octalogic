
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Vehicle = sequelize.define('Vehicle', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  wheels: { type: DataTypes.INTEGER, allowNull: false },
});

export default Vehicle;
