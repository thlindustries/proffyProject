import Connection from '@modules/User/infra/typeorm/entities/Connections';
// import ICreateConnectionDTO from '@modules/User/dtos/CreateConnectionDTO';

export default interface ConnectionRepository {
  create(user_id: string): Promise<Connection>;
  list(): Promise<Connection[]>;
}
