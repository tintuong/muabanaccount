const md5 = require("md5");
const rand = require("randomstring");
const db = require("../../model");
const md5convert = require('md5');



const loginController = {
    getDangKy(req, res) {
        res.render("dangky", { layout: false });
    },
    getDangNhap(req, res) {

        res.render("dangnhap", { layout: false });
    },
    postDangKy(req, res) {
        let temp = req.body;
        let userFind = db.getFind("users", "taikhoan", req.body.username);
        if (userFind != undefined || temp.password != temp.repassword) {
            res.render("dangky", { layout: false });
            return;
        }
        let user = {
            "id": rand.generate(10),
            "taikhoan": temp.username,
            "matkhau": md5convert(temp.password),
            "name": null,
            "phone": null,
            "money": 0,
            "transaction": 0,
        }
        db.getAdd("users", user);
        res.cookie("key", user.id);
        res.redirect("/");


    },
    postDangNhap(req, res) {

        let temp = req.body;
        let userFind = db.getFind("users", "taikhoan", temp.username);
        if (userFind == undefined || md5convert(temp.password) != userFind.matkhau) {
            res.render("dangnhap", { layout: false });
            return;
        }

        res.cookie("key", userFind.id);

        res.redirect("/");
    },

};
module.exports = loginController;