import { Sequelize } from "sequelize";

export default class {
  
  async connect() {
    try {
      const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/iem');
      await sequelize.authenticate();
      sequelize.close();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}