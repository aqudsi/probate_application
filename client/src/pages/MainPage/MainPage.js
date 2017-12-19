import React, { Component } from "react";
import SearchInput from "../../components/SearchInput";
import Navigation from "../../components/Navigation";
import "./MainPage.css"

 class MainPage extends Component {

	render() {
		return (
		  <div>
		  		<Navigation />
				<SearchInput />
		  </div>	
		);
	}
}

export default MainPage;