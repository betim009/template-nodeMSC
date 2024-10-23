const express = require('express');
const { getAll } = require('../controllers/template');

const router = express.Router();

router.get('/', getAll);
// router.post('/',);
// router.post('/login',);
// router.put('/:id',);
// router.delete('/:id',);

module.exports = router;