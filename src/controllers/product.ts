import { Request, Response } from 'express';
import * as productService from '../services/product';

export const getAll = async (req: Request, res: Response) => {
  const phones = await productService.getAll();

  res.send(phones);
}
