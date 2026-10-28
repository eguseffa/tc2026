var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница первой гитары*/
router.get('/guitar_1', function(req, res, next) {
    res.send("<h1>First guitar</h1>")
});

router.get('/guitar_2', function(req, res, next) {
    res.send("<h1>Second guitar</h1>")
});

router.get('/guitar_3', function(req, res, next) {
    res.send("<h1>Third guitar</h1>")
});

module.exports = router;
