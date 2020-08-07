import { inject, injectable } from 'tsyringe';

import Connection from '@modules/User/infra/typeorm/entities/Connections';

// import AppError from '@shared/errors/AppError';

import IConnectionRepository from '@modules/User/repositories/ConnectionRepository';

@injectable()
class ListConnectionsService {
  constructor(
    @inject('ConnectionRepository')
    private connectionRepostiory: IConnectionRepository,
  ) { }

  public async execute(): Promise<Connection[]> {
    const connections = await this.connectionRepostiory.list();

    return connections;
  }
}

export default ListConnectionsService;
