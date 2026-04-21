import { motion } from "framer-motion";
import { MdOutlineEmail, MdOutlineFileDownloadDone } from "react-icons/md";
import { useWindowSize } from "../hooks/useWindowSize";
import { BsDownload } from "react-icons/bs";
import heroPhoto1 from "../assets/hero1.jpg";

export default function About() {
  const { isMobile } = useWindowSize();

  function handleMouseEnter(e) {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.color = "var(--accent)";
  }

  function handleMouseLeave(e) {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--text)";
  }

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "5rem 1.5rem 2rem" : "0 4rem",
      }}
    >
      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          gap: isMobile ? "2.5rem" : "5rem",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* ── Left: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flexShrink: 0 }}
        >
          <img
            src={heroPhoto1}
            alt="Profile"
            style={{
              width: isMobile ? "100%" : "280px",
              height: isMobile ? "260px" : "340px",
              objectFit: "cover",
              borderRadius: "16px",
              border: "2px solid var(--accent)",
              boxShadow:
                "0 0 40px var(--accent-soft), 0 0 80px var(--accent-soft)",
              display: "block",
            }}
          />
        </motion.div>

        {/* ── Right: Text ── */}
        <div style={{ flex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--accent)",
              marginBottom: "0.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0px",
            }}
          >
            {"About Me".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            style={{
              width: "60px",
              height: "3px",
              background: "var(--accent)",
              borderRadius: "2px",
              marginBottom: "1.8rem",
              transformOrigin: "left",
            }}
          />

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "1.2rem",
              maxWidth: "560px",
            }}
          >
            Hi, my name is{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Noor E Hamim Nibir
            </span>{" "}
            and I enjoy building scalable web applications and clean user
            experiences. I specialize in{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>
              React
            </span>
            ,{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>
              Node.js
            </span>
            , and{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>
              modern web technologies
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.4 }}
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "1.2rem",
              maxWidth: "560px",
            }}
          >
            I am a passionate developer with a strong interest in building
            modern web applications using technologies like React and
            TypeScript. I enjoy turning ideas into functional, user-friendly
            interfaces and continuously improving my skills through hands-on
            learning and experimentation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "2rem",
              maxWidth: "560px",
            }}
          >
            As someone who is still early in my journey, I focus on
            strengthening my fundamentals and exploring different areas of
            software development, including frontend design, performance
            optimization, and problem-solving. I am especially interested in
            learning about emerging technologies and how they can be applied to
            real-world solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "2rem",
              maxWidth: "560px",
            }}
          >
            I am driven by curiosity and a desire to grow as a developer. I
            actively seek opportunities to learn, build, and collaborate, and I
            am committed to developing projects that not only showcase my skills
            but also create meaningful impact.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "10px",
              background: "transparent",
              color: "var(--text)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              border: "1px solid var(--border)",
              transition: "all 0.2s ease",
            }}
          >
            <BsDownload size={16} />
            View CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
