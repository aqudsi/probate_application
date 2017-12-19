const router = require("express").Router();
const API_routes = require("./API");

//API Routes
router.use("/api", API_routes);

module.exports = router;