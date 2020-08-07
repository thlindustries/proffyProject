import { inject, injectable } from 'tsyringe';

import Class from '@modules/Classe/infra/typeorm/entities/Class';

import IClassRepository from '@modules/Classe/repositories/ClassRepository';
import ICreateClassDTO from '@modules/Classe/dtos/CreateClassDTO';

import AppError from '@shared/errors/AppError';

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) { }

  public async execute({
    user_id,
    subject,
    cost,
  }: ICreateClassDTO): Promise<Class> {
    const userAlreadyGiveThisClass = await this.classRepository.findSubjectByUserId(
      user_id,
      subject,
    );

    if (userAlreadyGiveThisClass) {
      throw new AppError(
        'Este usuário já esta cadastrado para dar aulas dessa matéria!',
      );
    }

    const classy = await this.classRepository.create({
      user_id,
      subject,
      cost,
    });

    return classy;
  }
}

export default CreateClassService;
