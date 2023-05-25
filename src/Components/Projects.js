import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecommerce from "../Assets/Ecommerce.jpg";

function Projects() {
  const skills = [
    {
      id: 1,
      image: Ecommerce,
      project: "Ecommerce",
      description:
        "E-commerce platform to sell spices. This online shop for buy a spice product under the name of Atmasampanna",
      react: "https://github.com/Annamalai-Deepak-12/projectOneFront_End",
      node: "https://github.com/Annamalai-Deepak-12/Back_end",
      demo: "https://astonishing-blancmange-b1fd4a.netlify.app/login",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 ">
          <div className="text-center">
            <h1 className="align-center">Projects </h1>
            <p className="m-3">Check out some of my works right here</p>
          </div>
          <div className="text-center"><span className="m-2">User login id : user@gmail.com</span><span className="m-2">Password : welcome4321</span></div>
          <div className="row d-flex justify-content-center">
            {skills.map(
              ({ id, image, project, description, react, node, demo }) => {
                return (
                  <div
                    class="card shadow col-lg-4 m-2  p-2"
                    style={{ width: "18rem" }}
                  >
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body   justify-content-center p-2 m-1">
                      <hr />
                      <div class="card-body   text-center p-1">
                        <strong>{project}</strong>
                      </div>
                      <div>{description}</div>
                      <div className="d-flex justify-content-center">
                        <a
                          href={react}
                          target="_blank"
                        >
                          <span className="m-1" style={{ color: "black" }}>
                            <button type="button" class="btn btn-light mb-2">
                              React
                            </button>
                          </span>
                        </a>
                        <a
                          href={node}
                          target="_blank"
                        >
                          <span className="m-1" style={{ color: "black" }}>
                            <button type="button" class="btn btn-light mb-2">
                              Node
                            </button>
                          </span>
                        </a>
                      </div>
                      <div className="d-flex justify-content-center">
                        <a
                          href={demo}
                          target="_blank"
                        >
                          <span className="m-1" style={{ color: "black" }}>
                            <button type="button" class="btn btn-dark mb-2">
                              Live-Demo
                            </button>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Projects;
