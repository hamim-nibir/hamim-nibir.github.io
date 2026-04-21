import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import {
  BsGrid,
  BsPencilSquare,
  BsImages,
} from "react-icons/bs";
import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const navLinks = [
  { label: "Home",     href: "#home",     icon: <AiOutlineHome size={18}/> },
  { label: "About",     href: "#about",     icon: <AiOutlineUser size={18}/> },
  { label: "Projects", href: "#projects", icon: <BsGrid size={16}/> },
  { label: "Resume",    href: "#resume",    icon: <BsPencilSquare size={16}/> },
  { label: "Blogs",    href: "#blogs",    icon: <BsPencilSquare size={16}/> },
  { label: "Gallery",  href: "#gallery",  icon: <BsImages size={16}/> },
  { label: "Contact",  href: "#contact",  icon: <AiOutlineMail size={18}/> },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hamim-nibir/", icon: <FaLinkedinIn size={15}/> },
  { label: "GitHub",   href: "https://github.com/hamim-nibir",      icon: <FaGithub size={15}/> },
  { label: "Email",    href: "mailto:nibir0079@gmail.com",                icon: <MdOutlineEmail size={17}/> },
  { label: "YouTube",  href: "https://youtube.com/@NoorEHamimNibir",    icon: <FaYoutube size={15}/> },
  { label: "X",        href: "https://x.com/hamim_nibir01",           icon: <FaXTwitter size={14}/> },
];

const themeOptions = [
  { key: "dark-blue",   label: "Electric Blue", color: "#3b82f6", bg: "#0a0a0f" },
  { key: "dark-violet", label: "Violet",         color: "#7c3aed", bg: "#110f1a" },
  { key: "dark-orange", label: "Orange",         color: "#f97316", bg: "#0a0905" },
  { key: "dark-lime",   label: "Lime Green",     color: "#84cc16", bg: "#060a05" },
  { key: "light",       label: "Light",          color: "#3b82f6", bg: "#f8fafc" },
];

