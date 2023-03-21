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

export const getNewProducts = async() => {
  try {
    const products = await Product.findAll({
      order: [['year', 'DESC']],
      offset: 1,
      limit: 12,
    });

    return { products };
  } catch {
    return 500;
  }
};

export const getProductsWithDiscount = async() => {
  try {
    const products = await Product.findAll();

    products.sort(
      (product1, product2) =>
        (product2.fullPrice
        - product2.price)
        - (product1.fullPrice - product1.price),
    );

    return { products: products.slice(0, 12) };
  } catch {
    return 500;
  }
};
