import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Phone } from '../models/Phone';
import { Product } from '../models/Product';

dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_DRIVER } = process.env;
const URL = `${DB_DRIVER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

export const initDB = () => {
  return new Sequelize(URL, {
    models: [Product, Phone],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
