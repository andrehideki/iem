import { Sequelize } from "sequelize";

class DatabaseClient {
  
  static sequelize = null;

  static connect() {
    try {
      if (!DatabaseClient.sequelize) DatabaseClient.sequelize = new Sequelize('postgres://postgres:root@localhost:5432/iem', {
        logging: false
      });
      return DatabaseClient.sequelize;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default DatabaseClient;