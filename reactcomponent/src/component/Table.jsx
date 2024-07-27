import React from "react";

export default function Table({ nos }) {
  return (
    <>
      <h1
        style={{ marginTop: "10px", textAlign: "center", marginBottom: "10px" }}
      >
        List of Components
      </h1>

      <div className="container">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {nos.map((val, indx) => {
              return (
                <>
                  <tr>
                    <th scope="row">{indx + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.desc}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
