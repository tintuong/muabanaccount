const db = require("../../model");

const homeController = {

    getHome(req, res) {
        res.render("admin", { layout: "./layouts/admin", danhmuc: db.getAllDanhMuc() });
    },
    postHome(req, res) {
        db.getAdd("danhmuc", req.body);
        res.render("admin", { layout: "./layouts/admin", danhmuc: db.getAllDanhMuc() });
    },
    deleteHome(req, res) {
        db.delete("danhmuc", "name", req.params.danhmuc);
        res.render("admin", { layout: "./layouts/admin", danhmuc: db.getAllDanhMuc() });
    }
};
module.exports = homeController;