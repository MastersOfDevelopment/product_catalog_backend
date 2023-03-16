import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const initDB = () => {
  return new Sequelize(URL, {
    models: [Product],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
