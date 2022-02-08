const doiMatKhauController = {
    getDoiMatKhau(req, res) {
        res.render("doimatkhau", { danhmuc: db.getAllDanhMuc() });
    }
};
module.exports = doiMatKhauController;