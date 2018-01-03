const db = require("../models");

module.exports = {
//search for a record based on any param given (name, IID, etc)
/* 
I needed to convert an array of objects, into an object which retains its respective properties and values
so in essence I have this: let arr = [ { firstName: "Ahmer" }, { lastName: "Qudsi" }, { DOB: "05/12/1994" } ];
and i want it to be formatted like this: let obj = { firstName: "Ahmer", lastName: "Qudsi", DOB: "05/12/1994" };
so the following code is my solution to this problem :)
*/
  searchRecord: function(req, res) {
//req.body is an array of objects	
    let searchParams = req.body;
/* 
this obj is for storing the different values of whatever 
combination of information the user chooses to enter into the search form
*/ 
    // let searchParamsObj = {
    // firstName: "",
 	 	// lastName: "",
 	 	// IID: "",
 	 	// Tribe: "",
 	 	// caseNum: "",
 	 	// SSN: "",
 	 	// PIN: "",
    // }
    let searchParamsObj = {
    firstName: {$like:"%"},
    lastName: {$like:"%"},
    IID: {$like:"%"},
    Tribe: {$like:"%"},
    caseNum: {$like:"%"},
    SSN: {$like:"%"},
    PIN: {$like:"%"},
    }
//this algorithm creates an object with nested objects out of my array
	var params = searchParams.reduce(function(acc, cur, i) {
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
        	searchParamsObj.firstName.$like = obj[prop] + '%';
        }
        else if(prop == 'lastName') {
        	searchParamsObj.lastName.$like = obj[prop] + '%';
        }
        else if(prop == "IID") {
        	searchParamsObj.IID.$like = obj[prop] + '%';
        }
        else if(prop == "Tribe") {
        	searchParamsObj.Tribe.$like = obj[prop] + '%';
        }
        else if(prop == "caseNum") {
        	searchParamsObj.caseNum.$like = obj[prop] + '%';
        }
        else if(prop == "SSN") {
        	searchParamsObj.SSN.$like = obj[prop] + '%';
        }
        else if(prop == "PIN") {
        	searchParamsObj.PIN.$like = obj[prop] + '%';
        }
      
    }
}

const likeParamsObj = Object.assign({}, searchParamsObj);

//this next line removes all keys (properties) that are empty strings
Object.keys(searchParamsObj).forEach((key) => (searchParamsObj[key].$like == "%") && delete searchParamsObj[key]);
//log it to make sure its exactly what we want
console.log(searchParamsObj)

/*
I reference the object we just created in this Sequelize method 
so that we can search for records based on multiple criteria
*/
let firstName = likeParamsObj.firstName;
let lastName = likeParamsObj.lastName;
let IID = likeParamsObj.IID;
let Tribe = likeParamsObj.Tribe;
let caseNum = likeParamsObj.caseNum;
let SSN = likeParamsObj.SSN;


/*
this next property i created strictly for the purpose of incorporating a LIKE operator, so that someone could type in 
"Ed" for the first name and retrieve all names that start with Ed (Edward, Edison, Edwin, etc).
I needed to have the entirety of my query parameters (searchParamsObj) in an object before i used
*/ 
//this $and used to be $or
for(prop in searchParamsObj) {
  console.log(prop)
}
    var likeParams = { 
        $or : [
          {
            firstName: {
              $like: firstName + '%'
            },
            lastName: {
              $like: lastName + '%'
            },
            IID: {
              $like: IID + '%'
            },
            Tribe: {
              $like: Tribe + '%'
            },
            caseNum: {
              $like: caseNum + '%'
            },
            SSN: {
              $like: SSN + '%'
            },
         },
        ]
    }  

    var otherLikeParams = {
      $or : [
          {
            lastName: {
              $like: 'Qud%'
            },
         },
        ]
    }

//this sequelize query will not execute if the object passed to it is empty
if(Object.keys(searchParamsObj).length !== 0) {
	db.Users.findAll({
      where: {
       $and: searchParamsObj
    }
    }).then(function(record) {
      res.json(record); //send the results back to be displayed by the react component
    });
  } 
 }	
}