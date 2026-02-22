import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();
import './database';
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/TokenRoutes';
import alunoRoutes from './routes/AlunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); //Permite que sua API receba dados de formulários complexos (comuns em sistemas web tradicionais).
    this.app.use(express.json());//A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));//A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }

}

//exportando o app ja instanciado(express)
export default new App().app;
