import React from 'react'
import Typed from 'react-typed'
import { Link } from "react-scroll"
import Particles from "react-tsparticles";

const Header = () => {
    return (
        <div className="header-wraper">
           
            <div className="main-info">
                <canvas></canvas>
                <h1>Hi,I am Meilun! </h1>
               
                
                <div> 
                    <h2> I'm a</h2>
                    <Typed 
                    className="typed-text"
                    strings={["Full Stack Software Developer", "Backend Engineer", "Data Scientist", "Machine Learning engineer"]}
                    typeSpeed={70}
                    backSpeed={30}
                    backDelay={700}
                    loop
                    smartBackspace
                     />
                </div>
             
                <Link smooth={true} to="contact" className="btn-main-offer">contact me</Link>

            </div>            
        </div>
    )
}

export default Header
