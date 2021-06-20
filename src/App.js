
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts'
import Footer from './components/Footer';
//import Recommendation from './components/Recommendation';
//import Skill from './components/Skill';
//import Particles from "react-tsparticles";
//import Particles from "react-particles-js";


function App() {
  return (
    <div className="App">
      {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 90,
	            "density": {
	                "enable": false
	            }
	        },
          "color":"#FBE8A6",
	        "size": {
	            "value": 30,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "random",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
       */}
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contacts /> 
      <Footer /> 
    </div>
  );
}

export default App;
