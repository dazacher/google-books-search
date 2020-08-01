import React from 'react';
import Jumbotron from './components/jumbotron/Jumbotron';
import NavBar from './components/navbar/NavBar';
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import NoMatch from "./components/pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

  );
}

export default App;