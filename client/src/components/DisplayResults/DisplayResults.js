import React, { Component } from "react";
import "./DisplayResults.css"

class DisplayResults extends Component {
constructor(props) {
  super(props)
  this.state = {
    record: []
  }
}
componentWillReceiveProps(props) {
  /*the first time this component loads, props.record doesn't exist, so the if 
  statement verifies that the object in questions (props.record) has a length of 0 
  which means its empty, and that it's an object.
  After the call to the database to retrieve data has been made, this logic
  checks to make sure that props.record (which is an array sent back from the DB),
  is still NOT an object and is empty, which are both false; so then the else statement
  executes

  TL;DR This logic makes sure that we have the data we want in props.record before setting
  it to the state
  */
if(Object.keys(props.record).length === 0 && props.record.constructor === Object){
  console.log("no data")
}
else {
  console.log("received data");
  console.log(props.record)
  this.setState({ record: props.record });
}
}

render() {
  return (
<div className="display">
Search Results: {this.state.record.length}
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
    {this.state.record.map(record => ( 
    <tr>
      <td>{record.firstName}</td>
      <td>{record.lastName}</td>
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
</div> 
  )
  }
	}
export default DisplayResults;