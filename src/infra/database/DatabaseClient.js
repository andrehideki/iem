import { Sequelize } from "sequelize";

class DatabaseClient {
  
  static sequelize = null;

  static connect() {
    try {
      if (!DatabaseClient.sequelize) DatabaseClient.sequelize = new Sequelize('postgres://postgres:root@localhost:5432/iem');
      return DatabaseClient.sequelize;
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

export default DatabaseClient;