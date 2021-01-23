import React, { useEffect, useState } from "react";
import { FractalCode, HamiltonianCode } from "./Code";

export default function Hamiltonian() {
  const [recursion, setRecursion] = useState(1);
  const [show, setShow] = useState(false);

  const cost = {
    1: "9 comparisons",
    2: "810 comparisons",
    3: "66339 comparisons",
    4: "5380020 comparisons",
    5: "435840669 comparisons",
    6: "Max integer size exceeded",
  };

  let hamiltonianUrl =
    "https://raw.githubusercontent.com/a96lex/fractal-potential-2d-frontend/main/public/assets/normal/fractals/fract" +
    recursion.toString() +
    ".png";

  return (
    <div className="section-container">
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 800,
            flexDirection: "column",
            marginTop: "2.5%",
            height: "90%",
            justifyContent: "space-between",
            width: 550,
          }}
        >
          <div className="title"> Constructing the Hamiltonian</div>
          <div>
            In order to solve the time-independent Schröedinger equation, the
            Hamiltonian matrix needs to be constructed according to the system's
            conditions.
          </div>
          <div>My approach</div>
          <ol>
            <li>
              Dump the potential matrix to a 1-Dimensional vector of size N
              <sup>2</sup>
            </li>
            <li>
              Create a N<sup>2</sup> x N<sup>2</sup>. Each row corresponds to a
              point in the potential grid.
            </li>
            <li>Loop through all the items in the potential 1D array:</li>
            <ol>
              <li>
                If in that point the potential is equal to 0, the corresponding
                row remains 0.
              </li>
              <li>
                If in that point there is a potential equal to 1:
                <li>
                  Set the diagonal value of the corresponding row in the
                  Hamiltonian to 4/Δx<sup>2</sup>.
                </li>
                <li>
                  Check all neighbouring points. If any of them is equal to 1,
                  add -1/Δx<sup>2</sup> to the corresponding value in the row of
                  the Hamiltonian.
                </li>
              </li>
            </ol>
          </ol>

          <div onClick={() => setShow(!show)}>See code</div>
          <div
            style={
              show
                ? {
                    position: "absolute",
                    backgroundColor: "white",
                    borderRadius: 15,
                    boxShadow: "0 0 13px 6px rgba(0,0,0,0.20)",
                    padding: 18,
                  }
                : { display: "none" }
            }
          >
            <div onClick={() => setShow(!show)}>X close</div>
            <HamiltonianCode />
            <div>
              <a
                href="https://github.com/a96lex/fractal-potential-2d-frontend/blob/616ed526637ff00c578d3e1584b9dad6bc993410/code/fractal_and_hamiltonian.f90#L47-L76"
                target="blank"
                style={{ textAlign: "right", color: "#120D31" }}
              >
                See full source on github
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "25px 0px",
            marginLeft: 25,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 25 }}>Resulting fractal</div>
          <div className="parameter-container">
            <div className="nav-link">Recursion value</div>
            <input
              className="custom-input"
              type="number"
              min="1"
              max="6"
              value={recursion}
              onChange={(e) => setRecursion(e.target.value)}
            />
          </div>
          <img
            src={hamiltonianUrl}
            alt="not found"
            style={{
              height: 380,
              width: 380,
              boxShadow: "0 0 13px 6px rgba(0,0,0,0.20)",
            }}
          />
          <div style={{ textAlign: "center" }}>
            Computation cost: {cost[recursion]}
          </div>
        </div>
      </div>
    </div>
  );
}
