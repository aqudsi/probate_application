import React, { Component } from "react";
import AddRecordModal from '../AddRecord';
import "./Navigation.css"

class Navigation extends Component {
constructor(props) {
  super(props)
}

render() {
  return (
<div className="navigation">
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand col-md-2">Probate Application</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse col-md-10" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <div className="nav-link">New Search <i className="fa fa-search fa-lg" aria-hidden="true"></i></div>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          New <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" data-toggle="modal" data-target="#addRecord">Add New Person</a>
        </div>
      </li>
        <li className="nav-item dropdown">
       <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Open <i className="fa fa-folder-open fa-lg" aria-hidden="true"></i>
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <a className="dropdown-item">Something else here</a>
        </div>
      </li>
        <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Person Options <i className="fa fa-user fa-lg" aria-hidden="true"></i>
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <a className="dropdown-item">Something else here</a>
        </div>
      </li>
        <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Case Options <i className="fa fa-briefcase fa-lg" aria-hidden="true"></i>
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <a className="dropdown-item">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Forms <i className="fa fa-list-alt fa-lg" aria-hidden="true"></i></div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Reports <i className="fa fa-file fa-lg" aria-hidden="true"></i></div>
      </li>
    </ul>
  </div>
</nav>
<AddRecordModal />
</div>

  )
  }
	}
export default Navigation;