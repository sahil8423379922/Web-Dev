import React from "react";

export default function Software({ nos }) {
  return (
    <>
      <div className="container mt-3">
        <h1>What is Software?</h1>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolorum optio nisi quibusdam atque odit, ratione officiis! Nobis
          magni, quaerat consectetur necessitatibus animi ea repellat, facere
          dignissimos ullam sunt quisquam!
        </p>
      </div>

      <div>
        {nos.map((value) => {
          return (
            <>
              <h1>{value.name}</h1>
              <p>{value.desc}</p>
            </>
          );
        })}
      </div>
    </>
  );
}
