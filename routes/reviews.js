const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created reviews controller 
var reviewsCtrl = require('../controllers/reviews')

// You Do - Define the Route below
router.post('/movies/:id/reviews', reviewsCtrl.create)

module.exports = router;
