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
  }, [excitedState, recursion]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 10,
        height: "100%",
        alignItems: "center",
      }}
    >
      <div
        className="title"
        style={{ alignSelf: "flex-start", marginLeft: "10%" }}
      >
        Results
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: 398, boxShadow: "0 0 1px 1px rgba(0,0,0,1)" }}
          src={fractalUrl}
          alt="image not found"
        ></img>
        <img
          style={{ height: 517 }}
          src={excitedUrl}
          alt="image not found"
        ></img>
      </div>
    </div>
  );
}
