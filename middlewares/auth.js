const db = require("../model");

function authLogin(req, res, next) {
    if (req.cookies.key == undefined && db.getFind("users", "id", req.cookies.key) == undefined) {
        res.redirect("dangnhap");
        return;
    }
    res.locals.user = db.getFind("users", "id", req.cookies.key);
    next();
}

module.exports = authLogin;