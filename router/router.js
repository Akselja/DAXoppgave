// imports
const { Router } = require("express");
const controller = require("../controller/controller");

// router
const router = Router();

// routes
router.get("/", controller.main_get);

// 404
router.use(controller.error404);

module.exports = router;