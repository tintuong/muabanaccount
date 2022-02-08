const express = require("express");
const route = express.Router();
const datHangController = require("../../controllers/client/dathang");

route.get("/:sanpham", datHangController.getDatHang);

module.exports = route;