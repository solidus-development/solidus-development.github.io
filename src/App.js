import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import BurgerMenu from './components/BurgerMenu';
import Intro from './components/Intro';
import Projects from './components/Projects';
import CTA from './components/CTA';
import About from './components/About';
import Social from './components/Social';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Navigation setMenu={setMenu} />
      <BurgerMenu menu={menu} setMenu={setMenu} />
      <Intro />
      <Projects />
      <CTA />
      <About />
      <Social />
    </div>
  );
}

export default App;
