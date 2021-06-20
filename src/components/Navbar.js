import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
import SocialMedia from './SocialMedia'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="navbar-brand" >
        Meilun
        </div>
        <div className="navbar-brand">
        DiFrancisco
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"

        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portforlio" offset={-110} className="nav-link" href="#">
                portforlio
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
