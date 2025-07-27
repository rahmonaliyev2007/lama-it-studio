import Hero from "./modules/Hero";
import RotatingInfoCircle from "./modules/payment";
import TecnologiesModule from "./modules/about-us";
import Projects from "./modules/Projects/Projects";
import Contact from "./modules/Contact/Contact";
import Questions from "./modules/Questions/Questions";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TecnologiesModule/>
      <RotatingInfoCircle/>
      <Projects/>
      <Questions/>
      <Contact/>
    </div>
    
  );
}
