const homeRoute = require("./client/home");
const loginRoute = require("./client/login");
const napTienRoute = require("./client/naptien");
const thongTinRoute = require("./client/thongtin");
const doiMatKhauRoute = require("./client/doimatkhau");
const danhMucRoute = require("./client/danhmuc");
const dathangRoute = require("./client/dathang");
const adminRoute = require("./admin/home");
const baiDangRoute = require("./admin/baidang");
const taiKhoanRoute = require("./admin/taikhoan");
const suaTaiKhoanRoute = require("./admin/suataikhoan");

const authLogin = require("../middlewares/auth");

function routes(app) {
    app.use("/admin", adminRoute);
    app.use("/admin/baidang", baiDangRoute);
    app.use("/admin/suataikhoan", suaTaiKhoanRoute);
    app.use("/admin/taikhoan", taiKhoanRoute);
    app.use("/doimatkhau", authLogin, doiMatKhauRoute);
    app.use("/thongtin", authLogin, thongTinRoute);
    app.use("/naptien", authLogin, napTienRoute);
    app.use("/dathang", authLogin, dathangRoute);
    app.use("/", loginRoute);
    app.use("/home", authLogin, danhMucRoute);
    app.use("/", authLogin, homeRoute);
}

module.exports = routes;