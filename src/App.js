import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Travel from "./components/Travel";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/travel" component={Travel} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
