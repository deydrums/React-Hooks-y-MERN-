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

router.use(validateJWT);

router.get('/',getEvents);
router.post('/',createEvent);
router.put('/:id',updateEvent);
router.delete('/:id',deleteEvent);
 
 module.exports = router;