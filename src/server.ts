import express from 'express';
import { productsRouter } from './routes/product';
import cors from 'cors';
import { initDB } from './utils/initDB';

const app = express();

initDB();

app.use(cors());

app.use('/products', express.json(), productsRouter);

app.listen(5000);
