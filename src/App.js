import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calculator from './components/calculator'
import Stock from './components/stock'

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route exact path="/" />
      <Route path="/stock" component= {Stock} />
      <Route path="/calculator" component= {Calculator} />
    </div>
    </Router>
  );
}

function Header() {
  return (
    <nav className="nav">
      <a className="nav-link active" href="/">HOME</a>
      <a className="nav-link" >
        <Link to="/stock">STOCK</Link>
      </a>
      <a class="nav-link" href="#">
        <Link to="/calculator">CALCULATOR</Link>
      </a>
    </nav>
  );
}
export default App;
