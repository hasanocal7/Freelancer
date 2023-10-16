// MODULES
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');

const db = require('./models');
const pageRouter = require('./routes/pageRoute');
const freelancerRouter = require('./routes/freelancerRoute');

// WEB APPLICATION
const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// MIDDLEWARES
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// ROUTES
app.use('/', pageRouter);
app.use('/freelancers', freelancerRouter);

// SERVER UP
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Connected Port: ${PORT}`);
    });
 });

