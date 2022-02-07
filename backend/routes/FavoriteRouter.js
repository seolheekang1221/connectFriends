const { Router } = require('express');
const controller = require('../controllers/FavoriteController');
const router = Router();

router.get('/', controller.getAllFavorite);
router.get('/:id', controller.getFavoriteById);

module.exports = router;
