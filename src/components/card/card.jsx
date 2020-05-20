import React from 'react';
import './card.css';
import { useHistory } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import CardListDetails from '../card-list-details/card-list-details';
import { render } from '@testing-library/react';

class Card extends React.Component {
  constructor(props) {
    super();
  }

  handleClick = () => {
    console.log(this.props.item.id);
    this.props.history.push(`/blog/${this.props.item.id}/detailed`);
  };
  render() {
    return (
      <div onClick={this.handleClick} className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${this.props.item.id}?set=set2&size=180x180`}
        />
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.email}</p>
      </div>
    );
  }
}

export default withRouter(Card);
