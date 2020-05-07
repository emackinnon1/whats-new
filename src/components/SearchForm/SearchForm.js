import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
	state = {
		searchTerm: ''
	};

	handleChange = (e) => {
		this.setState({searchTerm: e.target.value}, this.search);
	}

	search = () => {
		this.props.searchArticles(this.state.searchTerm);
	}
	
	render() {
		return (
			<div id="searchbar">
				<input 
					type="search" id="search" 
					placeholder="Search article headlines" 
					value={this.state.title}
					onChange={(e) => {
						this.handleChange(e);
					}}
				>
				</input>
			</div>
		);
	}
}

export default SearchForm;
