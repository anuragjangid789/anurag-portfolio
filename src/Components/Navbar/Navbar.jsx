import {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =() => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>Anurag</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes/> : <FaBars/>}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>


    </nav>
  );
};

export default Navbar;