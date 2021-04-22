import React from 'react'
import me from '../Meilun_DiFrancisco.jpeg'

const AboutMe = () => {
    return (
        <div className="container py-5" >
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={me} alt="" />
                    </div>    
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
