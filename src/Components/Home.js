import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Profile from "../Assets/Profile.jpg"

library.add(faGithub, faLinkedin,faEnvelope);

function Home() {
  return (
    <div className="container-fluid" id="Home">
      <div className="row">
        <div className="col-lg-12 mt-5"></div>
        <div className="col-lg-8  mt-5">
          <div className="row">
            <h1 type="button " class="labelInput p-5">
              Hi i'm Annamalai Deepak
            </h1>
            <h2 className="mt-3 ps-5">Front-End Developer</h2>
            <h3 className="mt-3 ps-5">
              The goal of working on a project that solves problems.
            </h3>
            <br />
            <h3 className="mt-3 ps-5">
              {" "}
              creating a new and strong web application.{" "}
            </h3>
            <div className="col-lg-8">
              <div className="row">

              </div>
             
            <div className="col-lg-2">
                <a
                  href="https://github.com/Annamalai-Deepak-12"
                  target="_blank"
                >
                  <span className="fs-1 m-5 git_color ">
                    <FontAwesomeIcon icon={faGithub} inverse />
                  </span>
                </a>
              </div>

              <div className="col-lg-2">
                <a
                  href="https://www.linkedin.com/in/annamalai-deepak-ramasamy-478391255/"
                  target="_blank"
                >
                  <span className="fs-1 m-5 ">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </div>

              <div className="col-lg-2">
                <a
                  href="https://drive.google.com/file/d/1Vu1oRpx6FAqy9SP9K_bA9wraFa5i_uBl/view?usp=share_link"
                  target="_blank"
                >
                  <span className="fs-1 m-5 " style={{ color: "black" }}>
                    <button type="button" class="btn btn-dark mb-2">
                      Resume 
                    </button>
                  </span>
                </a>
              </div>
              <div className="col-lg-2">
                <a
                  href="mailto:annamalaideepakr@gmail.com"
                  target="_blank"
                >
                  <span className="fs-1 m-5 " style={{ color: "black" }}>
                    <button type="button" class="btn btn-dark mb-2">
                      Email <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
                    </button>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-5 pt-5">
          <img 
            className="container-fluid"
            src={Profile}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;

{
  /* <header class="masthead  text-dark text-center">
<div class="container d-flex align-items-center flex-column">

    <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..."/>

    <h1 class="masthead-heading text-uppercase mb-0"><span>FRONT-END DEVELOPER</span></h1>
    <p>Hi, I'm Annamalai Deepak. A Front-end React Developer based in Warsaw, Poland.</p>

    <div>
      <div className="fs-2">
        <a href="https://github.com/Annamalai-Deepak-12" target="_blank">
        <span><FontAwesomeIcon icon={faEnvelope} /></span>
        </a>
      </div>
    </div>
    <div>
      <div className="fs-2">
        <a href="https://github.com/Annamalai-Deepak-12" target="_blank">
        <span><FontAwesomeIcon icon={faEnvelope} /></span>
        </a>
      </div>
    </div>

    <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
</div>
</header> */
}

{
  /* <div className="container ">
<div className="col-lg-12">
  <div className="row">
    <div className="col-lg-6"></div>
  <p type="button" class="labelInput">Hi i'm Gokulakrishnan J</p>
  <div className="col-lg-6">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
  </div>
  </div>
  
</div>
</div> */
}
