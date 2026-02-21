import { Router } from 'express';
import userController from '../controllers/UserController';
import loginIsRequiredJs from '../middlewares/loginRequired';
const router = new Router();

//não deveria existir
//router.get('/', loginIsRequiredJs, userController.index); //lista usuários
//router.get('/', userController.show); //lista usuário

router.post('/', loginIsRequiredJs, userController.store);
router.put('/', loginIsRequiredJs, userController.update); //a menos que o usuário seja um administrador ele n pode mudar ids
router.delete('/', loginIsRequiredJs, userController.delete);

export default router;
