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

export const getRecommendedPhones = async(phoneId: string) => {
  try {
    const phones = await Phone.findAll({
      order: [['name', 'ASC']],
    });

    
    const id = phones.findIndex((phone) => phone.id === phoneId);

    if (id === -1) {
      return 404;
    }

    let relatedProducts = phones.slice(id - 8, id);

    if (!relatedProducts.length) {
      relatedProducts = [...phones.slice(id - 8), ...phones.slice(0, id)];
    }

    return { phones: relatedProducts };
  } catch {
    return 500;
  }
};