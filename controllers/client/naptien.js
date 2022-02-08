const db = require("../../model");
const napTienController = {
    getNapTien(req, res) {
        res.render("naptien", { danhmuc: db.getAllDanhMuc() });
    }
};
module.exports = napTienController;