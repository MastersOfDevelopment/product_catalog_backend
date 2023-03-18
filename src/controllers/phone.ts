import { Request, Response } from 'express';
import * as phoneService from '../services/phone';

export const getAll = async(req: Request, res: Response) => {
  const phones = await phoneService.getAll();

  res.send(phones);
};
