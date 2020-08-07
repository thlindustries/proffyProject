import User from '@modules/User/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/User/dtos/CreateUserDTO';

export default interface UserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByWhatsapp(whatsapp: string): Promise<User | undefined>;
}
