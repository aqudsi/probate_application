import React, { Component } from "react";
import UpdateRecordModal from "./UpdateRecordModal";
import API from "../../utils/API";
import "./DisplayResults.css"

class DisplayResults extends Component {
constructor(props) {
  super(props)
  this.state = {
    record: [],
    recordFound: "", 
    addParams: [],
    personDetails: {
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
  }
};

/*
problem is that componentWillReceiveProps updates EVERY time it receives new props, so the
confirm prompt is activated multiple times unneccessarily. put some logic in that makes it so 
this.addRecord() isn't activated every time new props are receieved
*/
componentWillReceiveProps(props) {
  /*
  the first time this component loads, props.record doesn't exist, so the conditional 
  statement verifies that the object in questions (props.record) has a length of 0 
  which means its empty, and that it's an object.
  After the call to the database to retrieve data has been made, this logic
  checks to make sure that props.record (which is an array sent back from the DB),
  is still NOT an object and is empty, which are both false; so then the else statement
  executes

  TL;DR This logic makes sure that we have the data we want in props.record before setting
  it to the state
  */

    if(Object.keys(this.props.record).length === 0) {
      this.setState({ addParams: props.params, recordFound: props.recordFound });
      if(this.state.recordFound === false && this.state.addParams.length !== 0) {
        this.addRecord()
      }
    }
    else {
      this.setState({ record: props.record });
    }
};
//need to fix this so the alert only pops up if no record has been found, and get the addRecord function to work
 addRecord = () => {
    if(this.state.addParams.length !== 0) {
        if(window.confirm('No matching record found, would you like to create a record?') === true && this.state.addParams.length !== 0) {
          // console.log("Adding record");
          API.addRecord(this.state.addParams)
          .then(res=> this.setState({ addParams: [], recordFound: "" }))
          .then(res=> alert("Record has been successfully created!"));
        } 
        else {
          this.setState({ addParams: [], recordFound: "" });
          // console.log("No record was created");
          alert("No record was created");
        }
    }    
  }; 
//need to create a function that will take the information from the record selected on the DisplayRecord component, and autofill it into the appropriate input fields of AddRecordModal component
  personDetails = (event) => {
   let firstName = event.target.getAttribute('firstname');
   let lastName = event.target.getAttribute('lastname');
   let IID = event.target.getAttribute('iid');
   let DOB = event.target.getAttribute('dob');
   let DOD = event.target.getAttribute('dod');
   let Tribe = event.target.getAttribute('tribe');
   let caseNum = event.target.getAttribute('casenum');
   let SSN = event.target.getAttribute('ssn');
   let PIN = event.target.getAttribute('pin');
   this.setState({ personDetails: 
    { ...this.state.personDetails, firstName: firstName, lastName: lastName, IID: IID, DOB: DOB, DOD: DOD, Tribe: Tribe, caseNum: caseNum, SSN: SSN, PIN: PIN }
  });
};

render() {
  return (
<div className="display">
Search Results: {this.state.record.length}
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Indian ID #</th>
      <th scope="col">Case #</th>
      <th scope="col">DOB</th>
      <th scope="col">DOD</th>
      <th scope="col">Tribe</th>
      <th scope="col">SSN</th>
      <th scope="col">PIN</th>
    </tr>
  </thead>
  <tbody>
    {this.state.record.map(record => ( 
    <tr>
      <td><a data-toggle="modal" data-target="#updateRecord" 
      firstname={record.firstName} 
      lastname={record.lastName}
      iid={record.IID}
      dob={record.DOB}
      dod={record.DOD}
      tribe={record.Tribe}
      casenum={record.caseNum}
      ssn={record.SSN}
      pin={record.PIN}
      onClick={this.personDetails}>{record.lastName}, {record.firstName}
      </a></td>
      <td>{record.IID}</td>
      <td>{record.caseNum}</td>
      <td>{record.DOB}</td>
      <td>{record.DOD}</td>
      <td>{record.Tribe}</td>
      <td>{record.SSN}</td>
      <td>{record.PIN}</td>
    </tr>
    ))}
  </tbody>
 </table>
 <UpdateRecordModal 
  personDetails={this.state.personDetails}
 />
</div> 
  )
  }
	}
export default DisplayResults;