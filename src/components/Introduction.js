import React from "react";

export default function Hamiltonian() {
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
            height: "60%",
            justifyContent: "space-between",
          }}
        >
          <div className="title">Introduction</div>
          <div>
            The objective of this project is solving the time-independent
            Schröedinger equation (TISE) for a single particle in a
            fractal-shaped potential.
          </div>
          <div>
            I found a report that explained how to solve the TISE for an
            arbitrarely shaped potential (available on the right side of this
            page).
          </div>

          <div>
            The present website is an instrumentalization of this report,
            focusing on the Sierpinsky Carpet shaped fractals with increasing
            recursion level.
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
          <div style={{ fontWeight: 600, fontSize: 25 }}>Reference report</div>

          <img
            src="https://raw.githubusercontent.com/a96lex/fractal-potential-2d-frontend/main/public/assets/report.png"
            alt="not found"
            style={{
              objectFit: "cover",
              padding: 10,
              height: 420,
              width: 330,
              boxShadow: "0 0 13px 6px rgba(0,0,0,0.10)",
            }}
          />
          <div style={{ textAlign: "center", width: 400, fontSize: 14 }}>
            Cover of Scars in the wavefunction: A study of different potential
            wells using the finite difference method, by Ahmed Al-kharusi.&nbsp;
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
