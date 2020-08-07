import { Repository, getRepository } from 'typeorm';

import IUserRepository from '@modules/User/repositories/UserRepository';
import ICreateUserDTO from '@modules/User/dtos/CreateUserDTO';
import User from '@modules/User/infra/typeorm/entities/User';

class UserRepository implements IUserRepository {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepo.create(data);

    await this.ormRepo.save(user);

    return user;
  }

  public async findByWhatsapp(whatsapp: string): Promise<User | undefined> {
    const user = this.ormRepo.findOne({
      where: {
        whatsapp,
      },
    });

    return user;
  }
}

export default UserRepository;
