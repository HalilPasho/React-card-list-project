import React, { Component } from 'react';
import Cardlist from './components/card-list/card-list'
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({monster: res.data}))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search monster' value={this.state.searchField} onChange={e => this.setState({searchField: e.target.value})}/>
        <Cardlist monster={this.state.monster}/>
      </div>
    );
  }
}

export default App;
