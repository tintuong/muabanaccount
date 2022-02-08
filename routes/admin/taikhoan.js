const express = require("express");
const route = express.Router();
const taiKhoanController = require("../../controllers/admin/taikhoan");

route.get("/", taiKhoanController.getTaiKhoan);

module.exports = route;