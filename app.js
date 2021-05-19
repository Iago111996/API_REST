import express from 'express';
import HomeRouter from './src/routes/homeRouter';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.App.use(express.urlencoded({ extended: true }));
    this.App.use(express.json());
  }

  routes() {

  }
}

export default new App().app;
