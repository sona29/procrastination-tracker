const express = require('express');
const expresshandlebars = require('express')
const helpers = require('./utils/helpers')
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//MVC handlebars

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//load static files in th epublic folder
app.use(express.static(path.join(__dirname, 'public')));

//cookie session
app.use(session(sess));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
