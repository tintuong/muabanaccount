const express = require("express");
const route = express.Router();
const napTienController = require("../../controllers/client/naptien");

route.get("/", napTienController.getNapTien);

module.exports = route;