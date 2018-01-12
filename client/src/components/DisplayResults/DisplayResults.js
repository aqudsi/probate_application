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

componentWillReceiveProps(props) {
  /*
   this function runs everytime it receives new props from the SearchInput component. If props.record is empty, meaning no record was found, and recordFound = false and addParams is not empty, then it runs addRecord. This ensures that addRecord is only run if the user put in search parameters, and the database verifies that no record was found
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
//this function promps the user that no record was found, and asks them if they want to create a new record. If they user selects yes, then a record is created using addParams, which is for the person the user was searching for initially. It then alerts the user that a record was sucessfully created. If the user declines to make a new record, then it alerts the user that no record was created.  
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
          alert("No record was created");
        }
    }    
  }; 
//This function takes the information from the record selected on the DisplayRecord component, and autofills it into the appropriate input fields of UpdateRecordComponent component
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