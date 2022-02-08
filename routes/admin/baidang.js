const express = require("express");
const route = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/img/' });
const baiDangController = require("../../controllers/admin/baidang");


route.get("/thembaidang", baiDangController.getThemBaiDang);

route.post("/thembaidang", upload.single('avatar'), baiDangController.postThemBaiDang);



route.get("/:danhmuc", baiDangController.getBaiDang);

route.get("/:danhmuc/:id", baiDangController.delete);


module.exports = route;