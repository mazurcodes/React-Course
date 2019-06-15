import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const News = () => <h1>News Hello</h1>
const Main = () => <h1>Maaaaaaaaain Hello</h1>
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavLink to="/" exact>Main</NavLink>
        <NavLink to="/news">News</NavLink>
        <section>
          <Route path="/" exact component={Main}/>
          <Route path="/news" component={News}/>
        </section>
      </div>
      </Router>
    )
  }
}

export default App