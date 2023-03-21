import { Request, Response } from 'express';
import * as phoneService from '../services/phone';

export const getAll = async(req: Request, res: Response) => {
  const phones = await phoneService.getAll();

  res.send(phones);
};

export const getPhoneDetails = async(req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await phoneService.getOne(phoneId);

    if (!foundPhone) {
      res.sendStatus(404);

      return;
    }
    
    res.send(foundPhone);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getRecommendedPhones = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const phones = await phoneService.getRecommendedPhones(phoneId);

  if (typeof phones === 'number') {
    res.sendStatus(phones);

    return;
  }

  res.send(phones);
};
