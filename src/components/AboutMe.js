import React from 'react'
import me from '../images/Meilun_DiFrancisco.jpeg'
import SocialMedia from './SocialMedia'

const AboutMe = () => {
    return (
        <div className="container py-5" >
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={me} alt="" />
                        
                    </div>
                    <SocialMedia />    
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........Hello! I am Meilun DiFrancisco........
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
