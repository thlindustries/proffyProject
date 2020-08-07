import Schedule from '@modules/Classe/infra/typeorm/entities/Schedule';
import ICreateScheduleDTO from '@modules/Classe/dtos/CreateScheduleDTO';

export default interface ScheduleRepository {
  create(data: ICreateScheduleDTO): Promise<Schedule>;
  findAll(): Promise<Schedule[]>;
  findByClassId(class_id: string): Promise<Schedule[]>;
}
