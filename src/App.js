import React from "react";
import "./App.css";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Questions from "./components/Questions";
import NavBar from "./components/Navbar";
import Total from "./components/Total";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/questions/category/:id" component={Questions} />
          <Route path="/totalscore" component={Total} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
