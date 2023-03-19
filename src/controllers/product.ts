import { Request, Response } from 'express';
import * as productService from '../services/product';

export const getAll = async(req: Request, res: Response) => {
  const { page, perPage, sort } = req.query;
  let currentPage = Number(page);
  let phonesOnPage = Number(perPage);
  const sortBy = String(sort) || 'year';

  if (!currentPage) {
    currentPage = 1;
  }

  if (!phonesOnPage) {
    phonesOnPage = 16;
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
