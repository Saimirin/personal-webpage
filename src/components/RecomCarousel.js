import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kostas from "../images/Kostas_Stroumbakis.png"
import stephen from "../images/Stephen_Levin.png"


const RecomCarousel = () => {

    return (
        <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={kostas} alt="Kostas Stroumbakis" />
        <div className="myCarousel">
          <h3>Kostas Stroumbakis</h3>
          <p>" Meilun is blah blah blah blah blah blah blah blah blah blah blah blah blah ........" </p> <a href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=1537274">learn more</a>
        </div>
      </>
      <>
        <img src={stephen} alt="ks" />
        <div className="myCarousel">
          <h3>Stephen Levine</h3>
          <p>" Meilun is also blah blah blah blah blah blahblah blah blahblah blblah blah....."</p> <a href="https://www.linkedin.com/in/harborfinancialinc/">learn more</a>
          
        </div>
      </>
    </Carousel>
    )
}

export default RecomCarousel
