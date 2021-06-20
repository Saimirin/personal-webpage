import React from "react";
import Planthopper from "../images/Planthopper.png";
import CloneSignal from "../images/CloneSignal.png";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
  // Planthopper
  const openPopupboxPlanthopper = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Planthopper} alt="" />
        <p>
          a mock e-commerce website to allow users purchase products and manage
          products as an admin,a mock e-commerce website to allow users purchase products and manage
          products as an admina mock e-commerce website to allow users purchase products and manage
          products as an admina mock e-commerce website to allow users purchase products and manage
          products as an admina mock e-commerce website to allow users purchase products and manage
          products as an admina mock e-commerce website to allow users purchase products and manage
          products as an admin

          a mock e-commerce website to allow users purchase products and manage
          products as an admina mock e-commerce website to allow users purchase products and manage
          products as an admin
        </p>
        <div>
          <a className="hyper-link" href="https://planthopper.herokuapp.com/"> click here for Webpage </a>
        </div>
        <div>
          <a className="hyper-link" href="https://github.com/GraceShopperTeamPhoenix/GraceShopper"> click here for Github </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPlanthopper = {
    titleBar: {
      enable: true,
      text: "Plant Hopper",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Clone-Signal
  const openPopupboxCloneSignal = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={CloneSignal} alt="" />
        <p>
            A demo real time chat App with React Native and FireStore.
        </p>
        <div>
          <a className="hyper-link" href="https://clone-signal-6a84d.web.app/"> click here for Webpage</a>
        </div>
        <div>
          <a className="hyper-link" href="https://github.com/Saimirin/clone-SIGNAL"> click here for Github </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCloneSignal = {
    titleBar: {
      enable: true,
      text: "Clone Signal",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  
  return (
    <div id="portforlio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
            {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxPlanthopper}
          >
            <img className="portfolio-image" src={Planthopper} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxCloneSignal}
          >
            <img className="portfolio-image" src={CloneSignal} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
           {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigPlanthopper} />
      <PopupboxContainer {...popupboxConfigCloneSignal} />    
    </div>
  );
};

export default Pofrfolio;
