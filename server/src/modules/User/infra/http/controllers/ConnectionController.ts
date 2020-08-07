import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateConnectionService from '@modules/User/services/CreateConnectionService';
import ListConnectionsService from '@modules/User/services/ListConnectionsService';

import AppError from '@shared/errors/AppError';

class ConnectionController {
  public async create(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const { user_id } = req.body;

    const createConnectionService = container.resolve(CreateConnectionService);

    const connection = await createConnectionService.execute(user_id);

    return res.json(connection);
  }

  public async index(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const listConnectionsService = container.resolve(ListConnectionsService);

    const connections = await listConnectionsService.execute();

    if (!connections) {
      throw new AppError(
        'Oops, parece que ainda não existem conexões ou aconteceu algum bug, tente novamente!',
      );
    }

    return res.json(connections);
  }
}

export default ConnectionController;
