const db = require("../models");

module.exports = {
//search for a record based on any param given (name, IID, etc)
/* 
I needed to convert an array of objects, into an object which retains its respective properties and values
so in essence I have this: let arr = [ { firstName: "Ahmer" }, { lastName: "Qudsi" }, { DOB: "05/12/1994" } ];
and i want it to be formatted like this: let obj = { firstName: "Ahmer", lastName: "Qudsi", DOB: "05/12/1994" };
so the following code is my solution to this problem :)
*/
  addRecord: function(req, res) {
//req.body is an array of objects
    let addParams = req.body;
/* 
this obj is for storing the different values of whatever 
combination of information the user chooses to enter into the search form
*/ 
    let addParamsObj = {
      firstName: "",
 	 	  lastName: "",
 	 	  IID: "",
 	 	  DOB: "",
 	 	  DOD: "",
 	 	  Tribe: "",
 	 	  caseNum: "",
 	 	  SSN: "",
 	 	  PIN: "",
    }
//this algorithm creates an object with nested objects out of my array
	var params = addParams.reduce(function(acc, cur, i) {
  		acc[i] = cur;
  	return acc;
	}, {});

//this algorithm condenses each nested object into the parent object, leaving us with just one object with the correct properties and values
	for (var key in params) {
    // skip loop if the property is from prototype
    if (!params.hasOwnProperty(key)) continue;

    var obj = params[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;
//these conditionals fill the object with the corresponding information provided by the user 
        if(prop == 'firstName') {
        	addParamsObj.firstName = obj[prop];
        }
        else if(prop == 'lastName') {
        	addParamsObj.lastName = obj[prop];
        }
        else if(prop == "IID") {
        	addParamsObj.IID = obj[prop];
        }
        else if(prop == "DOB") {
        	addParamsObj.DOB = obj[prop];
        }
        else if(prop == "DOD") {
        	addParamsObj.DOD = obj[prop];
        }
        else if(prop == "Tribe") {
        	addParamsObj.Tribe = obj[prop];
        }
        else if(prop == "caseNum") {
        	addParamsObj.caseNum = obj[prop];
        }
        else if(prop == "SSN") {
        	addParamsObj.SSN = obj[prop];
        }
        else if(prop == "PIN") {
        	addParamsObj.PIN = obj[prop];
        }
      
    }
}
//this next line removes all keys (properties) that are empty strings
Object.keys(addParamsObj).forEach((key) => (addParamsObj[key] == "") && delete addParamsObj[key]);
//log it to make sure its exactly what we want


/*
I reference the object we just created in this Sequelize method 
so that we can search for records based on multiple criteria
*/
let firstName = addParamsObj.firstName;
let lastName = addParamsObj.lastName;


/*
this next property i created strictly for the purpose of incorporating a LIKE operator, so that someone could type in 
"Ed" for the first name and retrieve all names that start with Ed (Edward, Edison, Edwin, etc).
I needed to have the entirety of my query parameters (addParamsObj) in an object before i used
*/

console.log(addParamsObj);

//this sequelize query will not execute if the object passed to it is empty
if(Object.keys(addParamsObj).length !== 0) {
  db.persondata.findOrCreate({where: addParamsObj})
  .spread((user, created) => {
      console.log(user.dataValues);
      console.log(created);
      res.json({record: user.dataValues, recordCreated: created});
      })
      .catch(err => res.send(err))
    }	
  }
}