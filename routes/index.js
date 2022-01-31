var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
router.get('/courses', courseController.viewAll);