import { inject, injectable } from 'tsyringe';

import Connection from '@modules/User/infra/typeorm/entities/Connections';

import IConnectionRepository from '@modules/User/repositories/ConnectionRepository';

@injectable()
class CreateConnectionService {
  constructor(
    @inject('ConnectionRepository')
    private connectionRepostiory: IConnectionRepository,
  ) { }

  public async execute(user_id: string): Promise<Connection> {
    const connection = await this.connectionRepostiory.create(user_id);

    return connection;
  }
}

export default CreateConnectionService;
