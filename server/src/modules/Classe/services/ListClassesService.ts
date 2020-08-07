import { inject, injectable } from 'tsyringe';

import Class from '@modules/Classe/infra/typeorm/entities/Class';

import IClassRepository from '@modules/Classe/repositories/ClassRepository';
import IListClassesDTO from '@modules/Classe/dtos/ListClassesDTO';

import AppError from '@shared/errors/AppError';

@injectable()
class ListClassesService {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) { }

  public async execute({
    week_day,
    time,
    subject,
  }: IListClassesDTO): Promise<Class[]> {
    const classes = await this.classRepository.list({
      week_day,
      subject,
      time,
    });

    if (!classes) {
      throw new AppError(
        'Não foram encontradas aulas para os respectivos filtros!',
      );
    }

    return classes;
  }
}

export default ListClassesService;
