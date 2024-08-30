import React from "react";

export default function Card({ d }) {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={d[0].url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{d[0].name}</h5>
                <p class="card-text">{d[0].desc}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img src={d[1].url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{d[1].name}</h5>
                <p class="card-text">{d[1].desc}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={d[2].url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{d[2].name}</h5>
                <p class="card-text">{d[2].desc}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
