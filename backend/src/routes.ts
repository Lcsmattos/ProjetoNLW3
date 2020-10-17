import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesControlle from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControlle.index);
routes.get('/orphanages/:id', OrphanagesControlle.show);
routes.post('/orphanages', upload.array('images'),OrphanagesControlle.create);

export default routes;