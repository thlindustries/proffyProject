import { Repository, getRepository } from 'typeorm';

import IConnectionRepository from '@modules/User/repositories/ConnectionRepository';
import Connection from '@modules/User/infra/typeorm/entities/Connections';

class ConnectionRepository implements IConnectionRepository {
  private ormRepo: Repository<Connection>;

  constructor() {
    this.ormRepo = getRepository(Connection);
  }

  public async create(user_id: string): Promise<Connection> {
    const connection = this.ormRepo.create({ user_id });

    await this.ormRepo.save(connection);

    return connection;
  }

  public async list(): Promise<Connection[]> {
    const connections = await this.ormRepo.find();

    return connections;
  }
}

export default ConnectionRepository;
