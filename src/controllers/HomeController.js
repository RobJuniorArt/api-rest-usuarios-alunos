import Aluno from '../models/Aluno';//eslint-disable-line

class HomeController {
  async index(req, res) {
    //const novoAluno = await Aluno.create(req.body);
    res.json('Index');
  }
}

export default new HomeController(); //utilizo o new para exportar instanciado
