import 'dotenv/config';
import config from '../config/database';
import { Sequelize } from 'sequelize';
export default new Sequelize(config);