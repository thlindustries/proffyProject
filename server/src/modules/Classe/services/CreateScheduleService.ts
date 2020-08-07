import { inject, injectable } from 'tsyringe';

import Schedule from '@modules/Classe/infra/typeorm/entities/Schedule';

import ICreateScheduleRepository from '@modules/Classe/repositories/ScheduleRepository';
import ICreateScheduleDTO from '@modules/Classe/dtos/CreateScheduleDTO';

@injectable()
class CreateScheduleService {
  constructor(
    @inject('ScheduleRepository')
    private scheduleRepository: ICreateScheduleRepository,
  ) { }

  public async execute({
    class_id,
    week_day,
    from,
    to,
  }: ICreateScheduleDTO): Promise<Schedule> {
    const schedule = await this.scheduleRepository.create({
      class_id,
      week_day,
      from,
      to,
    });

    return schedule;
  }
}

export default CreateScheduleService;
