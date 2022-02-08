const db = require("../../model");

const danhMucController = {
    getDanhMuc(req, res) {
        res.render("home", { data: db.getBaiVietDanhMuc(db.getIdDanhMuc(req.params.danhmuc).id), danhmuc: db.getAllDanhMuc() })
    }
};

module.exports = danhMucController;