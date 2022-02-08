const taiKhoanController = {
    getTaiKhoan(req, res) {
        res.render("taikhoan", { layout: "./layouts/admin" });
    }
};
module.exports = taiKhoanController;