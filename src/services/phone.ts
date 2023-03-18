import { Phone } from '../models/Phone';

export const getAll = async() => {
  return await Phone.findAll();
};
