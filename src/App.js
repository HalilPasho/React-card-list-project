import React, { Component } from 'react';
import Cardlist from './components/card-list/card-list'
import './App.css';
import Axios from 'axios';
import SearchBox from './components/search-box/search-box';
import Greece from './greece.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
     this.setState({ searchField: e.target.value })
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({monster: res.data}))
    .catch(err => console.log(err))
  }
  render() {
    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <span className='images'><h1 style={{color:'#7adbf5', fontSize:'40px'}}>Rroft Vorio Epiri</h1> <img className='gr' alt='elladha' src={Greece}/></span>
       <SearchBox placeholder="search monster" handleChanger={this.handleChange}/>
        <Cardlist monster={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
