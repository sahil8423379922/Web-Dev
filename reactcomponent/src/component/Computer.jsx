import React from "react";

export default function Computer({ o }) {
  return (
    <>
      <div className="container mt-5">
        <h1>{o.title}</h1>
        <p style={{ fontSize: "20px" }}>{o.para}</p>
      </div>
    </>
  );
}
