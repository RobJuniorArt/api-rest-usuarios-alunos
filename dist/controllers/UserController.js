"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    };
  }

  //index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.json(null);
    };
  }

  //show
  async show(req, res) {
    try {
      const { id } = req.params;
      const users = await _User2.default.findByPk(id);
      const { nome, email } = users;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    };
  }

  //update
  async update(req, res) {
    try {
      const users = await _User2.default.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }
      const novosDados = await users.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    };
  }

  //delete
  async delete(req, res) {
    try {

      const users = await _User2.default.findByPk(req.userId);

      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }
      await users.destroy(req.body);
      return res.json({
        msg: ['Usuário deletado com sucesso.']
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    };
  }

}

exports. default = new UserController(); //utilizo o new para exportar instanciado
