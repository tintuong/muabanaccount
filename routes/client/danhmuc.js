const express = require("express");
const route = express.Router();
const danhMucController = require("../../controllers/client/danhmuc");

route.get("/:danhmuc", danhMucController.getDanhMuc);

module.exports = route;