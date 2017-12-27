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
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="navbar-brand col-md-2">Probate Application</div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse col-md-10" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <div class="nav-link">New Search <i class="fa fa-search fa-lg" aria-hidden="true"></i></div>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          New <i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal">Add New Person</a>
        </div>
      </li>
        <li class="nav-item dropdown">
       <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Open <i class="fa fa-folder-open fa-lg" aria-hidden="true"></i>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item">Action</a>
          <a class="dropdown-item">Another action</a>
          <a class="dropdown-item">Something else here</a>
        </div>
      </li>
        <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Person Options <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item">Action</a>
          <a class="dropdown-item">Another action</a>
          <a class="dropdown-item">Something else here</a>
        </div>
      </li>
        <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Case Options <i class="fa fa-briefcase fa-lg" aria-hidden="true"></i>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item">Action</a>
          <a class="dropdown-item">Another action</a>
          <a class="dropdown-item">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Forms <i class="fa fa-list-alt fa-lg" aria-hidden="true"></i></div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Reports <i class="fa fa-file fa-lg" aria-hidden="true"></i></div>
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