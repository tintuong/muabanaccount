const db = require("../../model");
const datHangController = {

    getDatHang(req, res) {

        res.render("dathang", { danhmuc: db.getAllDanhMuc(), item: db.getFind("baidang", "tieude", req.params.sanpham) });
    }
};
module.exports = datHangController;