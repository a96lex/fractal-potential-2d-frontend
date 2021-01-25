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

export function SchroedingerCode() {
  return (
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
                1{"\n"} 2{"\n"} 3{"\n"} 4{"\n"} 5{"\n"} 6{"\n"} 7{"\n"} 8{"\n"}{" "}
                9{"\n"}10{"\n"}11{"\n"}12{"\n"}13{"\n"}14{"\n"}15{"\n"}16{"\n"}
                17{"\n"}18{"\n"}19{"\n"}20{"\n"}21{"\n"}22{"\n"}23{"\n"}24{"\n"}
                25{"\n"}26{"\n"}27{"\n"}28{"\n"}29{"\n"}30{"\n"}31{"\n"}32{"\n"}
                33{"\n"}34{"\n"}35{"\n"}36{"\n"}37{"\n"}38{"\n"}39{"\n"}40{"\n"}
                41{"\n"}42{"\n"}43{"\n"}44{"\n"}45{"\n"}46{"\n"}47{"\n"}48{"\n"}
                49{"\n"}50{"\n"}51
              </pre>
            </td>
            <td>
              <pre style={{ margin: 0, lineHeight: "125%" }}>
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  import
                </span>{" "}
                <span style={{ color: "#000000" }}>sys</span>
                {"\n"}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  import
                </span>{" "}
                <span style={{ color: "#000000" }}>numpy</span>{" "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>as</span>{" "}
                <span style={{ color: "#000000" }}>np</span>
                {"\n"}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  import
                </span>{" "}
                <span style={{ color: "#000000" }}>matplotlib.pyplot</span>{" "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>as</span>{" "}
                <span style={{ color: "#000000" }}>plt</span>
                {"\n"}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  from
                </span>{" "}
                <span style={{ color: "#000000" }}>
                  mpl_toolkits.axes_grid1
                </span>{" "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  import
                </span>{" "}
                <span style={{ color: "#000000" }}>make_axes_locatable</span>
                {"\n"}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  import
                </span>{" "}
                <span style={{ color: "#000000" }}>fractal</span>
                {"\n"}
                {"\n"}
                {"\n"}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  for
                </span>{" "}
                <span style={{ color: "#000000" }}>r</span>{" "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>in</span>{" "}
                <span style={{ color: "#204a87" }}>range</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>1</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>5</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>):</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>l</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>3</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>**</span>{" "}
                <span style={{ color: "#000000" }}>r</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>n</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>l</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>**</span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>2</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>Hamiltonian</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>fractal</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>sierpinsky_hamiltonian</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>r</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>l</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>n</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>e_values</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>e_vec</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>np</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>linalg</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>eig</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>Hamiltonian</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>idx</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>e_values</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>argsort</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ()[::
                </span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>-</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>1</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>e_values</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>e_values</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>[</span>
                <span style={{ color: "#000000" }}>idx</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>e_vec</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>e_vec</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  [:,
                </span>{" "}
                <span style={{ color: "#000000" }}>idx</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>]</span>
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>f</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#204a87" }}>open</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>"./assets/"</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>r</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>"/"</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>r</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>".dat"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#4e9a06" }}>"w"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  for
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>{" "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>in</span>{" "}
                <span style={{ color: "#204a87" }}>range</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>n</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>):</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>f</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>write</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>e_values</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>[</span>
                <span style={{ color: "#000000" }}>i</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ])
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>"\n"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#000000" }}>f</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>close</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>()</span>
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  for
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>{" "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>in</span>{" "}
                <span style={{ color: "#204a87" }}>range</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#204a87" }}>int</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>n</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )):
                </span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>figi</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>axi</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>plt</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>subplots</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>1</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>1</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>plot</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>plt</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>imshow</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>np</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>transpose</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#204a87" }}>pow</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>np</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>absolute</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>e_vec</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  [:,
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>]</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>reshape</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>l</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>l</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )),
                </span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>2</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )),
                </span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>cmap</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#4e9a06" }}>"magma"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>interpolation</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#4e9a06" }}>"gaussian"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>plt</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>setp</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>xticks</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  [],
                </span>{" "}
                <span style={{ color: "#000000" }}>yticks</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  [])
                </span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>divider</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>make_axes_locatable</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>cax</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>divider</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>append_axes</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>"right"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>size</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#4e9a06" }}>"3%"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>pad</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                  0.1
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>cbar</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>{" "}
                <span style={{ color: "#000000" }}>figi</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>colorbar</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>plot</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>ax</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>extend</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#4e9a06" }}>"both"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>cax</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#000000" }}>cax</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>cbar</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>minorticks_on</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>()</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>cbar</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>ax</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>tick_params</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>labelsize</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>5</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  ,
                </span>{" "}
                <span style={{ color: "#000000" }}>pad</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>
                  0.1
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"\n"}
                {"        "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  if
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>==</span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>0</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>:</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>set_title</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>
                  "The ground excited state"
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>{" "}
                <span style={{ color: "#000000" }}>fontsize</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>12</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  elif
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>==</span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>1</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>:</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>set_title</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>
                  "The 1$^{"{"}st{"}"}$ excited state"
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>{" "}
                <span style={{ color: "#000000" }}>fontsize</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>12</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  elif
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>==</span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>2</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>:</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>set_title</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>
                  "The 2$^{"{"}nd{"}"}$ excited state"
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>{" "}
                <span style={{ color: "#000000" }}>fontsize</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>12</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  elif
                </span>{" "}
                <span style={{ color: "#000000" }}>i</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>==</span>{" "}
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>3</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>:</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>set_title</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>
                  "The 3$^{"{"}rd{"}"}$ excited state"
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>{" "}
                <span style={{ color: "#000000" }}>fontsize</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>12</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#204a87", fontWeight: "bold" }}>
                  else
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>:</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#000000" }}>axi</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>set_title</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>i</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>
                  "$^{"{"}th{"}"}$ excited state"
                </span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>,</span>{" "}
                <span style={{ color: "#000000" }}>fontsize</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>=</span>
                <span style={{ color: "#0000cf", fontWeight: "bold" }}>12</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>plt</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>savefig</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#4e9a06" }}>"./assets/"</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>r</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>"/"</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>r</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>"_"</span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#204a87" }}>str</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>(</span>
                <span style={{ color: "#000000" }}>i</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  )
                </span>{" "}
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>+</span>{" "}
                <span style={{ color: "#4e9a06" }}>".png"</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#000000" }}>plt</span>
                <span style={{ color: "#ce5c00", fontWeight: "bold" }}>.</span>
                <span style={{ color: "#000000" }}>close</span>
                <span style={{ color: "#000000", fontWeight: "bold" }}>()</span>
                {"\n"}
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
