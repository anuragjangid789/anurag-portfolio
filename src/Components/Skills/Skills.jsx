import { useState, useRef } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBolt,
  FaPalette,
  FaMobileAlt,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNpm,
  SiVite,
  SiFramer,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All",
  "Core & Frameworks",
  "Styling & Motion",
  "Build Tools & Workflow",
];

const SKILLS_DATA = [
  {
    id: 1,
    name: "React 19 / React.js",
    category: "Core & Frameworks",
    level: 95,
    tag: "Core Focus",
    desc: "Hooks, Component Architecture, Virtual DOM, SPA State Flow",
    icon: <FaReact />,
    accent: "#00d8ff",
  },
  {
    id: 2,
    name: "JavaScript (ES6+)",
    category: "Core & Frameworks",
    level: 92,
    tag: "Core Focus",
    desc: "Async/Await, Closures, Event Loop, Modern DOM APIs",
    icon: <FaJs />,
    accent: "#f7df1e",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    category: "Styling & Motion",
    level: 94,
    tag: "Advanced",
    desc: "Responsive Design Systems, Custom Themes, Utility Patterns",
    icon: <SiTailwindcss />,
    accent: "#38bdf8",
  },
  {
    id: 4,
    name: "Framer Motion",
    category: "Styling & Motion",
    level: 90,
    tag: "Specialist",
    desc: "60fps Spring Physics, Scroll Parallax, Gesture Animation",
    icon: <SiFramer />,
    accent: "#a855f7",
  },
  {
    id: 5,
    name: "CSS3 & Modern Layouts",
    category: "Styling & Motion",
    level: 95,
    tag: "Expert",
    desc: "CSS Grid, Flexbox, Glassmorphism, Micro-animations",
    icon: <FaCss3Alt />,
    accent: "#264de4",
  },
  {
    id: 6,
    name: "HTML5 & Accessibility",
    category: "Core & Frameworks",
    level: 96,
    tag: "Expert",
    desc: "Semantic Structure, Web Accessibility (a11y), SEO Foundations",
    icon: <FaHtml5 />,
    accent: "#e34f26",
  },
  {
    id: 7,
    name: "Vite Bundler",
    category: "Build Tools & Workflow",
    level: 90,
    tag: "Build Core",
    desc: "Lightning HMR, Production Rollup Builds, Modern Tooling",
    icon: <SiVite />,
    accent: "#bd34fe",
  },
  {
    id: 8,
    name: "Git & GitHub",
    category: "Build Tools & Workflow",
    level: 88,
    tag: "Daily Driver",
    desc: "Version Control, Branching Strategy, Pull Requests, Workflows",
    icon: <FaGitAlt />,
    accent: "#f05032",
  },
  {
    id: 9,
    name: "TypeScript Essentials",
    category: "Core & Frameworks",
    level: 84,
    tag: "Type Safety",
    desc: "Type Interfaces, Generics, Scalable Clean Codebases",
    icon: <SiTypescript />,
    accent: "#3178c6",
  },
  {
    id: 10,
    name: "Redux & State",
    category: "Core & Frameworks",
    level: 86,
    tag: "Architecture",
    desc: "Context API, Redux Toolkit, Centralized State Flow",
    icon: <SiRedux />,
    accent: "#764abc",
  },
  {
    id: 11,
    name: "VS Code & DevTools",
    category: "Build Tools & Workflow",
    level: 92,
    tag: "Daily Driver",
    desc: "Performance Audits, Breakpoint Debugging, Network Profiling",
    icon: <VscVscode />,
    accent: "#007acc",
  },
  {
    id: 12,
    name: "NPM & Ecosystem",
    category: "Build Tools & Workflow",
    level: 88,
    tag: "Tooling",
    desc: "Dependency Management, Build Scripts, Package Modernization",
    icon: <SiNpm />,
    accent: "#cb3837",
  },
];

