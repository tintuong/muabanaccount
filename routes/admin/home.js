const express = require("express");
const route = express.Router();
const homeController = require("../../controllers/admin/home");

route.get("/", homeController.getHome);
route.get("/:danhmuc", homeController.deleteHome);
route.post("/", homeController.postHome);

module.exports = route;