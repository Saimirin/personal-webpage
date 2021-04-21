import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web developemnt and website....</h1>
                <Typed 
                    className="typed-text"
                    strings={["web Design", "web Developemnt", "Facebook Ads SMM"]}
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
