import { DataTypes } from "sequelize";
import DatabaseClient from "../database/DatabaseClient";

const database = DatabaseClient.connect();

const AccountMapper = database.define('account', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true
  },

  balance: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
});

database.sync();

export default AccountMapper;