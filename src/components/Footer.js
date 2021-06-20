import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            
          
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/meilun.choi"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <FacebookMessengerShareButton
                url={"https://www.facebook.com/meilun.choi"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookMessengerIcon className="mx-3" size={36} />
              </FacebookMessengerShareButton>

    
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/meilun-difrancisco/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>

            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Meilun DiFrancisco | ellen0816@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
