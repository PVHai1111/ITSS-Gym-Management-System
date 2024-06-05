const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
require('dotenv').config();
const { isLoggedIn, isAdmin, isEmployeeOrAdmin } = require('./middleware');

mongoose.connect('mongodb://127.0.0.1:27017/gym');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
