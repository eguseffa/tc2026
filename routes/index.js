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
        desc: "B.C. Rich Stealth создана в 1983 году с участием гитариста Рика Дерринджера как эргономичный и агрессивный инструмент со сквозным грифом.Культовой модель стала благодаря лидеру группы Death Чаку Шульдинеру, сделавшему её главным инструментом своей карьеры и символом дэт-метала."
    });
});


router.get('/guitar_2', function(req, res, next) {
    res.render('guitar', {
        title: "Стратокастер",
        picture: "images/guitar_2.jpg",
        desc:"Fender Stratocaster создана Лео Фендером в 1954 году и стала самой узнаваемой электрогитарой в истории. Её эргономичная форма, встроенная система тремоло и яркое «стеклянное» звучание определили облики рока, блюза и современной музыки в руках Джими Хендрикса, Эрика Клэптона и многих других."
    });
});


router.get('/guitar_3', function(req, res, next) {
    res.render('guitar', {
        title: "Лес Пол",
        picture: "images/guitar_3.jpg",
        desc: "Gibson Les Paul создана в 1952 году совместно с гитаристом Лесом Полом. Её массивный корпус из красного дерева и хамбакеры сформировали фирменный мощный, «жирный» звук с долгим сустейном. Инструмент стал иконой хард-рока благодаря Джимми Пейджу, Слэшу и другим легендам."
    });
});

module.exports = router;
