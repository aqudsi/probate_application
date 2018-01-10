const router = require("express").Router();
const updateRecord = require("../../controllers/updateRecord");

router.route("/").put(updateRecord.updateRecord);

module.exports = router;