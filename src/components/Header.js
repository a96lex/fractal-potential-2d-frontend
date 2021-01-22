import React from "react";

export default function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600 }}>
          A particle in a fractal potential
        </div>
        <div style={{ fontSize: 20, fontWeight: 600 }}>
          One particle time independent wavefunctions in a Sierpinsky Carpet
          shaped potential using the finite difference method
        </div>
        <div>An instrumentalization made by Alex Párraga Ferrer</div>
      </div>
    </>
  );
}
