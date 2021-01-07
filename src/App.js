import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header'

class App extends Component {
	render() {
		return <div>
      <header>
        <Header />
      </header>
    </div>;
	}
}

export default App;
