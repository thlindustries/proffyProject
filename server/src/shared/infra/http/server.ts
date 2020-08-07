import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import AppError from '@shared/errors/AppError';

import routes from './routes';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(routes);

app.use((erro: Error, req: Request, res: Response, _: NextFunction) => {
  if (erro instanceof AppError) {
    return res.status(erro.statusCode).json({
      status: 'error',
      mensagem: erro.mensagem,
    });
  }
  console.log(erro);

  return res.status(500).json({
    status: 'error',
    mensagem: 'Internal server error',
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
