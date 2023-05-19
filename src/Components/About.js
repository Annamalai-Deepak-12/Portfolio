import React from "react";
import Wallpaper from "../Assets/Wallpaper.png";

function About() {
  return (
    <div
      className=" container mt-5 mb-5  justify-content-center"
      id="navbarabout"
    >
      <div>
        <h1 className="m-4 px-5 text-center">About</h1>
      </div>
      <div className="col-lg-12 mb-5 ">
        <div className="row">
          <div className="col-lg-6 p-3">
            <img className="container-fluid mt-5 p-3 " src={Wallpaper} style={{borderRadius:"50%"}} />
          </div>
          <div className="col-lg-6">
            <h4 className="mt-5  pt-3">
              A dedicated Full stack web Developer based in Warsaw Poland📍
            </h4>
            <p style={{ fontSize: "20px" }} className="mt-5 mb-3 pt-3">
              As a Junior Full Stack Developer, I am excited to embark on my
              journey in the world of web development.I have acquired a strong
              foundation in front-end and back-end development. I am proficient
              in HTML, CSS, and JavaScript for building responsive and
              user-friendly interfaces. I also have experience with React.js,
              which allows me to create dynamic and interactive web
              applications. On the server side, I have worked extensively with
              Node.js and Express.js to develop robust APIs and handle data
              manipulation. I am comfortable working with NoSQL databases like
              MongoDB to store and retrieve data efficiently. Additionally, I
              have knowledge of RESTful principles and understand the importance
              of clean code and scalability.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
