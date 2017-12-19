import axios from "axios";

export default {

	//searchs for a record
	searchRecord: function(param) { 
		return axios.get("/api/search/" + param);
	},
	//adds a record
	addRecord: function(caseInfo) {
		return axios.post("/api/add");
	},
	//deletes a record 
	deleteRecord: function(record) {
		return axios.delete("/api/delete");
	},
	//updates a record
	updateRecord: function(record) {
		return axios.put("/api/update");
	}

}