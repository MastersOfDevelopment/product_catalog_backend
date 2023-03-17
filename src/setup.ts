import { Product } from './models/Product';
import { initDB } from './utils/initDB';

(async() => {
  initDB();

  await Product.sync({ alter: true });

  console.log('synced!');
})();
