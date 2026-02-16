import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); //Permite que sua API receba dados de formulários complexos (comuns em sistemas web tradicionais).
    this.app.use(express.json());//A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
  }

}

//exportando o app ja instanciado(express)
export default new App().app;
