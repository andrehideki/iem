import { Sequelize } from 'sequelize';
import config from './config';
import EntryMapper from './mapper/EntryMapper';

const connection = new Sequelize(config);
EntryMapper.init(connection);

export default connection;