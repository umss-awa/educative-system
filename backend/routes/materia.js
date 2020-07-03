import routerx from 'express-promise-router'
import materiaController from '../controllers/MateriaController'

const router=routerx();

router.post('/add',materiaController.add);
router.get('/query',materiaController.query);
router.get('/list',materiaController.list);
router.put('/update',materiaController.update);
router.delete('/remove',materiaController.remove);
router.put('/activate',materiaController.activate);
router.put('/deactivate',materiaController.deactivate);

export default router;