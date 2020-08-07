import { Repository, getRepository, getConnection } from 'typeorm';

import IScheduleRepository from '@modules/Classe/repositories/ScheduleRepository';
import ICreateSheduleDTO from '@modules/Classe/dtos/CreateScheduleDTO';

import Schedule from '@modules/Classe/infra/typeorm/entities/Schedule';

class ScheduleRepository implements IScheduleRepository {
  private ormRepo: Repository<Schedule>;

  constructor() {
    this.ormRepo = getRepository(Schedule);
  }

  public async create({
    class_id,
    week_day,
    from,
    to,
  }: ICreateSheduleDTO): Promise<Schedule> {
    const schedule = this.ormRepo.create({
      class_id,
      week_day,
      from,
      to,
    });

    await this.ormRepo.save(schedule);

    return schedule;
  }

  public async findAll(): Promise<Schedule[]> {
    const schedules = await this.ormRepo.find();

    return schedules;
  }

  public async findByClassId(class_id: string): Promise<Schedule[]> {
    const schedules = await this.ormRepo.find({
      where: {
        class_id,
      },
    });

    const test = await getRepository(Schedule)
      .createQueryBuilder('class_schedules')
      .where('class_schedules.class_id = :id', { id: class_id });

    console.log(test);

    return schedules;
  }
}

export default ScheduleRepository;
