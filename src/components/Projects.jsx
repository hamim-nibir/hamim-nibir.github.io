import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";
import { FaGithub } from "react-icons/fa6";
import { BsGlobe, BsChevronDown, BsChevronRight, BsFolder2Open, BsFolder2, BsMarkdown } from "react-icons/bs";
// import project1Img from "../assets/project1.png";

const projects = [
  {
    id: 1,
    name: "Smart Fire Evacuation System",
    folder: "fire-evacuation",
    description:
      "An IoT-based fire detection and evacuation system that processes real-time sensor data to detect fire and generate optimal evacuation routes. Built backend logic in PHP and MySQL to handle alert generation and route computation.",
    image: "https://placehold.co/900x500/1a1a2e/3b82f6?text=Smart+Fire+Evacuation+System",
    // image: project1Img,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamim-nibir",
    live: null,
  },
  {
    id: 2,
    name: "CodeWiz",
    folder: "codewiz",
    description:
      "A competitive programming platform where users can solve programming problems, join contests, and track coding progress. Implemented user authentication, problem submission system, and leaderboard ranking.",
    image: "https://placehold.co/900x500/1a1a2e/3b82f6?text=CodeWiz+Platform",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamim-nibir",
    live: null,
  },
  {
    id: 3,
    name: "DreamEd",
    folder: "dreamed",
    description:
      "A centralized platform for study abroad resources including university information, application guidelines, and scholarship opportunities. Features community interaction for students to connect and share experiences.",
    image: "https://placehold.co/900x500/1a1a2e/3b82f6?text=DreamEd+Platform",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamim-nibir",
    live: null,
  },
  {
    id: 4,
    name: "KrishokHut",
    folder: "krishokhut",
    description:
      "A digital marketplace connecting farmers directly with consumers, reducing middlemen influence. Implemented product listing, location-based hubs, and order management system.",
    image: "https://placehold.co/900x500/1a1a2e/3b82f6?text=KrishokHut+Marketplace",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamim-nibir",
    live: null,
  },
  {
    id: 5,
    name: "Portfolio Website",
    folder: "portfolio",
    description:
      "A personal portfolio website built with React and Vite. Features theme switching, smooth animations, GitHub stats integration, and a fully responsive layout with multiple sections.",
    image: "https://placehold.co/900x500/1a1a2e/3b82f6?text=Portfolio+Website",
    tags: ["React", "Vite", "Framer Motion", "CSS Variables"],
    github: "https://github.com/hamim-nibir",
    live: "https://nibirverse.tech",
  },
];

function FileTreeItem({ project, isSelected, isOpen, onToggle, onSelect }) {
  return (
    <div>
      {/* Folder row */}
      <div
        onClick={() => { onToggle(); onSelect(); }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 12px",
          cursor: "pointer",
          borderRadius: "6px",
          background: isSelected ? "var(--accent-soft)" : "transparent",
          border: "1px solid " + (isSelected ? "var(--accent)" : "transparent"),
          transition: "all 0.2s ease",
          userSelect: "none",
        }}
        onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 5%, transparent)"; }}
        onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = "transparent"; }}
      >
        <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>
          {isOpen ? <BsChevronDown size={10} /> : <BsChevronRight size={10} />}
        </span>
        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
          {isOpen ? <BsFolder2Open size={14} /> : <BsFolder2 size={14} />}
        </span>
        <span style={{
          fontSize: "13px",
          color: isSelected ? "var(--accent)" : "var(--text)",
          fontWeight: isSelected ? 600 : 400,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {project.folder}
        </span>
      </div>

      {/* Children */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", paddingLeft: "24px" }}
          >
            {/* Website link */}
            {project.live && (
              <div style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "5px 8px", fontSize: "12px", color: "var(--accent)",
                cursor: "pointer",
              }}>
                <BsGlobe size={11} />
                <span>{project.folder + " website"}</span>
              </div>
            )}
            {/* README */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "5px 8px", fontSize: "12px", color: "var(--text-muted)",
            }}>
              <BsMarkdown size={11} style={{ color: "var(--accent)" }} />
              <span>README.md</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const { isMobile } = useWindowSize();
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [openIds, setOpenIds] = useState([projects[0].id]);

  const selected = projects.find(p => p.id === selectedId);

  function toggleOpen(id) {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  return (
    <section
      id="projects"
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
          style={{ marginBottom: "2rem" }}
        >
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--accent)",
            marginBottom: "6px",
          }}>
            Projects
          </h2>
          <div style={{ width: "60px", height: "3px", background: "var(--accent)", borderRadius: "2px", marginBottom: "1.5rem" }} />
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 700,
            color: "var(--text)",
          }}>
            Software{" "}
            <span style={{ color: "var(--accent)" }}>Projects</span>
          </h3>
        </motion.div>

        {/* Main panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "0",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            background: "var(--surface)",
            boxShadow: "0 0 40px var(--accent-soft)",
            minHeight: isMobile ? "auto" : "520px",
          }}
        >
          {/* Left: File tree */}
          <div style={{
            width: isMobile ? "100%" : "240px",
            flexShrink: 0,
            borderRight: isMobile ? "none" : "1px solid var(--border)",
            borderBottom: isMobile ? "1px solid var(--border)" : "none",
            padding: "1rem 0.75rem",
            overflowY: "auto",
          }}>
            <p style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              padding: "0 8px",
              marginBottom: "10px",
            }}>
              Explorer
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {projects.map(project => (
                <FileTreeItem
                  key={project.id}
                  project={project}
                  isSelected={selectedId === project.id}
                  isOpen={openIds.includes(project.id)}
                  onToggle={() => toggleOpen(project.id)}
                  onSelect={() => setSelectedId(project.id)}
                />
              ))}
            </div>
          </div>

          {/* Right: Preview */}
          <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: "flex", flexDirection: "column", height: "100%" }}
                >
                  {/* Screenshot */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <img
                      src={selected.image}
                      alt={selected.name}
                      style={{
                        width: "100%",
                        height: isMobile ? "200px" : "300px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* Gradient overlay at bottom */}
                    <div style={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0,
                      height: "80px",
                      background: "linear-gradient(to top, var(--surface), transparent)",
                    }} />
                    {/* Project name over image */}
                    <div style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "20px",
                      fontSize: "18px",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      color: "var(--accent)",
                    }}>
                      {selected.name}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "1.2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {/* Description */}
                    <p style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                    }}>
                      {selected.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {selected.tags.map(tag => (
                        <span key={tag} style={{
                          padding: "3px 10px",
                          borderRadius: "999px",
                          border: "1px solid var(--accent)",
                          color: "var(--accent)",
                          fontSize: "11px",
                          fontWeight: 500,
                          background: "var(--accent-soft)",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                      {selected.live && (
                        <motion.a
                          href={selected.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            background: "var(--accent)",
                            color: "var(--bg)",
                            textDecoration: "none",
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          <BsGlobe size={13} />
                          Live Site
                        </motion.a>
                      )}
                      <motion.a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          border: "1px solid var(--border)",
                          background: "transparent",
                          color: "var(--text)",
                          textDecoration: "none",
                          fontSize: "13px",
                          fontWeight: 600,
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.color = "var(--text)";
                        }}
                      >
                        <FaGithub size={14} />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
