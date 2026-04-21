import { motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";
import { BsCalendar3, BsPatchCheck } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.4 },
});

// ── Achievements data ──────────────────────────────────────────
const achievements = [
  {
    id: 1,
    title: "BriefCase 3.0 – Top 10 Finalist",
    issuer: "BriefCase",
    year: "2024",
    description: "Ranked Top 10 among 640+ teams nationwide presenting a data-driven business strategy.",
    image: "https://placehold.co/400x240/1a1a2e/3b82f6?text=BriefCase+3.0",
    verifyUrl: null,
  },
  {
    id: 2,
    title: "ICPC Asia Dhaka Regional",
    issuer: "ICPC",
    year: "2024",
    description: "Qualified for regional contest after finishing 1st Runner-Up in the preliminary round among 30+ teams.",
    image: "https://placehold.co/400x240/1a1a2e/3b82f6?text=ICPC+2024",
    verifyUrl: null,
  },
  {
    id: 3,
    title: "Scientist Mania – 1st Position",
    issuer: "Govt. Science College",
    year: "2021",
    description: "Achieved 1st place in national science festival project display with Fire Fighter Robot.",
    image: "https://placehold.co/400x240/1a1a2e/3b82f6?text=Scientist+Mania",
    verifyUrl: null,
  },
];

// ── Certifications data ────────────────────────────────────────
const certifications = [
  {
    id: 1,
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2024",
    image: "https://placehold.co/400x220/1a1a2e/3b82f6?text=Web+Dev+Certificate",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "JavaScript Intermediate",
    issuer: "Sololearn",
    year: "2023",
    image: "https://placehold.co/400x220/1a1a2e/3b82f6?text=JS+Certificate",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "React – The Complete Guide",
    issuer: "Udemy",
    year: "2024",
    image: "https://placehold.co/400x220/1a1a2e/3b82f6?text=React+Certificate",
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "Python for Beginners",
    issuer: "Codecademy",
    year: "2023",
    image: "https://placehold.co/400x220/1a1a2e/3b82f6?text=Python+Certificate",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "Git & GitHub",
    issuer: "Codecademy",
    year: "2023",
    image: "https://placehold.co/400x220/1a1a2e/3b82f6?text=Git+Certificate",
    verifyUrl: "#",
  },
];

// ── Achievement Card ──────────────────────────────────────────
function AchievementCard({ item, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ y: -6, boxShadow: "0 0 28px var(--accent-soft)" }}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        transition: "border-color 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "180px", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "1rem 1.2rem" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
          {item.issuer}
        </p>
        <h4 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text)", fontFamily: "'Syne', sans-serif", lineHeight: 1.4, marginBottom: "8px" }}>
          {item.title}
        </h4>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "12px" }}>
          {item.description}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "var(--text-muted)" }}>
            <BsCalendar3 size={11} />
            {item.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Certification Card ────────────────────────────────────────
function CertCard({ item, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ y: -5, boxShadow: "0 0 24px var(--accent-soft)" }}
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        transition: "border-color 0.25s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      {/* Certificate image */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "150px", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "0.9rem 1.1rem", flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
        <p style={{ fontSize: "10px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {item.issuer}
        </p>
        <h4 style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)", fontFamily: "'Syne', sans-serif", lineHeight: 1.4, flex: 1 }}>
          {item.title}
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "var(--text-muted)" }}>
            <BsCalendar3 size={10} />
            {item.year}
          </span>
          {item.verifyUrl && (
            <a
              href={item.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}
            >
              Verify <BsPatchCheck size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function Gallery() {
  const { isMobile } = useWindowSize();

  return (
    <section
      id="gallery"
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

        {/* ── Achievements ── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "4rem" }}>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--accent)",
            marginBottom: "6px",
          }}>
            Gallery
          </h2>
          <div style={{ width: "60px", height: "3px", background: "var(--accent)", borderRadius: "2px", marginBottom: "1.8rem" }} />

          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "0.4rem",
          }}>
            Featured{" "}<span style={{ color: "var(--accent)" }}>Achievements</span>
          </h3>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "1.8rem", lineHeight: 1.7 }}>
            Competitions, recognitions and milestones along the way
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
          }}>
            {achievements.map((item, i) => (
              <AchievementCard key={item.id} item={item} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "3.5rem" }} />

        {/* ── Certifications ── */}
        <motion.div {...fadeUp(0.1)}>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "1.8rem" }}>
            <div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "4px",
              }}>
                Latest{" "}<span style={{ color: "var(--accent)" }}>Certifications</span>
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Continuous learning and professional development
              </p>
            </div>

            {/* See all button */}
            <motion.a
              href="/certifications"
              whileHover={{ scale: 1.04, x: 3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "999px",
                border: "1px solid var(--accent)",
                background: "var(--accent-soft)",
                color: "var(--accent)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--bg)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--accent-soft)";
                e.currentTarget.style.color = "var(--accent)";
              }}
            >
              See All Certifications
              <HiArrowRight size={14} />
            </motion.a>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "16px",
          }}>
            {certifications.map((item, i) => (
              <CertCard key={item.id} item={item} delay={i * 0.07} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
