import { inject, injectable } from 'tsyringe';

import User from '@modules/User/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

import IUserRepository from '@modules/User/repositories/UserRepository';
import ICreateUserDTO from '@modules/User/dtos/CreateUserDTO';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) { }

  public async execute({
    name,
    avatar,
    bio,
    whatsapp,
  }: ICreateUserDTO): Promise<User> {
    const checkIfUserExists = await this.userRepository.findByWhatsapp(
      whatsapp,
    );

    if (checkIfUserExists) {
      throw new AppError(
        'Este whatsapp já está cadastrado, por favor altere as informações!',
      );
    }

    const user = await this.userRepository.create({
      name,
      avatar,
      bio,
      whatsapp,
    });

    return user;
  }
}

export default CreateUserService;
