const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students');

router.get('/', studentController.getAll);
router.post('/', studentController.create);
router.get('/:studentId', studentController.getById);
router.put('/:studentId', studentController.updateById);
router.delete('/:studentId', studentController.deleteById);

module.exports = router;