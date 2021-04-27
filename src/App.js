
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



function App() {
  return (
    <div className="App">
      <Particles 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable:true,
                value_area:900,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
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
      <Contacts /> 
      <Footer /> 
    </div>
  );
}

export default App;
