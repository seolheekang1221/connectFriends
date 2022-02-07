const { Router } = require('express');
const controller = require('../controllers/UserController');
const router = Router();

router.get('/:id', controller.getUser);
router.post('/createUser', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
