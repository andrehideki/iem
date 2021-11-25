import { Model, DataTypes } from 'sequelize';

class EntryMapper extends Model {

  static init(connection) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      value: { 
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      date: { 
        type: DataTypes.DATE,
        allowNull: false
      },
      account: { 
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize: connection,
      modelName: 'entry'
    });
  }
}

module.exports = EntryMapper;