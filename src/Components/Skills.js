import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  const skills = [
    {
      id: 1,
      skill: "",
    },
    {
      id: 2,
      skill: "",
    },
    {
      id: 3,
      skill: "",
    },
    {
      id: 4,
      skill: "",
    },
    {
      id: 5,
      skill: "",
    },
    {
      id: 6,
      skill: "",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center align-center">
          <div className="text-center">
          <h1 className="align-center">Technical Skills </h1>
          <p className="m-3">These are the technologies I've worked with</p>
          </div>
          
          <div className="row d-flex justify-content-center">
            {skills.map(({ id, skill }) => {
              return (
                <div
                  key={id}
                  class="card col-lg-3 m-2 p-2"
                  style={{ width: "200px", height: "200px" }}
                >
                  <img src={skill} class="card-img-top" alt={id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Skills;
