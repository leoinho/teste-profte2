import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Contato from './Contato';

class Rotas extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={Contato} />
       
      </div>
    </Router>
    );
  }
}

export default Rotas;
