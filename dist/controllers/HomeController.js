"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);//eslint-disable-line

class HomeController {
  async index(req, res) {
    //const novoAluno = await Aluno.create(req.body);
    res.json('Index');
  }
}

exports. default = new HomeController(); //utilizo o new para exportar instanciado
