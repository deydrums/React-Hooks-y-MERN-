/**
 * 
 * Routas de Usuarios / Auth
 * host + /api/auth
 *  
 * */ 

const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { paramsValidator } = require('../middlewares/params-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
    '/new',
    [
        check('name', 'El nombre no es valido').not().isEmpty(),
        check('email', 'El email no es valido').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}), 
        paramsValidator
    ],
    createUser
    );

router.post(
    '/',
    [
        check('email', 'El email no es valido').isEmail(),
        check('password', 'El password debe de poseer minimo 6 caracteres').isLength({min: 6}),
        paramsValidator
    ],
     loginUser);

router.get('/renew', validateJWT, renewToken);

module.exports = router;