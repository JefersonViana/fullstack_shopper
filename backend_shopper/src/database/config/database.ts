import 'dotenv/config';
import { Options, Sequelize } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'password',
  database: 'Shopper',
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

const sequelize = new Sequelize(config);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });

export = config;