import React from 'react'
import me from '../images/Meilun_DiFrancisco.jpeg'
import SocialMedia from './SocialMedia'
import ReadMore from './ReadMore'

const AboutMe = () => {
    return (
     <div id="about" className="container py-5" >
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img" src={me} alt="" />     
                </div>
                <div className="social-media">
                    <SocialMedia  />
                </div>      
            </div>

            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <div className="aboutme-container">
                    <h5>
                        <ReadMore>
                        Hello! I am Meilun. I am a curious person and love diving into all sorts of challenges. I love chess since I was little and I was fascinated with the fact that such a small board can hold so many tactics. Since my first job, I have been interested in manipulating different kinds of function from excel sheet to organize data and find the patterns. Now I have over 7 years of data analytic experience in fashion and financial field.   
                        With an unexpected opportunity, I went back to college to purse my Bachelor degree in 2018. With setting my eyes on goal, I broke through many obstacles as being a full-time college student, juggling between school works and maintain a part-time job to support my family.During the time period of college, my interest and curiosity led me to go further study in Mathematics to refine my analytical skills. Along the way, I found coding is just another chess game! In addition to satisfaction from solving the problems, the output of coding would also help other people. Besides the Python course from school, I taught myself HTML, CSS to develop my first webpage. Last year, I I enrolled to Grace Hopper Program from FullStack Academy to expand my knowledge in web development.
                        </ReadMore>
                    </h5>
                </div>
            </div>           
        </div>
    </div>   
    )    
}

export default AboutMe


// ' Hello! I am Meilun. I am a curious person and love diving into all sorts of challenges. I love chess since I was little and I was fascinated with the fact that such a small board can hold so many tactics. Since my first job, I have been interested in manipulating different kinds of function from excel sheet to organize data and find the patterns. Now I have over 7 years of data analytic experience in fashion and financial field.   With an unexpected opportunity, I went back to college to purse my Bachelor degree in 2018. With setting my eyes on goal, I broke through many obstacles as being a full-time college student, juggling between school works and maintain a part-time job to support my family.During the time period of college, my interest and curiosity led me to go further study in Mathematics to refine my analytical skills. Along the way, I found coding is just another chess game! In addition to satisfaction from solving the problems, the output of coding would also help other people. Besides the Python course from school, I taught myself HTML, CSS to develop my first webpage. Last year, I I enrolled to Grace Hopper Program from FullStack Academy to expand my knowledge in web development.'