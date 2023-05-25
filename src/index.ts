import express, {NextFunction, Request, Response} from 'express';
import { FOO } from '@api/index';
import mikroConfig from './mikro-orm.config';
import { MikroORM, EntityManager } from '@mikro-orm/core';

const app = express();
const port = 9000;

const initOrm = async () => {
  const orm = await MikroORM.init(mikroConfig);
 return orm.em.fork(); // Use forked EntityManager per request
}

app.get('/', (req: Request, res: Response) => {
  initOrm().then((em: EntityManager) => {
    console.log('orm initialized');
  });
  /// #if process.env.NODE_ENV == 'production'
  /* Only this one will make it */
  res.send('hello world prod ' + FOO);
  /// #else
  res.send('hello world demo' + FOO);
  /// #endif
});

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
