const db = require("../../model");
const homeController = {

    getHome(req, res) {

        res.render("home", { data: db.getBaiVietHome(), danhmuc: db.getAllDanhMuc(), user: res.locals.user });
    }
};
module.exports = homeController;