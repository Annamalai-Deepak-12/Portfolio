import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Html from "../Assets/Html.png"
import Css from "../Assets/Css.png"
import Bootstrap from "../Assets//Bootstrap.png"
import Js from "../Assets/Js.png"
import _React from "../Assets/_React.png"
import Redux from "../Assets/Redux.png"
import Mongodb from "../Assets/Mongodb.png"
import Mysql from "../Assets/Mysql.png"
import Nodejs from "../Assets/Nodejs.png"
import Express from "../Assets/Expressjs.png"


function Skills() {
  const skills = [
    {
      id: 1,
      skill: Html,
    },
    {
      id: 2,
      skill: Css,
    },
    {
      id: 3,
      skill: Bootstrap,
    },
    {
      id: 4,
      skill: Js,
    },
    {
      id: 5,
      skill: _React,
    },
    {
      id: 6,
      skill: Redux,
    },
    {
      id: 7,
      skill: Mongodb,
    },
    {
      id: 8,
      skill: Mysql,
    },
    {
      id: 9,
      skill: Nodejs,
    },
    {
      id: 9,
      skill: Express,
    }
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
                  class="card col-lg-3 m-2 p-2 text-center align-center justify-content-center position-relative"
                  style={{ width: "200px", height: "200px" }}
                >
                  <div className="justify-content-center position-absolute top-50 start-50 translate-middle">
                  <img  src={skill} className="card-img-top" alt={id} style={{ width: "150px", height: "150px" }} />
                  </div>
                  
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
