const mongoose = require('mongoose');
const Member = require('./models/member');
const Employee = require('./models/employee');
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'Vui lòng đăng nhập');
        return res.redirect('/login');
    }