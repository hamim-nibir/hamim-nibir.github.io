import { useWindowSize } from "./hooks/useWindowSize";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: {
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            },
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 999,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--accent)",
            border: "2px solid var(--accent)",
            boxShadow: "0 0 20px var(--accent-soft), 0 0 40px var(--accent-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "var(--bg)",
          }}
          onMouseEnter={e =>
            e.currentTarget.style.boxShadow = "0 0 30px var(--accent), 0 0 60px var(--accent-soft)"
          }
          onMouseLeave={e =>
            e.currentTarget.style.boxShadow = "0 0 20px var(--accent-soft), 0 0 40px var(--accent-soft)"
          }
        >
          {/* Arrow up icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const { isMobile } = useWindowSize();

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      <Navbar />
      <main style={{
        flex: 1,
        marginLeft: isMobile ? "0" : "300px",
        marginTop: isMobile ? "56px" : "0",
        transition: "margin 0.3s ease, background-color 0.3s ease",
        width: isMobile ? "100%" : "calc(100% - 300px)",
        backgroundColor: "var(--bg)",
      }}>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Gallery />
        <Skills />
        <GitHubStats />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}