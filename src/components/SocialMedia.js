import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
      <div className="d-flex justify-content-center">
         <div className="col-md-3 col-sm-6">
            <div className="circle">
              <a href="https://www.facebook.com/meilun.choi/"><FontAwesomeIcon
                className="icon"
                icon={faFacebookSquare}
                size="2x"
              /></a>              
            </div>
         </div>  
          
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <a href="https://github.com/Saimirin">
                <FontAwesomeIcon
                  className="icon"
                  icon={faGithubSquare}
                  size="2x"
                />
              </a>
              
            </div>
          </div>

          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <a href="https://www.linkedin.com/in/meilun-difrancisco/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
              </a>
             
            </div>
          </div>

          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <a href="https://www.instagram.com/meilunchoi/">
                <FontAwesomeIcon
                  className="icon"
                  icon={faInstagramSquare}
                  size="2x"
                />
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
  );
};

export default SocialMedia;
