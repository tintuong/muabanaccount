const db = require("../../model");
const rand = require("randomstring");

const baiDangController = {
    getBaiDang(req, res) {

        res.render("baidang", {
            layout: "./layouts/admin",
            baidang: db.getBaiDang(db.getIdDanhMuc(req.params.danhmuc).id.toString())
        });
    },
    getThemBaiDang(req, res) {

        res.render("addbaidang", { layout: "./layouts/admin" });
    },

    postThemBaiDang(req, res) {
        let temp = req.file.path.split("\\").slice(1, 3).join("/");
        req.body.img = temp;
        req.body.daban = 0;
        req.body.id = rand.generate(5);
        db.getAdd("baidang", req.body);
        res.render("addbaidang", { layout: "./layouts/admin" });

    },
    delete(req, res) {
        let name = req.params.danhmuc;
        res.render("baidang", {
            layout: "./layouts/admin",
            baidang: db.getBaiDang(db.getIdDanhMuc(req.params.danhmuc).id.toString()),
            name: name
        });
    }

};
module.exports = baiDangController;