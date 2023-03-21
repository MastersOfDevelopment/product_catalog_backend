import express from 'express';
import * as phoneController from '../controllers/phone';

export const phonesRouter = express.Router();

phonesRouter.get('/', phoneController.getAll);
phonesRouter.get('/:phoneId', phoneController.getPhoneDetails);

phonesRouter.get(
  '/:phoneId/recommended',
  phoneController.getRecommendedPhones,
);
