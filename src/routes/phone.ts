import express from 'express';
import * as phoneController from '../controllers/phone';

export const phonesRouter = express.Router();

phonesRouter.get('/', phoneController.getAll);
