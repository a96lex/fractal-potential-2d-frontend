import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./components.css";

export default function NavMenu() {
  const location = useLocation().pathname;
  console.log(location === "/");
  return (
    <div className="nav-menu">
      <Link
        className="nav-link"
        to="/"
        style={
          location === "/" ? { backgroundColor: "white", color: "#120d31" } : {}
        }
      >
        Introduction
      </Link>
      <Link
        className="nav-link"
        to="/fractal"
        style={
          location === "/fractal"
            ? { backgroundColor: "white", color: "#120d31" }
            : {}
        }
      >
        Fractal formation
      </Link>
      <Link
        className="nav-link"
        to="/hamiltonian"
        style={
          location === "/hamiltonian"
            ? { backgroundColor: "white", color: "#120d31" }
            : {}
        }
      >
        Construction of the Hamiltonian
      </Link>
      <Link
        className="nav-link"
        to="/schroedinger"
        style={
          location === "/schroedinger"
            ? { backgroundColor: "white", color: "#120d31" }
            : {}
        }
      >
        Solving Schroedinger's equation
      </Link>
      <Link
        className="nav-link"
        to="/results"
        style={
          location === "/results"
            ? { backgroundColor: "white", color: "#120d31" }
            : {}
        }
      >
        Results
      </Link>
    </div>
  );
}
