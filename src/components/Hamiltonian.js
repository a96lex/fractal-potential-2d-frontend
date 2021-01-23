import React, { useState } from "react";
import { HamiltonianCode } from "./Code";

export default function Hamiltonian() {
  const [show, setShow] = useState(false);

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
          <div>Method:</div>
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
                If in that point there is a potential equal to -1:
                <li>
                  Set the diagonal value of the corresponding row in the
                  Hamiltonian to -4/Δx<sup>2</sup>.
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
                    boxShadow: "0 0 13px 6px rgba(0,0,0,0.10)",
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
          <div style={{ fontWeight: 600, fontSize: 25 }}>
            Hamiltonian example
          </div>

          <img
            src="https://raw.githubusercontent.com/a96lex/fractal-potential-2d-frontend/main/public/assets/hamiltonian.png"
            alt="not found"
            style={{
              objectFit: "cover",
              height: 280,
              width: 520,
              boxShadow: "0 0 13px 6px rgba(0,0,0,0.10)",
              borderRadius: 8,
            }}
          />
          <div style={{ textAlign: "center", width: 400, fontSize: 14 }}>
            Figure 3: An example of a coordinate matrix (a), the corresponding
            Hamiltonian matrix (b) and the 1D array (c) constructed using (a).
            For illustration, some pixels in (a) and their corresponding
            rows/elements in (b) and (c) are marked with the same colour.&nbsp;
            <a
              href="https://www.researchgate.net/publication/340984632_Scars_in_the_wavefunction_A_study_of_different_potential_wells_using_the_finite_difference_method"
              target="blank"
              style={{ textAlign: "right", color: "#120D31" }}
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
