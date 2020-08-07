import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getConnection } from 'typeorm';

import CreateClassService from '@modules/Classe/services/CreateClassService';
import ListClassService from '@modules/Classe/services/ListClassesService';
import CreateScheduleService from '@modules/Classe/services/CreateScheduleService';
import CreateUserService from '@modules/User/services/CreateUserService';

import AppError from '@shared/errors/AppError';
import convertHoutToMinutes from '@shared/utils/convertHourToMinutes';

interface ISchedule {
  week_day: number;
  from: string;
  to: string;
}

class ClassController {
  public async create(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const { name, avatar, bio, cost, subject, whatsapp, schedule } = req.body;

    const data = {
      name,
      avatar,
      bio,
      cost,
      subject,
      whatsapp,
      schedule,
    };
    // console.log(data);

    const createClassService = container.resolve(CreateClassService);
    const createScheduleService = container.resolve(CreateScheduleService);
    const createUserService = container.resolve(CreateUserService);

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const user = await createUserService.execute({
        name,
        avatar,
        bio,
        whatsapp,
      });

      const classy = await createClassService.execute({
        user_id: user.id,
        cost,
        subject,
      });

      const scheduleArray = schedule as ISchedule[];

      scheduleArray.map(async ({ week_day, from, to }) => {
        await createScheduleService.execute({
          class_id: classy.id,
          week_day,
          from: convertHoutToMinutes(from),
          to: convertHoutToMinutes(to),
        });
      });

      return res.json({ user, classy, scheduleArray });
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    throw new AppError('Algo deu errado, tente novamente!');
  }

  public async index(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const filters = req.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    const listClassService = container.resolve(ListClassService);

    if (!week_day || !subject || !time) {
      throw new AppError('Nenhum filtro foi aplicado, tente novamente!');
    }

    const timeInMinutes = convertHoutToMinutes(time as string);

    const classes = await listClassService.execute({
      week_day: parseInt(week_day, 10),
      time: timeInMinutes,
      subject,
    });

    return res.json(classes);
  }
}

export default ClassController;
