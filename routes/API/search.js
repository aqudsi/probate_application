const router = require("express").Router();
const searchRecord = require("../../controllers/searchRecord");

router.route("/").post(searchRecord.searchRecord); //need to find a different way to send the object, it's being sent as a string


module.exports = router;
