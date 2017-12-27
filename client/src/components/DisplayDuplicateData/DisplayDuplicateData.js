import React, { Component } from 'react';


class DisplayDuplicateRecord extends Component {
	constructor(props) {
		super(props)
	}
  
render() {
if(/*Object.keys(this.props.duplicateData).length !== 0 && */this.props.recordCreated == false && this.props.DB_error !== "") {
 return (
  <div>
 <div className="text-danger">DUPLICATE RECORD FOUND</div>
 <div className="display">
 	<table className="table">
  	<thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
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
    <tr>
      <td>{this.props.duplicateData.firstName}</td>
      <td>{this.props.duplicateData.lastName}</td>
      <td>{this.props.duplicateData.IID}</td>
      <td>{this.props.duplicateData.caseNum}</td>
      <td>{this.props.duplicateData.DOB}</td>
      <td>{this.props.duplicateData.DOD}</td>
      <td>{this.props.duplicateData.Tribe}</td>
      <td>{this.props.duplicateData.SSN}</td>
      <td>{this.props.duplicateData.PIN}</td>
    </tr>  	
   	</tbody>
 </table>
</div> 
</div>
  )
}
else if(/*Object.keys(this.props.duplicateData).length !== 0 && */ this.props.recordCreated == true && this.props.DB_error !== "") {
  return (<div className="text-success">RECORD SUCCESSFULLY CREATED <i class="fa fa-check-circle text-success" aria-hidden="true"></i></div>)
} 
else if(this.props.DB_error == "SequelizeDatabaseError") {
  return (<div className="text-danger">*MISSING REQUIRED FIELDS</div>)
}
else  {
  return (<div></div>)
} 
  }
}


export default DisplayDuplicateRecord