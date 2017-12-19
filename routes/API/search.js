const router = require("express").Router();
const searchRecord = require("../../controllers/searchRecord");

router.route("/:id").get(searchRecord.searchRecord);

module.exports = router;
