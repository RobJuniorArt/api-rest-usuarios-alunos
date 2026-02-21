import { Router } from 'express';
import loginIsRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginIsRequired, fotoController.store);

export default router;
