import { Product } from '../models__/Product';

export const getAll = async() => {
  return await Product.findAll();
};
