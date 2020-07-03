import routerx from 'express-promise-router'
import materiaRouter from './materia'

const router=routerx();
router.use('/materia',materiaRouter);

export default router;