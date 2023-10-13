const express = require('express');
const ejs = require('ejs');

const pageRouter = require('./routes/pageRoute');

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.json());

app.use('/', pageRouter);

app.listen(3000, () => {
    console.log('Bağlantı Başarılı!!');
});

