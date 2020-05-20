import React, { Component } from 'react';
import Cardlist from './components/card-list/card-list'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CardListDetails from './components/card-list-details/card-list-details';
import Monsters from './components/monsters'

function App() {

   const RedirectTo = (pathname) => {
    return () => (<Redirect to={{ pathname }} />);
  }


    return (
      <div className="App">
        <Router>
        <Switch>
            <Route exact path="/" component={RedirectTo('/blog')} />
            <Route exact path="/blog" component={Monsters} />
            <Route exact path="/blog/:id/detailed" component={CardListDetails} />
          </Switch>
        </Router>

      </div>
    );
}

export default App;
