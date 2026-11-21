import { useState, useEffect, useRef } from "react";
import "./Home.css";
import img1 from "../../assets/IMG-1.webp";
import img2 from "../../assets/IMG-2.webp";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "../Common/MagneticButton";
import RollingText from "./RollingText";

const ROLES = [
  { top: "MERN Stack", bottom: "Developer" },
  { top: "Frontend", bottom: "Developer" },
  { top: "React.js", bottom: "Developer" },
  { top: "Full Stack", bottom: "Developer" },
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFaceHovered, setIsFaceHovered] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms for hero elements (smooth and contained)
  const faceY = useTransform(smoothProgress, [0, 1], [0, 40]);
  const auraY = useTransform(smoothProgress, [0, 1], [0, 20]);
  const textLeftY = useTransform(smoothProgress, [0, 1], [0, -45]);
  const textRightY = useTransform(smoothProgress, [0, 1], [0, -45]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0.2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3400);

    return () => clearInterval(timer);
  }, []);

  const handleFaceMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--lens-x", `${x}px`);
    e.currentTarget.style.setProperty("--lens-y", `${y}px`);
  };

  const handleFaceMouseEnter = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 860) return;
    setIsFaceHovered(true);
    handleFaceMouseMove(e);
  };

  const handleFaceMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 860) return;
    setIsFaceHovered(false);
  };

  const handleFaceTouchMove = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 860) return;
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    e.currentTarget.style.setProperty("--lens-x", `${x}px`);
    e.currentTarget.style.setProperty("--lens-y", `${y}px`);
    setIsFaceHovered(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  const centerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="hero-ref" id="home" ref={heroRef}>
      <motion.div
        className="hero-ref-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ opacity: heroOpacity }}
      >
        {/* Left Side: Hello, I'm Anurag Jangid */}
        <motion.div
          className="hero-col hero-left"
          variants={leftVariants}
          style={{ y: textLeftY }}
        >
          <span className="hero-intro-tag">Hello, I'm</span>
          <div className="hero-name-lockup">
            <h1 className="hero-name-first">
              <RollingText
                text="Anurag"
                textKey={`name-first-${roleIndex}`}
                charClassName="char-gradient"
                staggerDelay={0.032}
              />
            </h1>
            <h1 className="hero-name-last">
              <RollingText
                text="Jangid"
                textKey={`name-last-${roleIndex}`}
                charClassName="char-white"
                staggerDelay={0.032}
              />
            </h1>
          </div>

          <div className="hero-action-wrap">
            <MagneticButton strength={0.3}>
              <a href="#contact" className="hero-connect-btn">
                Connect With Me
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Center: Interactive Spotlight Circle Reveal (Only hovered circle shows background image) */}
        <motion.div className="hero-col hero-center" variants={centerVariants}>
          <motion.div
            className={`hero-face-container ${isFaceHovered ? "is-hovered" : ""}`}
            style={{ y: faceY }}
            onMouseEnter={handleFaceMouseEnter}
            onMouseMove={handleFaceMouseMove}
            onMouseLeave={handleFaceMouseLeave}
            onTouchStart={handleFaceMouseEnter}
            onTouchMove={handleFaceTouchMove}
            onTouchEnd={handleFaceMouseLeave}
          >
            {/* Constant Ambient Aura Glow */}
            <motion.div className="hero-aura-glow" style={{ y: auraY }} />

            {/* Frameless Face Spotlight Reveal */}
            <div className="hero-face-wrapper">
              {/* Real Photo: Always visible base layer */}
              <img
                src={img1}
                alt="Anurag Jangid"
                className="hero-face-img img-real"
              />

              {/* Cyborg Photo: Only visible inside the hovered circular spotlight */}
              <img
                src={img2}
                alt="Anurag Jangid Cyber"
                className="hero-face-img img-cyber"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Creative MERN Stack Developer */}
        <motion.div
          className="hero-col hero-right"
          variants={rightVariants}
          style={{ y: textRightY }}
        >
          <span className="hero-creative-tag">Creative</span>
          <div className="hero-typography-lockup">
            <div className="hero-mern-stack">
              <RollingText
                text={ROLES[roleIndex].top}
                textKey={`top-${roleIndex}`}
                charClassName="char-gradient"
                staggerDelay={0.032}
              />
            </div>
            <div className="hero-developer-word">
              <RollingText
                text={ROLES[roleIndex].bottom}
                textKey={`bottom-${roleIndex}`}
                charClassName="char-white"
                staggerDelay={0.032}
              />
            </div>
          </div>

          <div className="hero-action-wrap right-action">
            <MagneticButton strength={0.3}>
              <a href="#projects" className="hero-explore-btn">
                Explore Work
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Seamless bottom blend into next section */}
      <div className="hero-bottom-blend" aria-hidden="true" />
    </section>
  );
}

export default Hero;
