import React, { useEffect, useState } from "react";

export default function FractalFormation() {
  const [recursion, setRecursion] = useState(1);
  const cost = {
    1: "9 comparisons",
    2: "810 comparisons",
    3: "66339 comparisons",
    4: "5380020 comparisons",
    5: "435840669 comparisons",
    6: "Max integer size exceeded",
  };

  let fractalUrl =
    "/assets/normal/fractals/fract" + recursion.toString() + ".png";

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
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <div className="title"> Fractal formation</div>
          <div>
            The Sierpinsky Carpet is a 2D generalization of the Cantor Set:
          </div>
          <img src="/assets/cantorset.png" alt="Image not found" />
          <div>My approach</div>
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
            style={{ height: 380, width: 380 }}
          />
          <div style={{ textAlign: "center" }}>
            Computation cost: {cost[recursion]}
          </div>
        </div>
      </div>
    </div>
  );
}
