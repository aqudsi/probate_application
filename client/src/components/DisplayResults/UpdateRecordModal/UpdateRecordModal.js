import React, { Component } from "react";
import DisplayDuplicateData from '../../DisplayDuplicateData';
import API from "../../../utils/API";
import "./UpdateRecordModal.css";

//field validation function
function validate(firstName, lastName) {
  // true means invalid, so our conditions got reversed
  console.log("Validating fields");
  return {
    firstName: firstName.length === 0,
    lastName: lastName.length === 0
  };
}


class UpdateRecordModal extends Component {
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
    personDetails: {
      firstName: "",
      lastName: ""
    },
    recordCreated: "",
    DB_error: "",
    touched: {
      firstName: false,
      lastName: false
      }
   };


   this.inputFirstName = this.inputFirstName.bind(this);
   this.inputLastName = this.inputLastName.bind(this);
   // this.inputIID = this.inputIID.bind(this);
   this.inputDOB = this.inputDOB.bind(this);
   this.inputDOD = this.inputDOD.bind(this);
   this.inputTribe = this.inputTribe.bind(this);
   this.inputCaseNum = this.inputCaseNum.bind(this);
   // this.inputSSN = this.inputSSN.bind(this);

   this.updateRecord = this.updateRecord.bind(this);
};
//this function runs everytime it receives props, and as long as props.personDetails isn't empty, it sets the state object of personDetails to props.personDetails and it passes that object to the function changeNullValues
  componentWillReceiveProps(props) {
    if(Object.keys(props.personDetails).length !== 0) {
      this.setState({ personDetails: props.personDetails });
      this.changeNullValues(props.personDetails);
    }
  };
//this function changes any null values of any property in the props.personDetails object into an empty string (so that there are no errors in updating a record)
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

//these next set of functions change the corresponding values of each property in personDetails to the user's input (for updating records)
  inputFirstName = event => {
    this.setState({personDetails:
      { ...this.state.personDetails, firstName: event.target.value}
    });
  };
  inputLastName = event => {
     this.setState({personDetails:
       { ...this.state.personDetails, lastName: event.target.value}
    });
  };
  // inputIID = event => {
  //    this.setState({personDetails:
  //      { ...this.state.personDetails, IID: event.target.value}
  //   });
  // };
  inputDOB = event => {
     this.setState({personDetails:
       { ...this.state.personDetails, DOB: event.target.value}
    });
  };
  inputDOD = event => {
     this.setState({personDetails:
       { ...this.state.personDetails, DOD: event.target.value}
    });
  };
  inputTribe = event => {
     this.setState({personDetails:
       { ...this.state.personDetails, Tribe: event.target.value}
    });
  };
  inputCaseNum = event => {
     this.setState({personDetails:
       { ...this.state.personDetails, caseNum: event.target.value}
    });
  };
  // inputSSN = event => {
  //    this.setState({personDetails:
  //      { ...this.state.personDetails, SSN: event.target.value}
  //   });
  // };
//if the database returns an error message (SequelizeDatabaseError) then it alerts the user that there was an issue updating the record. Otherwise it'll alert the user that the update was sucessful
  errorHandler = () => {
    if(this.state.DB_error.length === 0) {
      alert("Successfully updated person information!");
    }
    else {
      alert("There was a problem with updating the person information, please try again!");
      // this.setState({ DB_error: "" });
    }
  };

//this function takes the personDetails object and runs an API function to update the record. 
  updateRecord = event => {
    event.preventDefault();
    console.log("updateRecord is running");
    API.updateRecord(this.state.personDetails)
        .then(res=>
          console.log(res.data.name))// this.setState({ DB_error: res.data.name}))
        .then(res=> this.errorHandler())    
  };
//this function highlights the fields that are required red, if they're left empty
    fieldValidation = (field) => (event) => {
    this.setState({ 
    touched: { ...this.state.touched, [field]: true},
    });
   };

render() {
  //field validation function 
  const errors = validate(this.state.personDetails.firstName, this.state.personDetails.lastName);
  const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

  return (
<div className="updateRecord">
 <div className="modal fade" id="updateRecord" tabindex="-1" role="dialog" aria-labelledby="updateRecordLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="updateRecordLabel">Update Person Record {this.state.personDetails.firstName} </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <form className="form-group">
        First Name <input type="text" className={ shouldMarkError('firstName') ? "form-control required" : "form-control" } value={this.state.personDetails.firstName} placeholder="First Name (required)" onChange={this.inputFirstName} onBlur={this.inputFirstName, this.fieldValidation('firstName')}/>
        Last Name <input type="text" className={ shouldMarkError('lastName') ? "form-control required" : "form-control" } value={this.state.personDetails.lastName} placeholder="Last Name (required)" onChange={this.inputLastName} onBlur={this.inputLastName, this.fieldValidation('lastName')}/>
        IID <input type="text" className="form-control" placeholder="IID" value={this.state.personDetails.IID} onChange={this.inputIID}/>
        DOB <input type="text" className="form-control" placeholder="DOB" value={this.state.personDetails.DOB} onChange={this.inputDOB}/>
        DOD <input type="text" className="form-control" placeholder="DOD" value={this.state.personDetails.DOD} onChange={this.inputDOD}/>
        Tribe <input type="text" className="form-control" placeholder="Tribe" value={this.state.personDetails.Tribe} onChange={this.inputTribe}/>
        Case #<input type="text" className="form-control" placeholder="Case Number" value={this.state.personDetails.caseNum} onChange={this.inputCaseNum}/>
        SSN <input type="text" className="form-control" placeholder="SSN" value={this.state.personDetails.SSN} onChange={this.inputSSN}/>
        PIN <input type="text" className="form-control" placeholder="PIN" value={this.state.personDetails.PIN}/>
       </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.updateRecord}>Update Record</button>
      </div>
    </div>
  </div>
 </div>
</div>
  )
  }
	}

export default UpdateRecordModal;