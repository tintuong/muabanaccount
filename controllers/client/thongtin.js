const db = require("../../model");
const thongTinController = {
    getThongTin(req, res) {
        res.render("thongtin", { danhmuc: db.getAllDanhMuc() });
    }
};
module.exports = thongTinController;