export default function Navbar() {
  const { themeKey, setThemeKey } = useTheme();
  const { isMobile } = useWindowSize();
  const [themeOpen, setThemeOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const SidebarContent = () => (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "2rem 1.25rem",
      gap: "0",
      overflowY: "auto",
    }}>

      {/* Logo + Name */}
      <motion.a
        href="#home"
        onClick={() => { setActiveLink("#home"); setDrawerOpen(false); }}
        whileHover="hover"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          marginBottom: "1.5rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo circle */}
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.3 }}
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            border: "2px solid var(--accent)",
            boxShadow: "0 0 16px var(--accent-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--surface)",
            marginBottom: "0.75rem",
            overflow: "hidden",
          }}
        >
          <svg width="38" height="38" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,24 2,24" fill="var(--accent)" opacity="0.9"/>
            <polygon points="14,8 22,22 6,22" fill="var(--bg)"/>
          </svg>
        </motion.div>

        {/* Name */}
        <motion.span
          variants={{ hover: { color: "var(--accent)", letterSpacing: "0.16em" } }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "0.12em",
            color: "var(--text)",
            textTransform: "uppercase",
          }}
        >
          Noor E Hamim
        </motion.span>

        <span style={{
          fontSize: "11px",
          color: "var(--text-muted)",
          marginTop: "2px",
          letterSpacing: "0.06em",
        }}>
          Full Stack Developer
        </span>
      </motion.a>

      {/* Social icons */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "1.75rem",
        flexWrap: "wrap",
      }}>
        {socialLinks.map(s => (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            title={s.label}
            whileHover={{ y: -3, color: "var(--accent)" }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--accent-soft)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--surface)";
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      {/* Nav links */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
        {navLinks.map((link, i) => {
          const isActive = activeLink === link.href;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => { setActiveLink(link.href); setDrawerOpen(false); }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              whileHover={{ x: 5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 14px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.04em",
                color: isActive ? "var(--accent)" : "var(--text-muted)",
                background: isActive ? "var(--accent-soft)" : "transparent",
                border: `1px solid ${isActive ? "var(--accent)" : "transparent"}`,
                transition: "all 0.2s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 6%, transparent)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              {/* Active left bar */}
              {isActive && (
                <motion.div
                  layoutId="activeBar"
                  style={{
                    position: "absolute",
                    left: 0, top: "20%", bottom: "20%",
                    width: "3px",
                    borderRadius: "0 3px 3px 0",
                    background: "var(--accent)",
                  }}
                />
              )}
              <span style={{ opacity: isActive ? 1 : 0.7 }}>{link.icon}</span>
              {link.label}
            </motion.a>
          );
        })}
      </nav>

      {/* Theme switcher button */}
      <div style={{ marginTop: "1.5rem", position: "relative" }}>
        <motion.button
          onClick={() => setThemeOpen(p => !p)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: "100%",
            padding: "11px 16px",
            borderRadius: "10px",
            border: "1px solid var(--accent)",
            background: "var(--accent-soft)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "var(--accent)",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            transition: "all 0.2s ease",
          }}
        >
          {/* Palette icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r="1.5" fill="var(--accent)" stroke="none"/>
            <circle cx="17.5" cy="10.5" r="1.5" fill="var(--accent)" stroke="none"/>
            <circle cx="8.5"  cy="7.5"  r="1.5" fill="var(--accent)" stroke="none"/>
            <circle cx="6.5"  cy="12.5" r="1.5" fill="var(--accent)" stroke="none"/>
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.786 0 1.512-.398 1.8-1.106.282-.69.087-1.432-.303-1.97L13 18c-.36-.5-.5-1.1-.28-1.67.22-.56.76-.94 1.37-.94H17c2.76 0 5-2.24 5-5 0-4.97-4.48-9-10-9z"/>
          </svg>
          Change Theme
        </motion.button>

        {/* Theme popup — opens upward */}
        <AnimatePresence>
          {themeOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 10px)",
                left: 0, right: 0,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "12px",
                boxShadow: "var(--accent-glow), 0 -20px 40px rgba(0,0,0,0.4)",
                zIndex: 200,
              }}
            >
              <p style={{
                fontSize: "11px", fontWeight: 500, color: "var(--text-muted)",
                textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: "10px", paddingLeft: "4px",
              }}>
                Choose theme
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {themeOptions.map(t => (
                  <motion.button
                    key={t.key}
                    onClick={() => { setThemeKey(t.key); setThemeOpen(false); }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      width: "100%", padding: "8px 10px", borderRadius: "8px",
                      border: "none", cursor: "pointer", textAlign: "left",
                      background: themeKey === t.key ? "var(--accent-soft)" : "transparent",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={e => { if (themeKey !== t.key) e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 8%, transparent)"; }}
                    onMouseLeave={e => { if (themeKey !== t.key) e.currentTarget.style.background = "transparent"; }}
                  >
                    <div style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: t.bg, border: `2px solid ${t.color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: themeKey === t.key ? `0 0 8px ${t.color}80` : "none",
                    }}>
                      <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: t.color }}/>
                    </div>
                    <span style={{
                      fontSize: "13px",
                      fontWeight: themeKey === t.key ? 500 : 400,
                      color: themeKey === t.key ? "var(--accent)" : "var(--text)",
                    }}>{t.label}</span>
                    {themeKey === t.key && (
                      <svg style={{ marginLeft: "auto" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );

  // ─── DESKTOP SIDEBAR ───────────────────────────────
  if (!isMobile) {
    return (
      <motion.aside
        initial={{ x: -260, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, bottom: 0,
          width: "300px",
          background: "var(--surface)",
          borderRight: "1px solid var(--border)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SidebarContent />
      </motion.aside>
    );
  }

  // ─── MOBILE ────────────────────────────────────────
  return (
    <>
      {/* Mobile top bar */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "56px",
        background: "color-mix(in srgb, var(--surface) 90%, transparent)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.25rem",
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,24 2,24" fill="var(--accent)" opacity="0.9"/>
            <polygon points="14,8 22,22 6,22" fill="var(--bg)"/>
          </svg>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, fontSize: "15px",
            letterSpacing: "0.1em", color: "var(--text)",
            textTransform: "uppercase",
          }}>Nibir</span>
        </a>

        {/* Hamburger */}
        <motion.button
          onClick={() => setDrawerOpen(p => !p)}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "38px", height: "38px", borderRadius: "10px",
            border: "1px solid var(--border)", background: "var(--surface)",
            cursor: "pointer", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "5px",
          }}
        >
          {[0, 1, 2].map(i => (
            <motion.span key={i}
              animate={{
                rotate: drawerOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                y: drawerOpen ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
                opacity: drawerOpen && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              style={{ width: "18px", height: "1.5px", background: "var(--text)", borderRadius: "2px", display: "block" }}
            />
          ))}
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 110, backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              style={{
                position: "fixed", top: 0, left: 0, bottom: 0,
                width: "280px",
                background: "var(--surface)",
                borderRight: "1px solid var(--border)",
                zIndex: 120,
              }}
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}