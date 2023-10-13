// MODULES
const express = require('express');
const ejs = require('ejs');
const cors = require('cors')

const db = require('./models');
const pageRouter = require('./routes/pageRoute');

// WEB APPLICATION
const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs')


// MIDDLEWARES
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/', pageRouter);

// SERVER UP
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
    console.log('Connection has been successfully.');
    app.listen(PORT, () => {
        console.log(`Server is Connected Port: ${PORT}`);
    });
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

