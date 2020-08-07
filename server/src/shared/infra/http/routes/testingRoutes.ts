import { Router, Request, Response } from 'express';

const testingRoute = Router();

testingRoute.get('/', (req: Request, res: Response) =>
  res.json({ ola: 'mundo' }),
);

testingRoute.post('/user', (req: Request, res: Response) => {
  const user = req.body;

  return res.json(user);
});

export default testingRoute;
