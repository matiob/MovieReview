import React from "react";
import tmdb from "../assets/tmdb.svg";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <a href="https://www.themoviedb.org/">
        <img src={tmdb} style={{ width: "100px", height: "100px" }} />
      </a>
      <section className="footerMedia">
        <a href="https://www.linkedin.com/in/matiob/">
          {<Icon.Linkedin color="white" size={35}/>}
        </a>
        <a href="https://www.github.com/matiob/">
          {<Icon.Github color="white" size={35}/>}
        </a>
      </section>
      <p>
        &copy;<strong>matiob 2022</strong>
      </p>

    </footer>
  );
};

export default Footer;
