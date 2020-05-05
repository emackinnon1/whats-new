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
			selected: local,
    }
	
	
	selectTopic(topic) {
		this.setState({selected: topic})
	}


  render () {
    return (
      <div className="app">
        <Menu topics={this.state.allArticles} selectTopic={this.selectTopic}/>
				<NewsContainer article={this.state.allArticles[this.state.topic]}/>
      </div>
    );
  }
}

export default App;
