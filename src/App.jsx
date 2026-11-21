import Lenis from 'lenis';
import { useEffect } from 'react';
import 'lenis/dist/lenis.css';
import './App.css';

import ParallaxBackground from "./Components/Common/ParallaxBackground";
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
    // Force browser to always return to Home page (top) on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Only enable Lenis virtual smooth scrolling on desktop devices with fine pointers (mouse wheel).
    // Touch/mobile devices have native hardware momentum inertia scrolling that must never be intercepted.
    const isTouchOrMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth <= 768);

    if (isTouchOrMobile) {
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.scrollTo(0, { immediate: true });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ParallaxBackground />
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
