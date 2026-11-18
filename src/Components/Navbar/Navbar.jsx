import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import './Navbar.css';
import { motion } from "framer-motion";
import MagneticButton from "../Common/MagneticButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="navbar-wrapper">
      <motion.nav 
        className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="nav-logo">
          <a href="#home">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Anurag</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <motion.li variants={itemVariants}><a href="#home" onClick={toggleMenu}>Home</a></motion.li>
          <motion.li variants={itemVariants}><a href="#about" onClick={toggleMenu}>About</a></motion.li>
          <motion.li variants={itemVariants}><a href="#timeline" onClick={toggleMenu}>Experience</a></motion.li>
          <motion.li variants={itemVariants}><a href="#skills" onClick={toggleMenu}>Skills</a></motion.li>
          <motion.li variants={itemVariants}><a href="#projects" onClick={toggleMenu}>Projects</a></motion.li>
          <motion.li variants={itemVariants}><a href="#contact" onClick={toggleMenu}>Contact</a></motion.li>
          <li className="mobile-resume-li">
            <a 
              href="#contact" 
              className="mobile-resume-btn"
              onClick={toggleMenu}
            >
              <FaFileDownload className="resume-icon" />
              <span>Resume</span>
            </a>
          </li>
        </ul>

        <div className="nav-action">
          <MagneticButton strength={0.25}>
            <a 
              href="#contact" 
              className="nav-resume-btn"
            >
              <FaFileDownload className="resume-icon" />
              <span>Resume</span>
            </a>
          </MagneticButton>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
