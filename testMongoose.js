const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var Guitar = require('./models/guitar.js').Guitar;

var guitar = new Guitar({
    title: "B.C. Rich Stealth",
    nick: "bc-rich-stealth"
});

guitar.save()
    .then(() => {
        console.log('Гитара сохранена!');
        mongoose.disconnect();
    })
    .catch(err => console.error(err));