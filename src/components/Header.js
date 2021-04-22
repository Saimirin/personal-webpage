import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Hi, I am Meilun DiFrancisco, I am...</h1>
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Software Developer", "Backend Engineer", "Data Scientist", "Machine Learning engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>            
        </div>
    )
}

export default Header
