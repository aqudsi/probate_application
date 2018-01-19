import axios from "axios";

export default {

	//searchs for a record
	searchRecord: function(searchParams) { 
		return axios.post("/api/search/", searchParams);
	},
	//adds a record
	addRecord: function(personInfo) {
		return axios.post("/api/add/", personInfo);
	},
	//deletes a record 
	deleteRecord: function(record) {
		return axios.delete("/api/delete");
	},
	//updates a record
	updateRecord: function(record) {
		return axios.put("/api/update", record);
	},

	login: function(credentials) {
		return axios.post("api/login", credentials)
	}

}