var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies')
/* GET users listing. */

router.get('/new', moviesCtrl.new)

router.get('/:id', moviesCtrl.show)

router.get('/', moviesCtrl.index)

router.post('/', moviesCtrl.create)


module.exports = router;
