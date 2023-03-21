import { Product } from '../models/Product';


export const getPage = async(page: number, perPage: number, sortBy: string) => {
  const offset = (page - 1) * perPage;

  let sortField = 'year';
  let sortOrder = 'DESC';

  if (sortBy === 'title') {
    sortField = 'name';
    sortOrder = 'ASC';
  }

  if (sortBy === 'price') {
    sortField = 'price';
    sortOrder = 'ASC';
  }

  try {
    const phones = await Product.findAll({
      order: [[sortField, sortOrder]],
      offset,
      limit: perPage,
    });

    const total = await Product.count();

    return {
      phones,
      total,
      page,
      perPage,
    };
  } catch {
    return 500;
  }
};
