const express = require("express");
const route = express.Router();
const loginController = require("../../controllers/client/login");

route.get("/dangky", loginController.getDangKy);
route.get("/dangnhap", loginController.getDangNhap);
route.post("/dangky", loginController.postDangKy);
route.post("/dangnhap", loginController.postDangNhap);

module.exports = route;