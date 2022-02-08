const express = require("express");
const route = express.Router();
const doiMatKhauController = require("../../controllers/client/doimatkhau");

route.get("/", doiMatKhauController.getDoiMatKhau);

module.exports = route;