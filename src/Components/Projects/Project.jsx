import { useRef } from "react";
import plantsavenue from "../../assets/plants-avenue-img.png";
import fluxagency from "../../assets/flux-agency-img.png";
import "./Projects.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import MagneticButton from "../Common/MagneticButton";

const projectsData = [
  {
    id: 1,
    title: "Plants Avenue",
    subtitle: "E-Commerce Plant Haven",
    desc: "A responsive e-commerce web platform for selling plants and botanical supplies. Features dynamic catalog filtering, cart interactions, and high-performance UI components.",
    tech: ["React 19", "Vite", "JavaScript", "CSS3 Glassmorphism"],
    image: plantsavenue,
    liveLink: "https://plantsavenue.netlify.app/",
    githubLink: "https://github.com/",
  },
  {
    id: 2,
    title: "Flux Agency",
    subtitle: "Creative Digital Services Agency",
    desc: "A sleek modern agency portfolio showcasing core services like SEO, Web Design, and Marketing through interactive animations and optimized conversion funnels.",
    tech: ["React", "Framer Motion", "Vite", "Modern CSS"],
    image: fluxagency,
    liveLink: "https://flux-agency.netlify.app/",
    githubLink: "https://github.com/",
  },
];

function ProjectCard({ project, itemVariants }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const imgY = useTransform(smoothProgress, [0, 1], [-22, 22]);

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="project-image-wrapper">
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-img"
          style={{ y: imgY, scale: 1.12 }}
          whileHover={{ scale: 1.18 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="project-image-gradient"></div>

        <div className="project-hover-actions">
          <MagneticButton strength={0.25}>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn live-btn"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </MagneticButton>
        </div>
      </div>

      <div className="project-info">
        <div className="project-meta">
          <span className="project-sub">{project.subtitle}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="project-tech">
          {project.tech.map((tag, index) => (
            <span key={index} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="projects"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="projects-header">
        <motion.h2 className="section-title" variants={itemVariants}>
          Featured <span className="gradient-accent">Projects</span>
        </motion.h2>
        <motion.p className="projects-subtitle" variants={itemVariants}>
          Real-world case studies built with a focus on aesthetics, smooth micro-interactions, and high performance.
        </motion.p>
      </div>

      <motion.div className="project-grid" variants={containerVariants}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            itemVariants={itemVariants}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
