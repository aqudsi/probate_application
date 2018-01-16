const router = require("express").Router();
const addRoute = require("./add");
// const deleteRoute = require("./delete");
const searchRoute = require("./search");
const updateRoute = require("./update");
const authRoute = require('./auth');

router.use("/search", searchRoute);
router.use("/add", addRoute);
// router.use("/delete", deleteRoute);
router.use("/update", updateRoute);
// router.use("/auth", authRoute);

module.exports = router;
