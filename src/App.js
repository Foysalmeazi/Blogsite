import React from 'react';
import './App.css';
import Home from './Container/Home';
import ContactUS from './Container/ContactUS'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Post from './Container/Post';
import Go from './Container/Go'
import Footers from './Components/Footer/Footers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact-us" component={ContactUS}></Route>
        <Route path="/post/:pid" component={Post}></Route>
        <Route path="/go" component={Go}></Route>
        <Footers></Footers>

      </div>
    </Router>

  );
}

export default App;
