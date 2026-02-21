import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginIsRequired from '../middlewares/loginRequired';
const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginIsRequired, alunoController.store);
router.put('/:id', loginIsRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginIsRequired, alunoController.delete);

export default router;
