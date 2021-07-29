/**
 * 
 * Rutas de Eventos / events
 * host + /api/events
 *  
 * */ 

 const {Router} = require('express');
 const router = Router();
 const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
 const { validateJWT } = require('../middlewares/validate-jwt');
 const { check } = require('express-validator');
 const { paramsValidator } = require('../middlewares/params-validator');
const { isDate } = require('../helpers/isDate');


router.use(validateJWT);

router.get('/',getEvents);

router.post(
    '/',
    [
        check('title', 'El titulo no es valido').not().isEmpty(),
        check('start', 'Fecha de inicio no es valida').custom(isDate),
        check('end', 'Fecha de finalizacion no es valida').custom(isDate),
        paramsValidator
    ],
    createEvent);

router.put(
    '/:id',
    [
        check('title', 'El titulo no es valido').not().isEmpty(),
        check('start', 'Fecha de inicio no es valida').custom(isDate),
        check('end', 'Fecha de finalizacion no es valida').custom(isDate),
        paramsValidator
    ],
    updateEvent);

router.delete('/:id',deleteEvent);
 
 module.exports = router;