import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Travel from "./components/Travel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/travel" component={Travel} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
