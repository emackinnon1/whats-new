import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
	state = {
		searchTerm: ''
	};

	search = (e) => {
		this.setState({searchTerm: e.target.value}, this.searchHelper);
	}

	searchHelper = () => {
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
						this.search(e);
					}}
				>
				</input>
			</div>
		);
	}
}

export default SearchForm;
