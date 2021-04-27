import React from "react";

const Experience = () => {
  return (
    <div id ="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021 March (2nd - 10th)</h3>
                <li>Launched an inspired Progressive WebApp to buy and sell second-handbooksin community service.</li>
                 <li>Planned on system design, integrated the full-stack connection to enable the functionary of the app.</li>
                <li>Expanded the app featureswith Google geolocation API, Google Books, Socket, Barcode Lookup API. </li>      
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021 March 16th - April 5th </h3>
                <li>Developed a mock e-commerce website to allow users purchase  products and manage  products as an admin.</li>
                <li>Planned  on schema  design, programmed backend (API routes, database query), frontend (React Components, Redux store, state management),  styled the page layout with CSS.</li>
                <li>Managed git Pull Requests and coordinated with teammates  to resolve merge  conf licts.</li>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 June - September</h3>
            <h5>One vs Many</h5>
            <li>Operated as a Backend Engineer using Python, collaborating with a team  to design and develop a mock website, that allowed users to provide donations, and have accessibility to community services. </li>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017 May - 2020 September</h3>
            <h5>Harbor Financial.INC</h5>
            <li>Organized leads on the company’s CRM, ensuring that the team can easily locate and review data.</li>
            <li>Initiated an  overhaul  of  client inf ormation on CRM  sof tware to improve communication.</li>
            <li>Monitored and maintained the company’s social media account leading to a 10%+ in client retention rate.</li>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019 October - 2019 December</h3>
            <h5>CUNY Tutor Corps </h5>
            <li>Provided math tutoring for the class and ensured every student catch up on materials.</li>
            <li>Assisted host teacher with grading homework and other essential work during class.</li>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019 June</h3>
            <h5>Queensborough Community College</h5>
            <li>Conducted data analysis using SPSS; and created  a research  poster visualizing the  statistical dif ference between  males and f emales, regarding their  level of  self-acceptance.</li>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience;
