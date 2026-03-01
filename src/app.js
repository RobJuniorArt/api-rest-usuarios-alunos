import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();
import "./database";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/TokenRoutes";
import alunoRoutes from "./routes/AlunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

const whitelist = [process.env.APP_URL, "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Acesso bloqueado pelo CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true })); //Permite que sua API receba dados de formulários complexos (comuns em sistemas web tradicionais).
    this.app.use(express.json()); //A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images")),
    ); //A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

//exportando o app ja instanciado(express)
export default new App().app;
