import { Request, Response } from 'express';
import * as productService from '../services/product';

export const getAll = async(req: Request, res: Response) => {
  const { page, perPage, sort } = req.query;
  let currentPage = Number(page);
  const phonesOnPage = Number(perPage);
  const sortBy = String(sort) || 'year';

  if (!currentPage) {
    currentPage = 1;
  }

  if (!phonesOnPage) {

    try {
      const phones = await productService.getAll();

      res.send(phones);
    } catch (error) {
      console.error(`Error is ${error}`);
      res.sendStatus(400);
    }
  }

  const pageOfPhones = await productService.getPage(
    currentPage,
    phonesOnPage,
    sortBy,
  );

  if (typeof pageOfPhones === 'number') {
    res.sendStatus(pageOfPhones);

    return;
  }

  res.send(pageOfPhones);
};

export const getNewProducts = async(req: Request, res: Response) => {
  const products = await productService.getNewProducts();

  if (typeof products === 'number') {
    res.sendStatus(products);

    return;
  }

  res.send(products);
};

export const getProductsWithDiscount = async(req: Request, res: Response) => {
  const products = await productService.getProductsWithDiscount();

  if (typeof products === 'number') {
    res.sendStatus(products);

    return;
  }

  res.send(products);
};