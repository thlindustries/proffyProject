import Class from '@modules/Classe/infra/typeorm/entities/Class';
import ICreateClassDTO from '@modules/Classe/dtos/CreateClassDTO';
import IListClassesDTO from '@modules/Classe/dtos/ListClassesDTO';

export default interface ClassRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findSubjectByUserId(
    user_id: string,
    subject: string,
  ): Promise<Class | undefined>;
  list(data: IListClassesDTO): Promise<Class[]>;
}
