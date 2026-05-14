import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNpm, SiVite  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

function Skills() {

    const mainSkills = [
        {
            id: 1,
            name: "HTML5",
            icon: <FaHtml5 />
        },
        {
            id: 2,
            name: "CSS3",
            icon: <FaCss3Alt />
        },
        {
            id: 3,
            name: "JavaScript",
            icon: <FaJs />
        },
        {
            id: 4,
            name: "React JS",
            icon: <FaReact />
        },
        {
            id: 5,
            name: "Tailwind CSS",
            icon: <SiTailwindcss />

        },

    ]

    const toolsData = [
        { id: 1, name: "Git", icon: <FaGitAlt /> },
        { id: 2, name: "VS Code", icon: <VscVscode /> },
        { id: 3, name: "GitHub", icon: <FaGithub /> },
        { id: 4, name: "NPM", icon: <SiNpm /> },
        { id: 5, name: "Vite", icon: <SiVite /> },
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>

            <h2 className="subtitle">Tech Stack</h2>

            <div className="top-container">
                {mainSkills.map((skill) => (
                    <div className="skill-card" key={skill.id}>
                        <h1>{skill.icon}</h1>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>

            <h2 className="subtitle">Tools & Platforms</h2>


            <div className="bottom-container">
                {toolsData.map((tool) => (
                    <div className="skill-card" key={tool.id}>
                        <h1>{tool.icon}</h1>
                        <h3>{tool.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;