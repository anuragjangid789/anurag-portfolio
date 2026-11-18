import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import "./Timeline.css";

const milestones = [
  {
    id: 1,
    role: "Frontend Developer & UI Specialist",
    organization: "Independent & Open Source",
    period: "2024 - Present",
    type: "work",
    icon: <FaRocket />,
    description:
      "Architecting interactive, high-speed single page applications using React, Vite, Framer Motion, and Tailwind. Obsessed with micro-interactions, responsive fluidity, and buttery 60fps animations.",
    skills: ["React 19", "Vite", "Framer Motion", "Lenis", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    organization: "Client Projects & Creative Studios",
    period: "2023 - 2024",
    type: "work",
    icon: <FaBriefcase />,
    description:
      "Delivered production-ready landing pages and web apps including Plants Avenue and Flux Agency. Elevated conversion rates through streamlined user flows and polished responsive interfaces.",
    skills: ["React", "JavaScript (ES6+)", "UI/UX Design", "Performance"],
  },
  {
    id: 3,
    role: "Full-Stack Project Development",
    organization: "Self-Directed Engineering",
    period: "2022 - 2023",
    type: "project",
    icon: <FaCode />,
    description:
      "Built and deployed scalable web projects experimenting with state management, RESTful APIs, CSS3 design systems, and component architecture.",
    skills: ["JavaScript", "HTML5/CSS3", "REST APIs", "Git/GitHub"],
  },
  {
    id: 4,
    role: "Computer Science & Engineering",
    organization: "Higher Education",
    period: "2020 - 2024",
    type: "education",
    icon: <FaGraduationCap />,
    description:
      "Deepened foundational knowledge in data structures, algorithms, object-oriented design, web technologies, and software engineering methodologies.",
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Web Architecture"],
  },
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-item ${isEven ? "left" : "right"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      {/* Center cyber node with active energy ring */}
      <motion.div
        className="timeline-node"
        whileHover={{ scale: 1.22 }}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
      >
        <span className="node-icon">{item.icon}</span>
        <div className="node-glow" />
        <div className="node-pulse-ring" />
      </motion.div>

      {/* Cyber connector beam between node and card */}
      <div className={`timeline-connector ${isEven ? "to-left" : "to-right"}`} />

      {/* Content Card with Glassmorphic styling */}
      <motion.div
        className="timeline-card"
        whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(168, 85, 247, 0.28)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-header">
          <span className="timeline-badge">{item.period}</span>
          <span className="timeline-org">{item.organization}</span>
        </div>
        <h3 className="timeline-title">{item.role}</h3>
        <p className="timeline-desc">{item.description}</p>
        <div className="timeline-tags">
          {item.skills.map((skill, idx) => (
            <span key={idx} className="timeline-tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate runner head position along the rail
  const runnerTop = useTransform(smoothProgress, (val) => `${Math.min(100, Math.max(0, val * 100))}%`);
  const runnerOpacity = useTransform(smoothProgress, [0, 0.03, 0.98, 1], [0, 1, 1, 0.6]);

  return (
    <section className="timeline-section" id="timeline" ref={containerRef}>
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="timeline-eyebrow">
          <span className="eyebrow-pip" />
          <span>Career Path & Milestones</span>
        </div>
        <h2 className="section-title">
          Experience <span className="gradient-accent">&</span> Milestones
        </h2>
        <p className="section-subtitle">
          A chronicle of my professional evolution, technical learning, and engineering track record.
        </p>
      </motion.div>

      <div className="timeline-container">
        {/* Redesigned High-Tech Vertical Progress Conduit */}
        <div className="timeline-conduit" aria-hidden="true">
          {/* Top Origin Terminal */}
          <div className="timeline-terminal top">
            <span className="terminal-core" />
            <span className="terminal-aura" />
          </div>

          {/* Ambient Multi-Stop Neon Glow Channel */}
          <motion.div
            className="timeline-glow-channel"
            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          />

          {/* Background Circuitry Rail with Measurement Ticks */}
          <div className="timeline-rail">
            <div className="rail-circuitry" />
          </div>

          {/* Animated Laser Plasma Fill Line */}
          <motion.div
            className="timeline-laser-bar"
            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          />

          {/* Leading Plasma Runner (Glowing particle traveling down as you scroll) */}
          <motion.div
            className="timeline-runner"
            style={{ top: runnerTop, opacity: runnerOpacity }}
          >
            <div className="runner-particle-core" />
            <div className="runner-halo-glow" />
            <div className="runner-wave-pulse" />
          </motion.div>

          {/* Bottom Endpoint Terminal */}
          <div className="timeline-terminal bottom">
            <span className="terminal-core live" />
            <span className="terminal-aura live" />
          </div>
        </div>

        {/* Timeline items */}
        <div className="timeline-items">
          {milestones.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
