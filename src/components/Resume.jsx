import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import { useWindowSize } from "../hooks/useWindowSize";
import cvFile from "../assets/my-cv.pdf";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.4 },
});

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "13px",
        fontWeight: 800,
        letterSpacing: "0.12em",
        color: "var(--accent)",
        marginBottom: "6px",
        textTransform: "uppercase",
      }}>
        {children}
      </h3>
      <div style={{
        height: "2px",
        background: "linear-gradient(to right, var(--accent), transparent)",
        borderRadius: "2px",
      }} />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: "999px",
      border: "1px solid var(--accent)",
      color: "var(--accent)",
      fontSize: "12px",
      fontWeight: 500,
      backgroundColor: "var(--accent-soft)",
      marginRight: "6px",
      marginBottom: "6px",
    }}>
      {children}
    </span>
  );
}

export default function Resume() {
  const { isMobile } = useWindowSize();

  return (
    <section
      id="resume"
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

      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "900px",
        margin: "0 auto",
      }}>

        {/* ── Top bar: Title + Download ── */}
        <motion.div
          {...fadeUp(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--accent)",
              marginBottom: "6px",
            }}>
              Resume
            </h2>
            <div style={{
              width: "60px",
              height: "3px",
              background: "var(--accent)",
              borderRadius: "2px",
            }} />
          </div>

          <motion.a
            href={cvFile}
            download="Noor_E_Hamim_Nibir_CV.pdf"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "var(--bg)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              border: "1px solid var(--accent)",
              boxShadow: "0 0 20px var(--accent-soft)",
              cursor: "pointer",
            }}
          >
            <MdDownload size={18} />
            Download PDF
          </motion.a>
        </motion.div>

        {/* ── Resume Card ── */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: isMobile ? "1.5rem" : "2.5rem 3rem",
            boxShadow: "0 0 40px var(--accent-soft)",
          }}
        >

          {/* Header */}
          <motion.div {...fadeUp(0.15)} style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: "0.4rem",
              letterSpacing: "0.04em",
            }}>
              NOOR E HAMIM NIBIR
            </h1>
            <p style={{
              fontSize: "15px",
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.8rem",
            }}>
              Full Stack Developer | Tech Enthusiast | Student
            </p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px 16px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}>
              <span>nibir0079@gmail.com</span>
              <span style={{ color: "var(--border)" }}>|</span>
              <a href="https://nibirverse.tech" target="_blank" rel="noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none" }}>nibirverse.tech</a>
              <span style={{ color: "var(--border)" }}>|</span>
              <a href="https://linkedin.com/in/hamim-nibir" target="_blank" rel="noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none" }}>linkedin/hamim-nibir</a>
              <span style={{ color: "var(--border)" }}>|</span>
              <a href="https://github.com/hamim-nibir" target="_blank" rel="noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none" }}>github/hamim-nibir</a>
            </div>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

          {/* Education */}
          <motion.div {...fadeUp(0.2)} style={{ marginBottom: "2rem" }}>
            <SectionTitle>Education</SectionTitle>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px" }}>
                <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "15px" }}>
                  United International University
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>Jan 2023 – Present</p>
              </div>
              <p style={{ color: "var(--accent)", fontSize: "14px", marginBottom: "4px" }}>
                BSc in Computer Science & Engineering
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
                CGPA: 3.62/4.0 (among top 5% students)
              </p>
            </div>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

          {/* Tech Skills */}
          <motion.div {...fadeUp(0.25)} style={{ marginBottom: "2rem" }}>
            <SectionTitle>Technical Skills</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Languages", value: "C, C++, Python, JavaScript, PHP" },
                { label: "Frontend", value: "HTML, CSS, JavaScript, React, React Native" },
                { label: "Backend", value: "Node.js" },
                { label: "Database", value: "MySQL" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{
                    minWidth: "100px",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "var(--text)",
                  }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

          {/* Projects */}
          <motion.div {...fadeUp(0.3)} style={{ marginBottom: "2rem" }}>
            <SectionTitle>Projects</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {[
                {
                  title: "Smart Fire Evacuation System",
                  link: "github.com/CodeWiz/repo",
                  bullets: [
                    "Built an IoT-based fire detection and evacuation system that processes real-time sensor data.",
                    "Developed backend logic in PHP and MySQL to handle alert generation and route computation.",
                    "Implemented real-time alert notifications for faster emergency response.",
                  ],
                  tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                },
                {
                  title: "CodeWiz - Competitive Programming Platform",
                  link: "github.com/CodeWiz/repo",
                  bullets: [
                    "Developed a full-stack platform where users can solve problems, join contests, and track progress.",
                    "Implemented user authentication, problem submission system, and leaderboard ranking.",
                    "Built responsive frontend and backend services using PHP and MySQL.",
                  ],
                  tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                },
                {
                  title: "DreamEd - Study Abroad Platform",
                  link: "github.com/DreamEd/repo",
                  bullets: [
                    "Built a centralized platform for study abroad resources including university and scholarship info.",
                    "Implemented community interaction features enabling students to connect and share experiences.",
                  ],
                  tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                },
                {
                  title: "KrishokHut - Online Marketplace",
                  link: "github.com/KrishokHut/repo",
                  bullets: [
                    "Developed a digital marketplace connecting farmers directly with consumers.",
                    "Implemented product listing, location-based hubs, and order management system.",
                  ],
                  tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                },
              ].map((project) => (
                <div key={project.title}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px" }}>
                    <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "14px" }}>
                      {project.title}
                    </p>
                    <a href={"https://" + project.link} target="_blank" rel="noreferrer"
                      style={{ color: "var(--accent)", fontSize: "12px", textDecoration: "none" }}>
                      {project.link}
                    </a>
                  </div>
                  <ul style={{ paddingLeft: "1.2rem", margin: "6px 0 8px" }}>
                    {project.bullets.map((b, i) => (
                      <li key={i} style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        marginBottom: "2px",
                      }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div>
                    {project.tools.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

          {/* Achievements */}
          <motion.div {...fadeUp(0.35)} style={{ marginBottom: "2rem" }}>
            <SectionTitle>Achievements</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "BriefCase 3.0 - Top 10 Finalist",
                  year: "2024",
                  desc: "Ranked Top 10 among 640+ teams nationwide, presenting a data-driven business strategy solution.",
                },
                {
                  title: "ICPC Asia Dhaka Regional - Participant",
                  year: "2024",
                  desc: "Qualified for regional contest after finishing 1st Runner-Up in preliminary round among 30+ teams.",
                },
                {
                  title: "Govt. Science College Scientist Mania - 1st Position",
                  year: "2021",
                  desc: "Achieved 1st place in national science festival project display with Fire Fighter Robot project.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "14px" }}>{item.title}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>{item.year}</p>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

          {/* Volunteering */}
          <motion.div {...fadeUp(0.4)} style={{ marginBottom: "2rem" }}>
            <SectionTitle>Volunteering</SectionTitle>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px" }}>
              <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "14px" }}>
                Assistant Head of IT, UIU Sports Club
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>June 2025 – Present</p>
            </div>
            <ul style={{ paddingLeft: "1.2rem", marginTop: "6px" }}>
              {[
                "Managed the club's digital presence and social media operations, coordinating IT support for events.",
                "Provided technical support for club events, handling live updates and digital content management.",
              ].map((b, i) => (
                <li key={i} style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2px" }}>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

          {/* Areas of Interest */}
          <motion.div {...fadeUp(0.45)}>
            <SectionTitle>Areas of Interest</SectionTitle>
            <div>
              {["AI & Machine Learning", "Full Stack Development", "Competitive Programming", "Data Analysis"].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
