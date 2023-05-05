import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const skills = [
    {
      id: 1,
      skill: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      skill: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      skill: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      skill: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      skill: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      skill: "https://picsum.photos/200/300",
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
          
          <div className="row d-flex justify-content-center">
            {skills.map(({ id, skill }) => {
              return (
                <div class="card col-lg-4 m-2  p-2" style={{width: "18rem"}}>
                  <img src="..." class="card-img-top" alt="..." />
                  
                  <hr/>
                  <div class="card-body  d-flex justify-content-center">
                  <a href="https://drive.google.com/file/d/1Vu1oRpx6FAqy9SP9K_bA9wraFa5i_uBl/view?usp=share_link" target="_blank">
        <span className="m-1" style={{color:"black"}}><button type="button" class="btn btn-dark mb-2">GIT link</button></span>
        </a>
                    
        <a href="https://drive.google.com/file/d/1Vu1oRpx6FAqy9SP9K_bA9wraFa5i_uBl/view?usp=share_link" target="_blank">
        <span className="m-1" style={{color:"black"}}><button type="button" class="btn btn-dark mb-2">Live-Demo</button></span>
        </a>
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

export default Projects;

