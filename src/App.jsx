import React, { Component } from 'react';
import './styles/global.scss';
import RepositoryList from './components/RepositoryList';

class App extends Component {
  render() {
    return (<RepositoryList />)
  }
}

export default App;