"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
_dotenv2.default.config();
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _TokenRoutes = require('./routes/TokenRoutes'); var _TokenRoutes2 = _interopRequireDefault(_TokenRoutes);
var _AlunoRoutes = require('./routes/AlunoRoutes'); var _AlunoRoutes2 = _interopRequireDefault(_AlunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true })); //Permite que sua API receba dados de formulários complexos (comuns em sistemas web tradicionais).
    this.app.use(_express2.default.json());//A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));//A linha mais importante. Ela permite que sua API entenda dados enviados no formato JSON, que é o padrão de comunicação para aplicações modernas (como o React que você está estudando).
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _TokenRoutes2.default);
    this.app.use('/alunos/', _AlunoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }

}

//exportando o app ja instanciado(express)
exports. default = new App().app;
