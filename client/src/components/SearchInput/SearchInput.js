import React, { Component } from "react";
import DisplayResults from "../DisplayResults";
import API from "../../utils/API";
import "./SearchInput.css"



 class SearchInput extends Component {
 	constructor(props) {
 	 super(props);
 	 this.state = {
 	 	firstName: "",
 	 	lastName: "",
 	 	IID: "",
 	 	DOB: "",
 	 	DOD: "",
 	 	Tribe: "",
 	 	caseNum: "",
 	 	SSN: "",
 	 	PIN: "",
 	 	searchParams: [], //all search parameters stored in an array
 	 	record: {}
 	 }
 	 this.inputFirstName = this.inputFirstName.bind(this);
 	 this.inputLastName = this.inputLastName.bind(this);
 	 this.inputIID = this.inputIID.bind(this);
 	 this.inputDOB = this.inputDOB.bind(this);
 	 this.inputDOD = this.inputDOD.bind(this);
 	 this.inputTribe = this.inputTribe.bind(this);
 	 this.inputCaseNum = this.inputCaseNum.bind(this);
 	 this.inputSSN = this.inputSSN.bind(this);
 	 this.inputPIN = this.inputPIN.bind(this);

 	 this.searchForRecord = this.searchForRecord.bind(this);	
 	}

	inputFirstName = event => {
		this.setState({firstName: event.target.value});
	};
	inputLastName = event => {
		this.setState({lastName: event.target.value});
	};
	inputIID = event => {
		this.setState({IID: event.target.value});
	};
	inputDOB = event => {
		this.setState({DOB: event.target.value});
	};
	inputDOD = event => {
		this.setState({DOD: event.target.value});
	};
	inputTribe = event => {
		this.setState({Tribe: event.target.value});
	};
	inputCaseNum = event => {
		this.setState({caseNum: event.target.value});
	};
	inputSSN = event => {
		this.setState({SSN: event.target.value});
	};
	inputPIN = event => {
		this.setState({PIN: event.target.value});
	};


	searchForRecord = event => {
		event.preventDefault();
		this.combineSearchParameters();
		this.API_call();
		this.emptySearchParams();
	};

	emptySearchParams = () => {
		this.setState({ searchParams: [] });
		console.log(this.state.searchParams);
	};

	API_call = () => {
		console.log("searchForRecord is running, search parameters are: " + this.state.searchParams)
		API.searchRecord(this.state.searchParams)
			.then(res=> this.setState({ record: res.data, searchParams: [] }))
			.catch(err => console.log(err));
	};

	combineSearchParameters = () => {
		console.log("Combining search parameters...");
		const searchParams = this.state.searchParams;
		if(this.state.firstName !== "") {
			searchParams.push(this.state.firstName);
		}
		if(this.state.lastName !== "") {	
			searchParams.push(this.state.lastName);
		}
		if(this.state.IID !== "") {	
			searchParams.push(this.state.IID);
		}
		if(this.state.DOB !== "") {	
			searchParams.push(this.state.DOB);
		}
		if(this.state.DOD !== "") {
			searchParams.push(this.state.DOD);
		}
		if(this.state.Tribe !== "") {
			searchParams.push(this.state.Tribe);
		}
		if(this.state.caseNum !== "") {
			searchParams.push(this.state.caseNum);
		}
		if(this.state.SSN !== ""){
			searchParams.push(this.state.SSN);	
		}
		if(this.state.PIN !== ""){
			searchParams.push(this.state.PIN);
			console.log("Search parameters combined");	
		}
	};



  render() {
   return (
	<div className="row">
	 <div className="col-md-8">
	 <DisplayResults 
	 		record = {this.state.record}
	 	/>
	 </div>
	 <div className="col-md-4">
	 	<form className="form-group">
	   <div class="nav-link">New Search <i class="fa fa-search fa-lg" aria-hidden="true"></i></div>
		<input type="text" className="form-control" placeholder="Enter Name" onBlur={this.inputFirstName}/>
		<input type="text" className="form-control" placeholder="Enter Name" onBlur={this.inputLastName}/>
		<input type="text" className="form-control" placeholder="Enter IID" onBlur={this.inputIID}/>
		<input type="text" className="form-control" placeholder="Enter DOB" onBlur={this.inputDOB}/>
		<input type="text" className="form-control" placeholder="Enter DOD" onBlur={this.inputDOD}/>
		<input type="text" className="form-control" placeholder="Enter Tribe" onBlur={this.inputTribe} />
		<input type="text" className="form-control" placeholder="Enter Case Number" onBlur={this.inputCaseNum}/>
		<input type="text" className="form-control" placeholder="Enter SSN" onBlur={this.inputSSN}/>
		<input type="text" className="form-control" placeholder="Enter PIN" onBlur={this.inputPIN}/>
		<button type="submit" className="btn btn-outline-primary pull-right" onClick={this.searchForRecord} value="Submit">
		Search <i class="fa fa-search" aria-hidden="true"></i></button>
	   </form>
	 </div>
	</div>  
  )	
 }
}
export default SearchInput;