import { container } from 'tsyringe';

import IClassRepository from '@modules/Classe/repositories/ClassRepository';
import ClassRepository from '@modules/Classe/infra/typeorm/repositories/ClassRepository';

import IUserRepository from '@modules/User/repositories/UserRepository';
import UserRepository from '@modules/User/infra/typeorm/repositories/UserRepository';

import IScheduleRepository from '@modules/Classe/repositories/ScheduleRepository';
import ScheduleRepository from '@modules/Classe/infra/typeorm/repositories/ScheduleRepository';

import IConnectionRepository from '@modules/User/repositories/ConnectionRepository';
import ConnectionRepository from '@modules/User/infra/typeorm/repositories/ConnectionRepository';

container.registerSingleton<IClassRepository>(
  'ClassRepository',
  ClassRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IScheduleRepository>(
  'ScheduleRepository',
  ScheduleRepository,
);

container.registerSingleton<IConnectionRepository>(
  'ConnectionRepository',
  ConnectionRepository,
);
