import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useWindowSize } from "../hooks/useWindowSize";
import heroPhoto1 from "../assets/hero1.jpg";
import heroPhoto2 from "../assets/hero2.jpg";

const photos = [heroPhoto1, heroPhoto2];

export default function Hero() {
  const containerRef = useRef(null);
  const { isMobile } = useWindowSize();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const [photoHoverTimer, setPhotoHoverTimer] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Auto-cycle photos
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex(prev => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for spotlight
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  // Photo hover — show full photo after 600ms
  const handlePhotoEnter = () => {
    const t = setTimeout(() => setShowFullPhoto(true), 600);
    setPhotoHoverTimer(t);
  };
  const handlePhotoLeave = () => {
    clearTimeout(photoHoverTimer);
    setShowFullPhoto(false);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "5rem 1.5rem 2rem" : "0 4rem",
      }}
    >
      {/* Graph paper background */}
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

      {/* Mouse spotlight */}
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--spotlight) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          translateX: springX,
          translateY: springY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Main content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        gap: isMobile ? "2.5rem" : "4rem",
      }}>

        {/* ── Left: Text ── */}
        <div style={{ flex: 1, maxWidth: "800px" }}>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid var(--accent)",
              background: "var(--accent-soft)",
              marginBottom: "1.5rem",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
                display: "inline-block",
              }}
            />
            <span style={{
              fontSize: "12px",
              color: "var(--accent)",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}>
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              marginBottom: "0.4rem",
            }}
          >
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Noor E Hamim{" "}
            <span style={{ color: "var(--accent)", position: "relative", display: "inline-block" }}>
              Nibir
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "var(--accent)",
                  borderRadius: "2px",
                  transformOrigin: "left",
                  display: "block",
                }}
              />
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              fontSize: "18px",
              color: "var(--text-muted)",
              marginBottom: "1.25rem",
              fontWeight: 400,
            }}
          >
            Full Stack Developer | Tech Enthusiast | Student
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
              maxWidth: "480px",
            }}
          >
            Building scalable web applications and clean user experiences.
            Specializing in{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>React</span>,{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>Node.js</span>, and{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>modern web technologies</span>.
          </motion.p>

          {/* Location + status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "2rem",
              fontSize: "13px",
              color: "var(--text-muted)",
              flexWrap: "wrap",
            }}
          >
            <span>📍 Bangladesh</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ color: "var(--accent)" }}>💼 Open to Work</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "var(--accent)",
                color: "var(--bg)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                border: "1px solid var(--accent)",
                boxShadow: "0 0 20px var(--accent-soft)",
                transition: "box-shadow 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 32px var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px var(--accent-soft)"}
            >
              <MdOutlineEmail size={16} />
              Get in Touch
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
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
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              <BsGrid size={15} />
              View Projects
            </motion.a>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          style={{
            position: "relative",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Spinning dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: "-10px",
              borderRadius: "50%",
              border: "2px dashed var(--accent)",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />

          {/* Photo circle */}
          <div
            onMouseEnter={handlePhotoEnter}
            onMouseLeave={handlePhotoLeave}
            style={{
              width: isMobile ? "200px" : "350px",
              height: isMobile ? "200px" : "350px",
              borderRadius: "50%",
              border: "3px solid var(--accent)",
              boxShadow: "0 0 40px var(--accent-soft), 0 0 80px var(--accent-soft)",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photoIndex}
                src={photos[photoIndex]}
                alt="Noor E Hamim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "14px",
          }}>
            {photos.map((_, i) => (
              <div
                key={i}
                onClick={() => setPhotoIndex(i)}
                style={{
                  width: i === photoIndex ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: i === photoIndex ? "var(--accent)" : "var(--border)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Full photo popup on hover */}
          <AnimatePresence>
            {showFullPhoto && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 16px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "260px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "2px solid var(--accent)",
                  boxShadow: "0 0 40px var(--accent-soft), 0 20px 60px rgba(0,0,0,0.5)",
                  zIndex: 50,
                }}
              >
                <img
                  src={photos[photoIndex]}
                  alt="Full photo"
                  style={{
                    width: "100%",
                    height: "340px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "var(--text-muted)",
          fontSize: "12px",
          letterSpacing: "0.06em",
          zIndex: 2,
        }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}