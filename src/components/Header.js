import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "space-around",
            height: "90%",
            width: 800,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 600, color: "white" }}>
            A particle in a fractal potential
          </div>
          <div style={{ fontSize: 18, fontWeight: 500, color: "white" }}>
            One particle time independent wavefunctions in a Sierpinsky Carpet
            shaped potential using the finite difference method
          </div>
        </div>
      </div>
      <div
        style={{
          width: 270,
          textAlign: "right",
          alignSelf: "flex-end",
          marginBottom: 7,
          color: "white",
        }}
      >
        An instrumentalization developed by Alex Párraga Ferrer
      </div>
    </div>
  );
}
