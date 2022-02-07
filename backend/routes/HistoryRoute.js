const { Router } = require('express');
const controller = require('../controllers/HistoryController');
const router = Router();

router.get('/', controller.getAllHistory);

module.exports = router;
