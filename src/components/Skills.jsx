import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

const skills = [
  // Languages
  { name: "JavaScript", initial: "J", category: "Languages", level: 70, color: "#f7df1e" },
  { name: "Python",     initial: "P", category: "Languages", level: 60, color: "#3776ab" },
  { name: "C",          initial: "C", category: "Languages", level: 65, color: "#a8b9cc" },
  { name: "C++",        initial: "C", category: "Languages", level: 60, color: "#00599c" },
  { name: "PHP",        initial: "P", category: "Languages", level: 70, color: "#777bb4" },

  // Frameworks
  { name: "React",        initial: "R", category: "Frameworks", level: 65, color: "#61dafb" },
  { name: "Node.js",      initial: "N", category: "Frameworks", level: 55, color: "#3c873a" },
  { name: "React Native", initial: "R", category: "Frameworks", level: 40, color: "#61dafb" },

  // Frontend
  { name: "HTML",     initial: "H", category: "Frontend", level: 85, color: "#e34f26" },
  { name: "CSS",      initial: "C", category: "Frontend", level: 75, color: "#264de4" },
  { name: "Tailwind", initial: "T", category: "Frontend", level: 65, color: "#38bdf8" },

  // Tools
  { name: "Git",    initial: "G", category: "Tools", level: 70, color: "#f05032" },
  { name: "GitHub", initial: "G", category: "Tools", level: 70, color: "#ffffff" },
  { name: "MySQL",  initial: "M", category: "Tools", level: 65, color: "#00758f" },
  { name: "VS Code",initial: "V", category: "Tools", level: 80, color: "#007acc" },
];

const categories = ["All", "Languages", "Frameworks", "Frontend", "Tools"];

export default function Skills() {
  const { isMobile } = useWindowSize();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "5rem 1.5rem 3rem" : "4rem 4rem",
        backgroundColor: "var(--bg)",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(var(--grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--accent)",
            marginBottom: "6px",
          }}>
            Skills
          </h2>
          <div style={{ width: "60px", height: "3px", background: "var(--accent)", borderRadius: "2px", marginBottom: "0.5rem" }} />
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>
            My tech stack and proficiency levels
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "2rem",
            padding: "6px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            width: "fit-content",
          }}
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: isActive ? 1 : 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 500,
                  background: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "var(--bg)" : "var(--text-muted)",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.02em",
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2, 1fr)"
              : "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.04} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay, duration: 0.3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.2rem",
        borderRadius: "14px",
        background: "var(--surface)",
        border: "1px solid " + (hovered ? "var(--accent)" : "var(--border)"),
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: hovered ? "0 0 20px var(--accent-soft)" : "none",
        cursor: "default",
      }}
    >
      {/* Top row: name + initial badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <span style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "var(--text)",
          fontFamily: "'Syne', sans-serif",
        }}>
          {skill.name}
        </span>

        {/* Initial badge */}
        <div style={{
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          background: skill.color + "22",
          border: "1px solid " + skill.color + "55",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 800,
          color: skill.color,
          flexShrink: 0,
          fontFamily: "'Syne', sans-serif",
        }}>
          {skill.initial}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: "5px",
        borderRadius: "999px",
        background: "var(--border)",
        marginBottom: "8px",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.level + "%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "999px",
            background: skill.color,
          }}
        />
      </div>

      {/* Level label + percentage */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
          Level
        </span>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--text)" }}>
          {skill.level}%
        </span>
      </div>
    </motion.div>
  );
}
