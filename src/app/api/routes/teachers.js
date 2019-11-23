const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teachers');

router.get('/', teacherController.getAll);
router.post('/', teacherController.create);
router.get('/:teacherId', teacherController.getById);
router.put('/:teacherId', teacherController.updateById);
router.delete('/:teacherId', teacherController.deleteById);

module.exports = router;