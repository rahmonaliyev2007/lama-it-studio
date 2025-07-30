import dynamic from "next/dynamic";
import Hero from "./modules/Hero";
import TecnologiesModule from "./modules/about-us";

const Payment = dynamic(() => import("./modules/payment"));
const Projects = dynamic(() => import("./modules/Projects/Projects"));
const Questions = dynamic(() => import("./modules/Questions/Questions"));
const Contact = dynamic(() => import("./modules/Contact/Contact"));

export default function Home() {
  return (
    <>
      <Hero/>
      <TecnologiesModule/>
      <Payment/>
      <Projects/>
      <Questions/>
      <Contact/>
    </>
  );
}
