import React, { useState } from "react";
import { FractalCode } from "./Code";

export default function FractalFormation() {
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

  let fractalUrl =
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
            flexDirection: "column",
            marginTop: "2.5%",
            height: "90%",
            justifyContent: "space-between",
          }}
        >
          <div className="title"> Fractal formation</div>
          <div>
            The Sierpinsky Carpet is a 2D generalization of the Cantor Set:
          </div>
          <img src="/assets/cantorset.png" alt="Cantor set not found" />
          <div>Method:</div>
          <div>
            Create a N x N grid depending on the recursion level (r), with N = 3
            <sup>r</sup>.
          </div>
          <div>
            Now a loop takes place which runs r times. In each step, The size of
            the area to check is reduced by a factor of 3. The first iteration
            takes all the points and sets them to 1 if they lay in the center
            part of the area. Each subsequent step does the same for all the
            smaller areas.
          </div>
          <div onClick={() => setShow(!show)}>See code</div>
          <div
            style={
              show
                ? {
                  position: "absolute",
                  backgroundColor: "white",
                  borderRadius: 15,
                  boxShadow: "0 0 13px 6px rgba(0,0,0,0.10)",
                  padding: 18,
                }
                : { display: "none" }
            }
          >
            <div onClick={() => setShow(!show)}>X close</div>
            <FractalCode />
            <div>
              <a
                href="https://github.com/a96lex/fractal-potential-2d-frontend/blob/616ed526637ff00c578d3e1584b9dad6bc993410/code/fractal_and_hamiltonian.f90#L18-L44"
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
            src={fractalUrl}
            alt="not found"
            style={{
              height: 380,
              width: 380,
              boxShadow: "0 0 13px 6px rgba(0,0,0,0.10)",
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