const FRONTEND_PILLARS = [
  {
    id: 1,
    title: "High Performance & Web Vitals",
    icon: <FaBolt />,
    accent: "#f59e0b",
    points: [
      "Sub-second First Contentful Paint (FCP)",
      "Zero cumulative layout shift (CLS)",
      "Code-splitting & asset lazy loading",
    ],
  },
  {
    id: 2,
    title: "Fluid UI/UX & Motion Design",
    icon: <FaPalette />,
    accent: "#06b6d4",
    points: [
      "Buttery 60fps gesture micro-interactions",
      "Modern cyber & glassmorphic styling",
      "Tactile hover feedback & spring physics",
    ],
  },
  {
    id: 3,
    title: "Responsive Cross-Device Flow",
    icon: <FaMobileAlt />,
    accent: "#a855f7",
    points: [
      "Adaptive layouts from 320px to 4K displays",
      "Cross-browser tested (Chrome, Safari, Firefox)",
      "Touch-friendly gestures & tap targets",
    ],
  },
  {
    id: 4,
    title: "Clean Component Architecture",
    icon: <FaCode />,
    accent: "#10b981",
    points: [
      "Atomic, modular & reusable components",
      "Unidirectional clean state synchronization",
      "Self-documenting, maintainable code",
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const yParallax = useTransform(smoothProgress, [0, 1], [-20, 20]);

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="skills-redesign" id="skills" ref={sectionRef}>
      {/* Background ambient lighting */}
      <div className="skills-ambient-glow" aria-hidden="true" />

      <div className="skills-shell">
        {/* Header */}
        <div className="skills-header">
          <motion.div
            className="skills-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-code">&lt;/&gt;</span>
            <span>Frontend Tech Arsenal</span>
          </motion.div>

          <motion.h2
            className="skills-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Frontend Skills <span className="gradient-accent">&</span> Stack
          </motion.h2>

          <motion.p
            className="skills-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Engineered with modern frontend standards: blazing-fast load speeds,
            dynamic micro-animations, and responsive user interfaces.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            className="category-filter-bar"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? SKILLS_DATA.length
                  : SKILLS_DATA.filter((s) => s.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="cat-count">{count}</span>
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activePillGlow"
                      className="active-pill-background"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Grid with Animated Layout Transitions */}
        <motion.div
          layout
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{ y: yParallax }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.id}
                className="skill-card-modern"
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                {/* Top: Icon + Brand Accent + Badge */}
                <div className="card-top">
                  <div
                    className="skill-icon-bubble"
                    style={{
                      color: skill.accent,
                      background: `${skill.accent}15`,
                      borderColor: `${skill.accent}40`,
                    }}
                  >
                    {skill.icon}
                  </div>

                  <span
                    className="skill-tag-badge"
                    style={{
                      color: skill.accent,
                      borderColor: `${skill.accent}30`,
                      background: `${skill.accent}10`,
                    }}
                  >
                    {skill.tag}
                  </span>
                </div>

                {/* Skill Name & Description */}
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.desc}</p>

                {/* Bottom: Proficiency Bar */}
                <div className="skill-fluency-wrap">
                  <div className="fluency-meta">
                    <span className="fluency-label">Proficiency</span>
                    <span className="fluency-value">{skill.level}%</span>
                  </div>
                  <div className="fluency-track">
                    <motion.div
                      className="fluency-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        background: `linear-gradient(90deg, ${skill.accent}aa, ${skill.accent})`,
                        boxShadow: `0 0 10px ${skill.accent}60`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Frontend Engineering Pillars Bento */}
        <div className="pillars-wrapper">
          <div className="pillars-heading-wrap">
            <h3 className="pillars-title">Frontend Engineering Philosophy</h3>
            <p className="pillars-sub">
              How I craft production-ready client experiences that scale seamlessly.
            </p>
          </div>

          <div className="pillars-grid">
            {FRONTEND_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.id}
                className="pillar-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: pillar.id * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="pillar-icon-wrap"
                  style={{
                    color: pillar.accent,
                    background: `${pillar.accent}15`,
                    borderColor: `${pillar.accent}35`,
                  }}
                >
                  {pillar.icon}
                </div>

                <h4 className="pillar-card-title">{pillar.title}</h4>

                <ul className="pillar-points">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="pillar-point-item">
                      <FaCheckCircle className="point-check-icon" style={{ color: pillar.accent }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
