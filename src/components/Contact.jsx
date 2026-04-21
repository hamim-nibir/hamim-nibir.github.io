import { motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.4 },
});

const contactCards = [
  {
    icon: <MdOutlineEmail size={26} />,
    label: "Email",
    value: "nibir0079@gmail.com",
    href: "mailto:nibir0079@gmail.com",
  },
  {
    icon: <MdPhone size={26} />,
    label: "Phone",
    value: "+880 1763275055",
    href: "tel:+880XXXXXXXXX",
  },
  {
    icon: <FaLinkedinIn size={24} />,
    label: "LinkedIn",
    value: "hamim-nibir",
    href: "https://www.linkedin.com/in/hamim-nibir/",
  },
];

const socialLinks = [
  { icon: <FaGithub size={18} />,   href: "https://github.com/hamim-nibir",      label: "GitHub" },
  { icon: <FaXTwitter size={17} />, href: "https://x.com/hamim_nibir01",         label: "X" },
  { icon: <BsTelegram size={17} />, href: "https://t.me/your_telegram",          label: "Telegram" },
];

export default function Contact() {
  const { isMobile } = useWindowSize();

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "5rem 1.5rem 3rem" : "0 4rem",
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
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "2rem",
      }}>

        {/* Badge */}
        <motion.div {...fadeUp(0)} style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 16px",
          borderRadius: "999px",
          border: "1px solid var(--accent)",
          background: "var(--accent-soft)",
        }}>
          <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.06em" }}>
            Get in Touch
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 {...fadeUp(0.05)} style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "var(--text)",
          lineHeight: 1.15,
          margin: 0,
        }}>
          Let's Build Something{" "}
          <span style={{ color: "var(--accent)" }}>Amazing</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: "15px",
          color: "var(--text-muted)",
          lineHeight: 1.7,
          maxWidth: "500px",
          margin: 0,
        }}>
          Have a project in mind or want to collaborate? I would love to hear from you.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          {...fadeUp(0.15)}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "16px",
            width: "100%",
          }}
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.label === "LinkedIn" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: "0 0 24px var(--accent-soft)" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "2rem 1.5rem",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              {/* Icon circle */}
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent)",
              }}>
                {card.icon}
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "4px", letterSpacing: "0.04em" }}>
                  {card.label}
                </p>
                <p style={{ fontSize: "14px", color: "var(--text)", fontWeight: 600 }}>
                  {card.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social links + Email button */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Social icon buttons */}
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.background = "var(--accent-soft)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "var(--surface)";
              }}
            >
              {s.icon}
            </motion.a>
          ))}

          {/* Divider */}
          <div style={{ width: "1px", height: "28px", background: "var(--border)" }} />

          {/* Email Me Directly button */}
          <motion.a
            href="mailto:nibir0079@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 22px",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "var(--bg)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0 0 20px var(--accent-soft)",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 32px var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px var(--accent-soft)"}
          >
            <MdOutlineEmail size={16} />
            Email Me Directly
          </motion.a>
        </motion.div>

        {/* Availability banner */}
        <motion.div
          {...fadeUp(0.25)}
          style={{
            width: "100%",
            padding: "1.4rem 2rem",
            borderRadius: "16px",
            border: "1px solid var(--accent)",
            background: "var(--accent-soft)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)" }}>
              Currently Available
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
            Open for freelance projects, full-time opportunities, and interesting collaborations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
