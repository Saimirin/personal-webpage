import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
import SocialMedia from './SocialMedia'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Logo
        </a>
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
              <Link smooth={true} to="about" className="nav-link" href="#">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item active">
              <Link smooth={true} to="skill" className="nav-link" href="#">
                Skill 
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portforlio" className="nav-link" href="#">
                portforlio
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="artical" className="nav-link" href="#">
                artical
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link" href="#">
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
