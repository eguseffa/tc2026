var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница первой гитары*/
router.get('/guitar_1', function(req, res, next) {
    res.render('guitar', {
        title: "Стелс",
        picture: "images/guitar_1.jpg",
        desc: "'routes/index.js' первая гитара"
    });
});


router.get('/guitar_2', function(req, res, next) {
    res.render('guitar', {
        title: "Стратокастер",
        picture: "images/guitar_2.jpg",
        desc: "'routes/index.js' вторая гитара"
    });
});


router.get('/guitar_3', function(req, res, next) {
    res.render('guitar', {
        title: "Лес Пол",
        picture: "images/guitar_3.jpg",
        desc: "'routes/index.js' третья гитара"
    });
});

module.exports = router;
