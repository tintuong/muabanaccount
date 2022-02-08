const express = require("express");
const route = express.Router();
const thongTinController = require("../../controllers/client/thongtin");

route.get("/", thongTinController.getThongTin);

module.exports = route;