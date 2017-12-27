const router = require("express").Router();
const addRecord = require("../../controllers/addRecord");

router.route("/").post(addRecord.addRecord);

module.exports = router;
