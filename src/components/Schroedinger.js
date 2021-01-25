import React, { useState } from "react";
import { SchroedingerCode } from "./Code";

export default function Hamiltonian() {
  const [show, setShow] = useState(false);

  const url =
    "https://raw.githubusercontent.com/a96lex/fractal-potential-2d-frontend/main/public/assets/logos/";
  const logos = {
    fortran: {
      src: url + "fortran.png",
      image: "fortran",
      text: "To build the potential and Hamiltonian matrices",
    },
    numpy: {
      src: url + "numpy.png",
      image: "numpy",
      text:
        "Eigenvectors computation. Building package for python from fortran",
    },
    matplotlib: {
      src: url + "matplotlib.png",
      image: "Matplotlib",
      text: "Graphication of the fractals and resulting wavefunctions",
    },
    react: {
      src: url + "reacct.png",
      image: "react",
      text: "Web instrumentalization of the project",
    },
  };

  return (
    <div className="section-container">
      <div
        style={{
          display: "flex",
          width: "90%",
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
            width: "50%",
          }}
        >
          <div className="title">
            Solving the time-independent Schröedinger equation
          </div>
          <div>The time-independent Schröedinger equation (TISE) is:</div>
          <div>
            <img
              src="https://latex.codecogs.com/gif.latex?\frac{-h^2}{2m}\left&space;(&space;\frac{\partial&space;^2}{\partial&space;x^2}&space;&plus;&space;\frac{\partial&space;^2}{\partial&space;y^2}&space;\right&space;)\psi&space;&plus;&space;V(x,y)\psi&space;=&space;E(x,y)"
              title="\frac{-h^2}{2m}\left ( \frac{\partial ^2}{\partial x^2} + \frac{\partial ^2}{\partial y^2} \right )\psi + V(x,y)\psi = E(x,y)"
            />
          </div>
          {/* \frac{-h^2}{2m}\left ( \frac{\partial ^2}{\partial x^2} + \frac{\partial ^2}{\partial y^2} \right )\psi + V(x,y)\psi = E(x,y) */}
          <div>Which, reordered, becomes:</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="https://latex.codecogs.com/gif.latex?E\psi&space;=&space;H\psi"
                title="E\psi = H\psi"
              />
            </div>
            <div style={{ margin: "0 25px 8px 25px" }}>With</div>
            <div>
              <img
                src="https://latex.codecogs.com/gif.latex?H&space;=&space;\frac{-h^2}{2m}\left&space;(&space;\frac{\partial&space;^2}{\partial&space;x^2}&space;&plus;&space;\frac{\partial&space;^2}{\partial&space;y^2}&space;\right&space;)&space;&plus;&space;V(x,y)"
                title="H = \frac{-h^2}{2m}\left ( \frac{\partial ^2}{\partial x^2} + \frac{\partial ^2}{\partial y^2} \right ) + V(x,y)"
              />
            </div>
          </div>
          <div>Methodology:</div>
          <ol>
            <li>Construct the potential matrix</li>
            <li>Construct the Hamiltonian matrix</li>
            <li>
              Diagonalze the Hamiltonian matrix to obtai the its eigenvalues and
              eigenvectors. Those are the wavefunctions.
            </li>
          </ol>

          <div style={{ marginTop: 30 }} onClick={() => setShow(!show)}>
            See code
          </div>
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
            <div
              style={{
                overflow: "auto",
                maxHeight: 500,
              }}
            >
              <SchroedingerCode />
            </div>
            <div>
              <a
                href="https://github.com/a96lex/fractal-potential-2d-frontend/blob/616ed526637ff00c578d3e1584b9dad6bc993410/code/main.py"
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
            marginTop: "2.5%",
            height: "90%",
            width: "40%",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 25, marginBottom: 30 }}>
            Technologies used
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              columnGap: 20,
              rowGap: 20,
            }}
          >
            {Object.keys(logos).map((key, i) => (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  boxShadow: "0 0 8px 2px rgba(0,0,0,0.08)",
                  width: 260,
                  height: "26vh",
                }}
              >
                <img
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                  src={url + logos[key]["image"] + ".png"}
                  alt="Not found"
                />
                <div style={{ fontSize: 20, fontWeight: 600 }}>
                  {logos[key]["image"].toUpperCase()}
                </div>
                <div>{logos[key]["text"]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
