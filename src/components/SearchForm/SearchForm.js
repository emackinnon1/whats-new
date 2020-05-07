import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
	state = {
		searchTerm: ''
	};

	handleChange = (e) => {
		this.setState({searchTerm: e.target.value});
		// console.log(this.state.searchTerm)
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
						// this.props.searchArticles(this.state.searchTerm)
						this.props.clearSearch();
					}}
				>
				</input>
				<button 
					id="search-button" 
					type="button" 
					onClick={() => this.props.searchArticles(this.state.searchTerm)}
				>
					Search
				</button>
			</div>
		);
	}
}

export default SearchForm;
