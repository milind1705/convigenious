const router = require('express').Router();
const question = require('../controller/questions.controller');

router.post('/', question.create);
router.get('/', question.getAll);
router.get('/:id', question.getOne);
router.delete('/:id', question.delete)
router.put('/:id', question.update)

module.exports = router;