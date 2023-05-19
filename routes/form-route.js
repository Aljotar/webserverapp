const { Router } = require('express');
const { saveForm } = require('../controllers/form-controller');
const { check } = require('express-validator');

const router = Router();

router.post('/',[
    check('dni', 'El name es obligatorio')
        .exists()
        .not()
        .isEmpty(),
    check('grupo', 'El lastName es obligatorio')
        .exists()
        .not()
        .isEmpty(),
    check('orden','El lastName es obligatorio')
        .exists()
        .not()
        .isEmpty()
] ,saveForm);


module.exports = router;