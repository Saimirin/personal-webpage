
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
import Particles from "react-tsparticles";


function App() {
  return (
    <div className="App">
      
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
