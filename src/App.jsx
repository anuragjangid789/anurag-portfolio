import Lenis from 'lenis';
import { useEffect } from 'react';
import 'lenis/dist/lenis.css';
import './App.css';

import ParallaxBackground from "./Components/Common/ParallaxBackground";
import CustomCursor from "./Components/Common/CustomCursor";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Timeline from "./Components/Timeline/Timeline";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    // Only enable Lenis virtual smooth scrolling on desktop devices with fine pointers (mouse wheel).
    // Touch/mobile devices have native hardware momentum inertia scrolling that must never be intercepted.
    const isTouchOrMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth <= 768);

    if (isTouchOrMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ParallaxBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Timeline />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
