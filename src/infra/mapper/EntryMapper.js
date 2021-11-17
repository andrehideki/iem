import { DataTypes } from "sequelize";
import DatabaseClient from "../database/DatabaseClient";

const database = DatabaseClient.connect();

const EntryMapper = database.define('entry', {
  
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 

  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },

  value: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

export default EntryMapper;