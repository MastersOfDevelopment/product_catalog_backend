import { Phone } from '../models/Phone';

export const getAll = async() => {
  return await Phone.findAll();
};


export const getOne = async(phoneId: string) => {
  const phone = await Phone.findByPk(phoneId);

  if (!phone) {
    return phone;
  }
  
  const preparedPhone = {
    ...phone?.dataValues,
    description: JSON.parse(phone?.dataValues.description)
  };

  return preparedPhone;
};