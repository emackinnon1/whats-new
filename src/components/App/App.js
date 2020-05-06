import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
	state = {
			allArticles: {local, technology, entertainment, science, health},
			selected: 'local'
    }
	
	selectTopic = (e) => {
		this.setState({
			selected: e.target.id
		});
	}


  render () {
    return (
      <div className="app">
        <Menu topics={this.state.allArticles} selected={this.state.selected} selectTopic={this.selectTopic}/>
				<NewsContainer articles={this.state.allArticles[this.state.selected]}/>
      </div>
    );
  }
}

export default App;
