import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClassController from '@modules/Classe/infra/http/controllers/ClassController';

const classesRoutes = Router();

const classController = new ClassController();

classesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      avatar: Joi.string().required(),
      whatsapp: Joi.string().required(),
      bio: Joi.string().required(),
      subject: Joi.string().required(),
      cost: Joi.number().required(),
      schedule: Joi.array().required(),
    },
  }),
  classController.create,
);
classesRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      week_day: Joi.number().required(),
      subject: Joi.string().required(),
      time: Joi.string().required(),
    },
  }),
  classController.index,
);

export default classesRoutes;
