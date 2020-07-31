import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron/Jumbotron';
// import Container from './components/container/Container';
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  
      <Router basename={process.env.PUBLIC_URL}>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>

  );
}

export default App;
