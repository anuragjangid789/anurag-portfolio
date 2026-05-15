import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.35 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="nav-logo">
        <span>Anurag</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <motion.li variants={itemVariants}><a href="#home" onClick={toggleMenu}>Home</a></motion.li>
        <motion.li variants={itemVariants}><a href="#about" onClick={toggleMenu}>About</a></motion.li>
        <motion.li variants={itemVariants}><a href="#services" onClick={toggleMenu}>Services</a></motion.li>
        <motion.li variants={itemVariants}><a href="#skills" onClick={toggleMenu}>Skills</a></motion.li>
        <motion.li variants={itemVariants}><a href="#projects" onClick={toggleMenu}>Projects</a></motion.li>
        <motion.li variants={itemVariants}><a href="#contact" onClick={toggleMenu}>Contact</a></motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;