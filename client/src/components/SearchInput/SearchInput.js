import React, { Component } from "react";
import DisplayResults from "../DisplayResults";
import API from "../../utils/API";
import "./SearchInput.css"

/*
This component takes in user input from a form, and queries the database for 
*/

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
 	 	searchParams: [], //all search parameters stored in an object
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
//API call to the database
	API_call = () => {
		console.log("searchForRecord is running");
		API.searchRecord(this.state.searchParams)
			.then(res=> 
				this.setState({ record: res.data, searchParams: [] })
				)
			.catch(err => console.log(err));
	};

	combineSearchParameters = () => {
		console.log("Combining search parameters...");
		const searchParams = this.state.searchParams;
		if(this.state.firstName !== "") {
			let firstName = { firstName: this.state.firstName };
			searchParams.push(firstName);
		}
		if(this.state.lastName !== "") {
			let lastName = { lastName: this.state.lastName };
			searchParams.push(lastName);
		}
		if(this.state.IID !== "") {	
			let IID = { IID: this.state.IID };
			searchParams.push(IID);
		}
		if(this.state.DOB !== "") {	
			let DOB = { DOB: this.state.DOB };
			searchParams.push(DOB);
		}
		if(this.state.DOD !== "") {
			let DOD = { DOD: this.state.DOD };
			searchParams.push(DOD);
		}
		if(this.state.Tribe !== "") {
			let Tribe = { Tribe: this.state.Tribe };
			searchParams.push(Tribe);
		}
		if(this.state.caseNum !== "") {
			let caseNum = { caseNum: this.state.caseNum };
			searchParams.push(caseNum);
		}
		if(this.state.SSN !== "") {
			let SSN = { SSN: this.state.SSN };
			searchParams.push(SSN);	
		}
		if(this.state.PIN !== "") {
			let PIN = { PIN: this.state.PIN };
			searchParams.push(PIN);	
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
		<input type="text" className="form-control" placeholder="First Name" onBlur={this.inputFirstName}/>
		<input type="text" className="form-control" placeholder="Last Name" onBlur={this.inputLastName}/>
		<input type="text" className="form-control" placeholder="IID" onBlur={this.inputIID}/>
		<input type="text" className="form-control" placeholder="DOB" onBlur={this.inputDOB}/>
		<input type="text" className="form-control" placeholder="DOD" onBlur={this.inputDOD}/>
		<input type="text" className="form-control" placeholder="Tribe" onBlur={this.inputTribe} />
		<input type="text" className="form-control" placeholder="Case Number" onBlur={this.inputCaseNum}/>
		<input type="text" className="form-control" placeholder="SSN" onBlur={this.inputSSN}/>
		<input type="text" className="form-control" placeholder="PIN" onBlur={this.inputPIN}/>
		<button type="submit" className="btn btn-outline-primary pull-right" onClick={this.searchForRecord} value="Submit">
		Search <i class="fa fa-search" aria-hidden="true"></i></button>
	   </form>
	 </div>
	</div>  
  )	
 }
}
export default SearchInput;