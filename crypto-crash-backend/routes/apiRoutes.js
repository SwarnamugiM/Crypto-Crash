const express = require('express');
const router = express.Router();
const { placeBet } = require('../controllers/gameController');

router.post('/bet', placeBet);
// Add /cashout, /balance, etc later

module.exports = router;
