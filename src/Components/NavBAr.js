import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faXmark);

function NavBAr() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
      name : "home"
    },
    {
      id: 2,
      link: "About",
      name : "about"
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light px-4">
      <div>
        <h1
          className="navbar-brand fs-1"
          href="#"
          style={{ cursor: "pointer" }}
        >
          Deepak
        </h1>
      </div>
      <div className="fs-2  navbar">
        <div
          onClick={() => setNav(!nav)}
          className="fs-2  navbar-toggler"
          style={{ cursor: "pointer" }}
        >
          {!nav ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>

        {nav && (
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {links.map(({ id, link, name}) => {
              return (
                <li
                  key={id}
                  class="nav-item active px-4 fs-5"
                  style={{ cursor: "pointer" }}
                >
                  <a class="nav-link" href={`#navbar${name}`}>
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                class="nav-item active px-4 fs-5"
                style={{ cursor: "pointer" }}
              >
                <a class="nav-link" href="#">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBAr;
