import { Repository, getRepository } from 'typeorm';

import IClassRepository from '@modules/Classe/repositories/ClassRepository';
import ICreateClassDTO from '@modules/Classe/dtos/CreateClassDTO';
import IListClassesDTO from '@modules/Classe/dtos/ListClassesDTO';

import Class from '@modules/Classe/infra/typeorm/entities/Class';
import Schedule from '@modules/Classe/infra/typeorm/entities/Schedule';
import User from '@modules/User/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

class ClassRepository implements IClassRepository {
  private ormRepo: Repository<Class>;

  constructor() {
    this.ormRepo = getRepository(Class);
  }

  public async create({
    user_id,
    subject,
    cost,
  }: ICreateClassDTO): Promise<Class> {
    const classy = this.ormRepo.create({
      user_id,
      subject,
      cost,
    });

    await this.ormRepo.save(classy);

    return classy;
  }

  public async findSubjectByUserId(
    user_id: string,
    subject: string,
  ): Promise<Class | undefined> {
    const classy = this.ormRepo.findOne({
      where: {
        user_id,
        subject,
      },
    });

    return classy;
  }

  public async list({
    subject,
    time,
    week_day,
  }: IListClassesDTO): Promise<Class[]> {
    const classes = await getRepository(Class)
      .createQueryBuilder('classes')
      .innerJoin(Schedule, 's', 's."class_id" = classes.id')
      .where('classes.subject = :subject', { subject })
      .andWhere('s."week_day" = :week_day', { week_day })
      .andWhere('s."from" <= :timeInMinutes', { timeInMinutes: time })
      .andWhere('s."to" > :timeInMinutes', { timeInMinutes: time })
      .getMany();

    if (classes.length < 1) {
      throw new AppError(
        'Alguma coisa deu errado, verifique o horário do agendamento está correto',
      );
    }

    const userIdOwnerOfClasses = classes[0].user_id;

    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.id = :userIdOwnerOfClasses', { userIdOwnerOfClasses })
      .getOne();

    return { classes, user };
  }
}

export default ClassRepository;
