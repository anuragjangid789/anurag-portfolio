import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./ParallaxBackground.css";

const ParallaxBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
        ("ontouchstart" in window && window.innerWidth <= 1024)
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // Smooth spring physics for parallax scroll values
  const smoothScroll = useSpring(scrollY, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Layer 1: Deep slow-moving glowing orbs (0.10x to 0.15x scroll)
  const yOrb1 = useTransform(smoothScroll, (v) => v * 0.12);
  const yOrb2 = useTransform(smoothScroll, (v) => -v * 0.10);
  const yOrb3 = useTransform(smoothScroll, (v) => v * 0.15);

  // Layer 2: Mid-speed floating cyber geometric nodes (0.22x to 0.28x scroll)
  const yNodes1 = useTransform(smoothScroll, (v) => v * 0.25);
  const yNodes2 = useTransform(smoothScroll, (v) => -v * 0.20);

  // Layer 3: Faster foreground floating particles (0.38x scroll)
  const yStars = useTransform(smoothScroll, (v) => v * 0.38);

  // Disable GPU-heavy moving blur layers on mobile screens to preserve 60/120fps scrolling
  if (isMobile) {
    return null;
  }

  return (
    <div className="parallax-bg-root" aria-hidden="true">
      {/* Deep Layer: Ambient Energy Nebulas */}
      <motion.div
        className="parallax-orb orb-purple-large"
        style={{ y: yOrb1 }}
      />
      <motion.div
        className="parallax-orb orb-cyan-large"
        style={{ y: yOrb2 }}
      />
      <motion.div
        className="parallax-orb orb-violet-mid"
        style={{ y: yOrb3 }}
      />

      {/* Mid Layer: Floating Cyber Geometry & Symbols */}
      <motion.div className="parallax-node-layer" style={{ y: yNodes1 }}>
        <span className="floating-symbol symbol-bracket-1">&lt;/&gt;</span>
        <span className="floating-symbol symbol-dot-1"></span>
        <span className="floating-symbol symbol-cross-1">+</span>
        <span className="floating-symbol symbol-circle-1"></span>
      </motion.div>

      <motion.div className="parallax-node-layer layer-2" style={{ y: yNodes2 }}>
        <span className="floating-symbol symbol-bracket-2">&#123; &#125;</span>
        <span className="floating-symbol symbol-cross-2">+</span>
        <span className="floating-symbol symbol-dot-2"></span>
      </motion.div>

      {/* Foreground Layer: Subtle Drifting Dust & Stars */}
      <motion.div className="parallax-dust-layer" style={{ y: yStars }}>
        <div className="dust-particle p1" />
        <div className="dust-particle p2" />
        <div className="dust-particle p3" />
        <div className="dust-particle p4" />
        <div className="dust-particle p5" />
        <div className="dust-particle p6" />
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;
