import multer from "multer"; //importaçao de modulo tem que vir acima, modulos locais abaixo
import multerConfig from "../config/multerConfig";
import Foto from "../models/Foto";

import Aluno from "../models/Aluno"; //eslint-disable-line

const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const foto = await Foto.findByPk(id);

      if (!foto) {
        return res.status(404).json({ errors: ["Foto não encontrada."] });
      }

      await foto.destroy();
      return res.json({ deletado: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: ["Erro ao deletar foto"] });
    }
  }
}

export default new FotoController(); //utilizo o new para exportar instanciado
