import { Router } from 'express';

const router = new Router();

router.get('/', (res) => {
  res.send('olá mundo');
});
