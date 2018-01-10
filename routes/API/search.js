const router = require("express").Router();
const searchRecord = require("../../controllers/searchRecord");

router.route("/").post(searchRecord.searchRecord);

module.exports = router;
