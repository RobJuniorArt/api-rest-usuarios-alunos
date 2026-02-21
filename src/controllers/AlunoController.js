import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  //INDEX
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename']
      }
    });
    res.json(alunos);
  }

  //STORE
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map(err => err.message),
      });
    };
  };

  //SHOW
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id not found'],
        });
      };
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename']
        }
      });
      if (!aluno) {
        return res.status(401).json({
          errors: ['Student not found'],
        });
      };
      return res.json(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: e.error.map(err => err.messages),
      });
    };
  };

  //DELETE
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id not Found'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(401).json({
          errors: ['Student not found'],
        });
      };
      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    };
  };

  //UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id not found'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(401).json({
          errors: ['Student not found'],
        });
      };
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    };
  };

}

export default new AlunoController(); //utilizo o new para exportar instanciado
