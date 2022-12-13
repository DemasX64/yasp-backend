const Router = require('express');

const router = Router();
const screenshotController = require('../controllers/screenshotController');

router.post('/add', screenshotController.add);

module.exports = router;