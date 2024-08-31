import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <div class="row">
          {props.d.map((v) => {
            return (
              <div class="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={v.url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{v.name}</h5>
                    <p class="card-text">{v.desc}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
