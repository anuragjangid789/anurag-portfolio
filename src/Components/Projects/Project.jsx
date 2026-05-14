import plantsavenue from "../../assets/plants-avenue-img.png";
import fluxagency from "../../assets/flux-agency-img.png";
import "./Projects.css";

function Projects() {
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
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
