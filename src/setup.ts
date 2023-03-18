import { Phone } from './models/Phone';
import { Product } from './models/Product';
import { initDB } from './utils/initDB';

(async() => {
  initDB();

  try {
    await Phone.sync({ alter: true });
    await Product.sync({ alter: true });
  } catch (error: any) {
    throw new Error(error.message);
  }


  console.log('synced!');
})();
