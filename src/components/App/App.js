import React, { Component } from "react";
import local from "../../data/local";
import entertainment from "../../data/entertainment";
import technology from "../../data/technology";
import science from "../../data/science";
import health from "../../data/health";
import Menu from "../Menu/Menu";
import NewsContainer from "../NewsContainer/NewsContainer";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";

class App extends Component {
	state = {
		allArticles: { local, technology, entertainment, science, health },
		selected: "local",
		articlesToDisplay: null,
	};

	selectTopic = (e) => {
		this.setState({
			selected: e.target.id
		});
	};

	searchArticles = (searchInput) => {
		// if (searchInput === '') {
		// 	this.clearSearch();
		// }

		const currentArticles = this.state.allArticles[this.state.selected];
		const searchResults = currentArticles.filter((article) =>
			article.headline.match(new RegExp(searchInput, "i"))
		);

		this.setState({
			articlesToDisplay: searchResults,
		});
	};

	clearSearch = () => {
		this.setState({
			articlesToDisplay: null
		});
	};

	render() {
		console.log(this.state.articlesToDisplay)
		return (
			<div className="app">
				<Menu
					topics={this.state.allArticles}
					selected={this.state.selected}
					selectTopic={this.selectTopic}
				/>
				<div>
					<SearchForm
						searchArticles={this.searchArticles}
						clearSearch={this.clearSearch}
					/>
					<NewsContainer
						articles={
							this.state.articlesToDisplay ||
							this.state.allArticles[this.state.selected]
						}
					/>
				</div>
			</div>
		);
	}
}

export default App;
