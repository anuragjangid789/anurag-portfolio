import { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import MagneticButton from "../Common/MagneticButton";

function Footer() {
  const [time, setTime] = useState("");

  // Live India Standard Time (IST) display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className="footer-redesign">
      {/* Cosmic Nebula Aura rising from the bottom (Website Theme) */}
      <div className="footer-cosmic-glow" aria-hidden="true" />

      {/* Floating stardust cosmic particles */}
      <div className="stardust-container" aria-hidden="true">
        <span className="star-speck s1" />
        <span className="star-speck s2" />
        <span className="star-speck s3" />
        <span className="star-speck s4" />
        <span className="star-speck s5" />
        <span className="star-speck s6" />
        <span className="star-speck s7" />
        <span className="star-speck s8" />
      </div>

      <motion.div
        className="footer-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Top Centered Action Section */}
        <div className="footer-top-block">
          {/* Main Headline as per reference */}
          <motion.h2 className="footer-headline" variants={itemVariants}>
            Not just a website,<br />
            real business results
          </motion.h2>

          {/* Book a Free Call CTA Pill Button */}
          <motion.div className="footer-cta-wrap" variants={itemVariants}>
            <MagneticButton strength={0.3}>
              <a href="#contact" className="footer-call-btn">
                <span>Book a Free Call</span>
                <span className="btn-arrow-bubble" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Monumental Name Monolith spanning across bottom (ANURAG) */}
        <div className="footer-name-monolith-wrap" aria-hidden="true">
          <motion.h1
            className="footer-name-monolith"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            ANURAG
          </motion.h1>
        </div>

        {/* Bottom Details Bar */}
        <div className="footer-bottom-bar">
          {/* Left: Floating Circular Social Buttons */}
          <div className="footer-social-circles">
            <MagneticButton strength={0.25}>
              <a
                href="https://linkedin.com/in/anurag-jangid-03b5203a9"
                target="_blank"
                rel="noreferrer"
                className="social-circle-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href="https://github.com/anuragjangid789"
                target="_blank"
                rel="noreferrer"
                className="social-circle-btn"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href="mailto:anuragjangid789@gmail.com"
                className="social-circle-btn"
                title="Email Me"
                aria-label="Direct Email"
              >
                <FaEnvelope />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href="https://wa.me/918769328060"
                target="_blank"
                rel="noreferrer"
                className="social-circle-btn"
                title="WhatsApp"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp />
              </a>
            </MagneticButton>
          </div>

          {/* Center / Right Meta: Location & Local Time */}
          <div className="footer-meta-info">
            <span className="location-pill">
              <span className="live-clock-dot" />
              <span>Jaipur, India • {time || "IST"}</span>
            </span>
            <span className="copyright-text">
              © {new Date().getFullYear()} Anurag Jangid. All rights reserved.
            </span>
          </div>

          {/* Quick Back to Top */}
          <div className="footer-top-scroll">
            <MagneticButton strength={0.3}>
              <button
                type="button"
                className="scroll-top-btn"
                onClick={scrollToTop}
                title="Back to Top"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <FaArrowUp className="arrow-icon" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
