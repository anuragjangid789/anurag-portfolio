import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNpm, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
    const mainSkills = [
        { id: 1, name: "HTML5", icon: <FaHtml5 /> },
        { id: 2, name: "CSS3", icon: <FaCss3Alt /> },
        { id: 3, name: "JavaScript", icon: <FaJs /> },
        { id: 4, name: "React JS", icon: <FaReact /> },
        { id: 5, name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ];

    const toolsData = [
        { id: 1, name: "Git", icon: <FaGitAlt /> },
        { id: 2, name: "VS Code", icon: <VscVscode /> },
        { id: 3, name: "GitHub", icon: <FaGithub /> },
        { id: 4, name: "NPM", icon: <SiNpm /> },
        { id: 5, name: "Vite", icon: <SiVite /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.section
            className="skills"
            id="skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
        >
            <motion.h2 className="section-title" variants={itemVariants}>
                Skills
            </motion.h2>

            <motion.h2 className="subtitle" variants={itemVariants}>
                Tech Stack
            </motion.h2>

            <motion.div className="top-container" variants={containerVariants}>
                {mainSkills.map((skill) => (
                    <motion.div
                        className="skill-card"
                        key={skill.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h1>{skill.icon}</h1>
                        <h3>{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>

            <motion.h2 className="subtitle" variants={itemVariants}>
                Tools & Platforms
            </motion.h2>

            <motion.div className="bottom-container" variants={containerVariants}>
                {toolsData.map((tool) => (
                    <motion.div
                        className="skill-card"
                        key={tool.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h1>{tool.icon}</h1>
                        <h3>{tool.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

export default Skills;