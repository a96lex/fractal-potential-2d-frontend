import React, { useEffect, useState } from "react";

export default function Results() {
  const [reversed, setReversed] = useState(false);
  const [recursion, setRecursion] = useState(1);
  const [excitedState, setExcitedState] = useState(0);

  const fractalType = reversed ? "reversed" : "normal";

  const maxState = (3 ** recursion) ** 2 - 1;

  const fractalUrl =
    "https://raw.githubusercontent.com/a96lex/fractal-potential-2d-frontend/main/public/assets/" +
    fractalType +
    "/fractals/fract" +
    recursion.toString() +
    ".png";

  const excitedUrl =
    "https://raw.githubusercontent.com/a96lex/fractal-potential-2d-frontend/main/public/assets/" +
    fractalType +
    "/" +
    recursion.toString() +
    "/" +
    recursion.toString() +
    "_" +
    excitedState.toString() +
    ".png";

  useEffect(() => {
    if (excitedState > maxState) {
      setExcitedState(maxState);
    }
    if (excitedState < 0) {
      setExcitedState(0);
    }
  }, [excitedState, recursion, maxState]);

  return (
    <div className="section-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="title">Results</div>
          <div className="parameter-container">
            <div className="nav-link">Invert the fractal</div>
            <input
              type="checkbox"
              className="custom-input"
              value={reversed}
              onChange={() => setReversed(!reversed)}
            />
          </div>
          <div className="parameter-container">
            <div className="nav-link">Recursion value</div>
            <input
              className="custom-input"
              type="number"
              min="1"
              max="4"
              value={recursion}
              onChange={(e) => setRecursion(e.target.value)}
            />
          </div>
          <div className="parameter-container">
            <div className="nav-link">Excited state</div>
            <input
              type="number"
              className="custom-input"
              min="0"
              max={maxState}
              value={excitedState}
              onChange={(e) => setExcitedState(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          className="fractal-img"
          src={fractalUrl}
          alt="fractal not found"
        ></img>
        <img
          className="fractal-img"
          src={excitedUrl}
          alt="solution not found"
        ></img>
      </div>
    </div>
  );
}
