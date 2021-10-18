import React from "react";
// import logo from src file
import geo_bee from "../Images/geo_bee.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"> 
      {/* INSERT LOGO HERE */}
        <img src={geo_bee} alt="" /></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home <span class="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="#">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
