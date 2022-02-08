const express = require("express");
const route = express.Router();
const homeController = require("../../controllers/client/home");

route.get("/", homeController.getHome);

module.exports = route;