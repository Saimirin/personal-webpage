
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts'
import Recommendation from './components/Recommendation';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Artical from './components/Artical';



function App() {
  return (
    <div className="App">
      <Particles 
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable:true,
                value_area:700,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 56,
                color: "#F4976C",
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Recommendation />
      <Experience />
      <Skill />
      <Portfolio />
      <Artical />
      <Contacts /> 
      <Footer /> 
    </div>
  );
}

export default App;
