import plantsavenue from "../../assets/plants-avenue-img.png";
import fluxagency from "../../assets/flux-agency-img.png";
import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const projectsData = [
    {
      id: 1,
      title: "Plants Avenue - An E-commerce Website",
      desc: "A responsive e-commerce website for selling plants and gardening supplies, built with React and styled with CSS3.",
      tech: ["React", "CSS3", "JavaScript", "Vite"],
      image: plantsavenue,
      link: "https://plantsavenue.netlify.app/",
    },
    {
      id: 2,
      title: "Flux Agency - A service providing website",
      desc: "The project focuses on showcasing core services like SEO and Digital Marketing through a sleek, modern UI and optimized user flow.",
      tech: ["React", "CSS3", "Vite", "Framer Motion"],
      image: fluxagency,
      link: "https://flux-agency.netlify.app/",
    },
  ];

  return (
    <motion.section
      className="projects" id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.h2
        className="section-title"
        variants={itemVariants}
      >My Projects</motion.h2>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {projectsData.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            variants={itemVariants}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
export default Projects;
