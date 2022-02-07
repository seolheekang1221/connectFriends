const { Router } = require('express');
const controller = require('../controllers/CityController');
const router = Router();

router.get('/friends', controller.getAllFriends);
router.get('/friends/:id', controller.getFriendById);
router.delete('friends/:id', controller.deleteFriend);

module.exports = router;
