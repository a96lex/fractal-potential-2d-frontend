import React from "react";

export function FractalCode() {
  return (
    <>
      <div
        style={{
          background: "#f8f8f8",
          overflow: "auto",
          width: "auto",
          border: "solid gray",
          borderWidth: ".1em .1em .1em .8em",
          padding: ".2em .6em",
          borderRadius: 5,
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <pre style={{ margin: 0, lineHeight: "125%" }}>
                  {" "}
                  1{"\n"} 2{"\n"} 3{"\n"} 4{"\n"} 5{"\n"} 6{"\n"} 7{"\n"} 8
                  {"\n"} 9{"\n"}10{"\n"}11{"\n"}12{"\n"}13{"\n"}14{"\n"}15{"\n"}
                  16{"\n"}17{"\n"}18{"\n"}19{"\n"}20{"\n"}21{"\n"}22{"\n"}23
                  {"\n"}24{"\n"}25{"\n"}26{"\n"}27
                </pre>
              </td>
              <td>
                <pre style={{ margin: 0, lineHeight: "125%" }}>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    subroutine{" "}
                  </span>
                  <span style={{ color: "#000000" }}>generate_v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>r</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    implicit none
                  </span>
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    {"    "}integer
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    ::
                  </span>{" "}
                  <span style={{ color: "#000000" }}>r</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>m</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>x</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>y</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>c</span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    integer
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    intent
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>out</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    ::
                  </span>{" "}
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#000000" }}>c</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#8f5902", fontStyle: "italic" }}>
                    !constructing the V matrix
                  </span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>r</span>
                  {"\n"}
                  {"        "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>x</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  {"\n"}
                  {"            "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"                "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>m</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"                    "}
                  <span style={{ color: "#000000" }}>c</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#000000" }}>c</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  {"\n"}
                  {"                    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>x</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .gt.
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ((
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .and.
                  </span>
                  <span style={{ color: "#000000" }}>x</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .le.
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ((
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ))
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    then
                  </span>
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    {"                        "}do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>y</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  {"\n"}
                  {"                            "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>y</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .gt.
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ((
                  </span>
                  <span style={{ color: "#000000" }}>m</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .and.
                  </span>
                  <span style={{ color: "#000000" }}>y</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .le.
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ((
                  </span>
                  <span style={{ color: "#000000" }}>m</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    3
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#000000" }}>k</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ))
                  </span>{" "}
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>x</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>y</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  {"\n"}
                  {"                        "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"                    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    endif
                  </span>
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    {"                "}
                  </span>
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"            "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"        "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    print
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>c</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#4e9a06" }}>"comparisons"</span>
                  {"\n"}
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    end subroutine{" "}
                  </span>
                  <span style={{ color: "#000000" }}>generate_v</span>
                  {"\n"}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function HamiltonianCode() {
  return (
    <>
      <div
        style={{
          background: "#f8f8f8",
          overflow: "auto",
          width: "auto",
          border: "solid gray",
          borderWidth: ".1em .1em .1em .8em",
          padding: ".2em .6em",
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <pre style={{ margin: 0, lineHeight: "125%" }}>
                  {" "}
                  1{"\n"} 2{"\n"} 3{"\n"} 4{"\n"} 5{"\n"} 6{"\n"} 7{"\n"} 8
                  {"\n"} 9{"\n"}10{"\n"}11{"\n"}12{"\n"}13{"\n"}14{"\n"}15{"\n"}
                  16{"\n"}17{"\n"}18{"\n"}19{"\n"}20{"\n"}21{"\n"}22{"\n"}23
                  {"\n"}24{"\n"}25{"\n"}26{"\n"}27{"\n"}28
                </pre>
              </td>
              <td>
                <pre style={{ margin: 0, lineHeight: "125%" }}>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    subroutine{" "}
                  </span>
                  <span style={{ color: "#000000" }}>generate_H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    implicit none
                  </span>
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    {"    "}integer
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    ::
                  </span>{" "}
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>{" "}
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ),
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    double precision
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    ::
                  </span>{" "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ),
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    common
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>props</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  {"\n"}
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  {"\n"}
                  {"        "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  {"\n"}
                  {"            "}
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ((
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    *
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#000000" }}>v</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  {"\n"}
                  {"        "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  {"\n"}
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  {"\n"}
                  {"    "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  {"\n"}
                  {"        "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    then
                  </span>
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    {"            "}do{" "}
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>n</span>
                  {"\n"}
                  {"                "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .eq.
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    4
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  {"\n"}
                  {"                "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .eq.
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1.
                  </span>
                  <span style={{ color: "#204a87" }}>and</span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    .
                  </span>
                  <span style={{ color: "#204a87" }}>mod</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0.
                  </span>
                  <span style={{ color: "#204a87" }}>and</span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    .
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =-
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  {"\n"}
                  {"                "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .eq.
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1.
                  </span>
                  <span style={{ color: "#204a87" }}>and</span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    .
                  </span>
                  <span style={{ color: "#204a87" }}>mod</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0.
                  </span>
                  <span style={{ color: "#204a87" }}>and</span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    .
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =-
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  {"\n"}
                  {"                "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .eq.
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .and.
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    +
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =-
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  {"\n"}
                  {"                "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    if
                  </span>{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .eq.
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .and.
                  </span>
                  <span style={{ color: "#000000" }}>v_vector</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    -
                  </span>
                  <span style={{ color: "#000000" }}>l</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    .ne.
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>{" "}
                  <span style={{ color: "#000000" }}>H</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    (
                  </span>
                  <span style={{ color: "#000000" }}>j</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    ,
                  </span>
                  <span style={{ color: "#000000" }}>i</span>
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    )
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    =-
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    1
                  </span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    /
                  </span>
                  <span style={{ color: "#000000" }}>dx</span>
                  <span style={{ color: "#ce5c00", fontWeight: "bold" }}>
                    **
                  </span>
                  <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                    2
                  </span>
                  {"\n"}
                  {"            "}
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"        "}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    endif
                  </span>
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    {"    "}
                  </span>
                  <span style={{ color: "#000000" }}>enddo</span>
                  {"\n"}
                  {"\n"}
                  <span style={{ color: "#204a87", fontWeight: "bold" }}>
                    end subroutine{" "}
                  </span>
                  <span style={{ color: "#000000" }}>generate_H</span>
                  {"\n"}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
