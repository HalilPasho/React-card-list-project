import React from 'react';
import CardList from './card-list/card-list';
import SearchBox from './search-box/search-box';
import Axios from 'axios';

class Monsters extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: '',
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => this.setState({ monster: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <span className="images">
          <h1 style={{ color: '#0f576b', fontSize: '40px' }}>Testing </h1>
        </span>
        <SearchBox
          placeholder="search monster"
          handleChanger={this.handleChange}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default Monsters;
