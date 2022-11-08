import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "./router.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import FractalFormation from "./components/FractalFormation";
import Hamiltonian from "./components/Hamiltonian";
import Schroedinger from "./components/Schroedinger";
import Results from "./components/Results";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="white-container">
          <Header />
        </div>
        <div
          className="white-container"
          style={{ backgroundColor: "white", overflow: "hidden" }}
        >
          <Switch>
            <Route exact path="/" component={Introduction} />
            <Route path="/fractal" component={FractalFormation} />
            <Route path="/hamiltonian" component={Hamiltonian} />
            <Route path="/schroedinger" component={Schroedinger} />
            <Route path="/results" component={Results} />
          </Switch>
        </div>
        <div className="white-container">
          <NavMenu />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
