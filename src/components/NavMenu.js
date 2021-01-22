import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function NavMenu() {
  return (
    <div className="nav-menu">
      <Link className="nav-link" to="/">
        Introduction
      </Link>
      <Link className="nav-link" to="/fractal">
        Fractal formation
      </Link>
      <Link className="nav-link" to="/hamiltonian">
        Construction of the Hamiltonian
      </Link>
      <Link className="nav-link" to="/schroedinger">
        Solving the Schroedinger equation
      </Link>
      <Link className="nav-link" to="/results">
        Results
      </Link>
    </div>
  );
}
