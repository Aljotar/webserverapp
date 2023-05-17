const { Router } = require('express');
const { saveForm } = require('../controllers/form-controller');

const router = Router();

router.post('/', saveForm);


module.exports = router;