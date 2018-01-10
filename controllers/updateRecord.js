const db = require("../models");

module.exports = {

	updateRecord: function(req, res) {
		console.log(req.body)
		const record = req.body;
		//loops through the record object, and if any of the values are an empty string, turn them into a null value
		for(var key in record) {
			console.log(key)
			if(record[key] === '') {
				record[key] = null; 
			}
		}
		//log our record to make sure its what we want
		console.log(record);
		//update function which passes in the record 
		db.Users.update(
			record, 
			{
				where: {
					PIN: record.PIN
				}
			}).then(function(record){
				res.json(record)
			});
	}
}