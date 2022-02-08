const suaTaiKhoanController = {
    getSuaTaiKhoan(req, res) {
        res.render("suataikhoan", { layout: "./layouts/admin" });
    }
};
module.exports = suaTaiKhoanController;