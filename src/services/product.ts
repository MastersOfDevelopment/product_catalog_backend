import { Product } from './../models/Product';

export const getAll = async() => {
  return await Product.findAll();
}