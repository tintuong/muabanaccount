const express = require("express");
const route = express.Router();
const suaTaiKhoanController = require("../../controllers/admin/suataikhoan");

route.get("/", suaTaiKhoanController.getSuaTaiKhoan);

module.exports = route;