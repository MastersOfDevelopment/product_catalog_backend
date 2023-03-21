import express from 'express';
import * as productController from '../controllers/product';

export const productsRouter = express.Router();

productsRouter.get('/', productController.getAll);
