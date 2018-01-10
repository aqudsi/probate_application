import React, { Component } from "react";
import DisplayDuplicateData from '../DisplayDuplicateData';
import API from "../../utils/API";
import "./AddRecordModal.css";

function validate(firstName, lastName) {
  // true means invalid, so our conditions got reversed
  console.log("Validating fields");
  return {
    firstName: firstName.length === 0,
    lastName: lastName.length === 0
  };
}


class AddRecordModal extends Component {
constructor(props) {
  super(props)
  this.state = {
    firstName: "",
    lastName: "",
    IID: "",
    DOB: "",
    DOD: "",
    Tribe: "",
    caseNum: "",
    SSN: "",
    personParams: [], //all person info parameters stored in an object
    duplicateData: {},
    personDetails: {},
    recordCreated: "",
    DB_error: "",
    touched: {
      firstName: false,
      lastName: false
      }
   };


   this.inputFirstName = this.inputFirstName.bind(this);
   this.inputLastName = this.inputLastName.bind(this);
   this.inputIID = this.inputIID.bind(this);
   this.inputDOB = this.inputDOB.bind(this);
   this.inputDOD = this.inputDOD.bind(this);
   this.inputTribe = this.inputTribe.bind(this);
   this.inputCaseNum = this.inputCaseNum.bind(this);
   this.inputSSN = this.inputSSN.bind(this);

   this.addRecord = this.addRecord.bind(this);
};
  componentWillReceiveProps(props) {
    if(Object.keys(props.personDetails).length !== 0) {
      this.setState({ personDetails: props.personDetails });
      this.changeNullValues(props.personDetails);
    }
  };

  changeNullValues = (props) => {
    let personDetails = props;
      for(var key in personDetails) {
        if(personDetails[key] ==  null) {
          personDetails[key] = "";
        }
      } 
      this.setState({personDetails: personDetails})
      console.log(this.state.personDetails);
  };

  inputFirstName = event => {
    console.log("inputFirstName is running")
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

  addRecord = event => {
    event.preventDefault();
    this.combinePersonParameters();
    this.API_call();
    this.emptyPersonParams();
  };

  emptyPersonParams = () => {
    this.setState({ personParams: [] });
  };

  API_call = () => {
    console.log("addRecord is running");
    API.addRecord(this.state.personParams)
        .then(res=>
            this.setState({ duplicateData: res.data.record, recordCreated: res.data.recordCreated, personParams: [], DB_error: res.data.name })
          )
        console.log(this.state.recordCreated);
  };

  combinePersonParameters = () => {
    console.log("Combining person parameters...");
    const personParams = this.state.personParams;
    if(this.state.firstName !== "") {
      let firstName = { firstName: this.state.firstName };
      personParams.push(firstName);
    }
    if(this.state.lastName !== "") {
      let lastName = { lastName: this.state.lastName };
      personParams.push(lastName);
    }
    if(this.state.IID !== "") { 
      let IID = { IID: this.state.IID };
      personParams.push(IID);
    }
    if(this.state.DOB !== "") { 
      let DOB = { DOB: this.state.DOB };
      personParams.push(DOB);
    }
    if(this.state.DOD !== "") {
      let DOD = { DOD: this.state.DOD };
      personParams.push(DOD);
    }
    if(this.state.Tribe !== "") {
      let Tribe = { Tribe: this.state.Tribe };
      personParams.push(Tribe);
    }
    if(this.state.caseNum !== "") {
      let caseNum = { caseNum: this.state.caseNum };
      personParams.push(caseNum);
    }
    if(this.state.SSN !== "") {
      let SSN = { SSN: this.state.SSN };
      personParams.push(SSN); 
    }
  };
    fieldValidation = (field) => (event) => {
    this.setState({ 
    touched: { ...this.state.touched, [field]: true},
    });
   };

render() {
  const errors = validate(this.state.firstName, this.state.lastName);
  const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

  return (
<div className="addRecord">
 <div className="modal fade" id="addRecord" tabindex="-1" role="dialog" aria-labelledby="addRecordLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="addRecordLabel">Add/Update Person Record {this.state.personDetails.firstName} </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <form className="form-group">
        <input type="text" className={ shouldMarkError('firstName') ? "form-control required" : "form-control" } value={this.state.firstName} placeholder="First Name (required)" onChange={this.inputFirstName} onBlur={this.inputFirstName, this.fieldValidation('firstName')}/>
        <input type="text" className={ shouldMarkError('lastName') ? "form-control required" : "form-control" } value={this.state.lastName} placeholder="Last Name (required)" onChange={this.inputLastName} onBlur={this.inputLastName, this.fieldValidation('lastName')}/>
        <input type="text" className="form-control" placeholder="IID" onChange={this.inputIID}/>
        <input type="text" className="form-control" placeholder="DOB" value={this.state.DOB} onChange={this.inputDOB}/>
        <input type="text" className="form-control" placeholder="DOD" value={this.state.inputDOD} onChange={this.inputDOD}/>
        <input type="text" className="form-control" placeholder="Tribe" value={this.state.Tribe} onChange={this.inputTribe}/>
        <input type="text" className="form-control" placeholder="Case Number" value={this.state.caseNum} onChange={this.inputCaseNum}/>
        <input type="text" className="form-control" placeholder="SSN" value={this.state.SSN} onChange={this.inputSSN}/>
        <input type="text" className="form-control" placeholder="PIN" value={this.state.PIN} onChange={this.inputPIN}/>
       </form>
       <DisplayDuplicateData 
        duplicateData = {this.state.duplicateData}
        recordCreated = {this.state.recordCreated}
        DB_error = {this.state.DB_error}
       /> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.addRecord}>Add Record</button>
      </div>
    </div>
  </div>
 </div>
</div>
  )
  }
	}

export default AddRecordModal;