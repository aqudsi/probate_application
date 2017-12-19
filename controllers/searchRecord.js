const db = require("../models");

module.exports = {

//search for a record based on any param given (name, IID, etc)
  searchRecord: function(req, res){
    console.log("This is req.params.id:");
  	let searchParams = req.params.id.split(',');
    console.log(searchParams);
	// db.Users.findAll({
 //      where: {
 //      	$or: [
 //          { caseNum: req.params.id },
 //          { Name: req.params.id },
 //          { IID: req.params.id },
 //          { DOB: req.params.id },
 //          { DOD: req.params.id },
 //          { Tribe: req.params.id },
 //          { PIN: req.params.id },
 //          { SSN: req.params.id },
 //        ]
 //      },
 //    }).then(function(record) {
 //      res.json(record);
 //    });
 
 }	
}