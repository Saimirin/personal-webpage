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
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <FontAwesomeIcon
                className="icon"
                icon={faFacebookSquare}
                size="2x"
              />
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <FontAwesomeIcon
                className="icon"
                icon={faGithubSquare}
                size="2x"
              />
            </div>
          </div>

          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
            </div>
          </div>

          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="circle">
              <FontAwesomeIcon
                className="icon"
                icon={faInstagramSquare}
                size="2x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
