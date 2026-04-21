import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { useWindowSize } from "../hooks/useWindowSize";

const GITHUB_USERNAME = "hamim-nibir";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.4 },
});

// Returns opacity level based on contribution count
function getOpacity(level) {
  if (level === 0) return 0.08;
  if (level === 1) return 0.3;
  if (level === 2) return 0.55;
  if (level === 3) return 0.8;
  return 1;
}

export default function GitHubStats() {
  const { isMobile } = useWindowSize();

  const [profile, setProfile] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch profile stats
        const profileRes = await fetch(
          "https://api.github.com/users/" + GITHUB_USERNAME
        );
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch contribution data
        const contribRes = await fetch(
          "https://github-contributions-api.jogruber.de/v4/" + GITHUB_USERNAME + "?y=last"
        );
        const contribData = await contribRes.json();

        setContributions(contribData.contributions || []);

        // Sum total contributions from last year
        const total = (contribData.contributions || []).reduce(
          (sum, day) => sum + day.count,
          0
        );
        setTotalContributions(total);
      } catch (err) {
        console.error("GitHub fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Build 52-week grid (Sunday to Saturday)
  function buildWeeks() {
    if (!contributions.length) return [];
    const weeks = [];
    let week = [];
    contributions.forEach((day, i) => {
      week.push(day);
      if (week.length === 7 || i === contributions.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    return weeks;
  }

  // Get month labels from contribution data
  function getMonthLabels(weeks) {
    const labels = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const date = new Date(week[0].date);
      const month = date.getMonth();
      if (month !== lastMonth) {
        labels.push({ index: i, label: date.toLocaleString("default", { month: "short" }) });
        lastMonth = month;
      }
    });
    return labels;
  }

  const weeks = buildWeeks();
  const monthLabels = getMonthLabels(weeks);
  const CELL = isMobile ? 9 : 12;
  const GAP = isMobile ? 2 : 3;

  const stats = [
    { label: "Contributions", value: totalContributions ? totalContributions + "+" : "..." },
    { label: "Repositories",  value: profile ? profile.public_repos + "+" : "..." },
    { label: "Followers",     value: profile ? profile.followers + "" : "..." },
  ];

  return (
    <section
      id="github"
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
        maxWidth: "900px",
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
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "999px",
          border: "1px solid var(--accent)",
          background: "var(--accent-soft)",
        }}>
          <FaGithub size={13} style={{ color: "var(--accent)" }} />
          <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.06em" }}>
            Open Source
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 {...fadeUp(0.05)} style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "var(--text)",
          margin: 0,
        }}>
          GitHub Contributions
        </motion.h2>

        {/* Subtext */}
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: "15px",
          color: "var(--text-muted)",
          margin: 0,
          lineHeight: 1.7,
        }}>
          Building in public, contributing to the community
        </motion.p>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.15)}
          style={{
            display: "flex",
            gap: isMobile ? "2rem" : "4rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--accent)",
                lineHeight: 1,
              }}>
                {s.value}
              </span>
              <span style={{ fontSize: "13px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Contribution grid card */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            width: "100%",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: isMobile ? "1.2rem 1rem" : "1.8rem 2rem",
            overflowX: "auto",
          }}
        >
          {loading ? (
            <div style={{ color: "var(--text-muted)", fontSize: "14px", padding: "2rem" }}>
              Loading contribution graph...
            </div>
          ) : (
            <div style={{ display: "inline-block", minWidth: "fit-content" }}>

              {/* Month labels */}
              <div style={{
                display: "flex",
                marginLeft: isMobile ? "28px" : "36px",
                marginBottom: "6px",
                gap: GAP + "px",
              }}>
                {monthLabels.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      width: (CELL + GAP) + "px",
                      marginLeft: i === 0 ? 0 : ((m.index - (monthLabels[i - 1]?.index || 0)) * (CELL + GAP) - (CELL + GAP)) + "px",
                      fontSize: isMobile ? "9px" : "11px",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>

              {/* Grid rows */}
              <div style={{ display: "flex", gap: GAP + "px" }}>

                {/* Day labels */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: GAP + "px",
                  marginRight: "4px",
                  justifyContent: "space-around",
                }}>
                  {["Mon", "", "Wed", "", "Fri", "", ""].map((d, i) => (
                    <div key={i} style={{
                      height: CELL + "px",
                      fontSize: isMobile ? "8px" : "10px",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      width: isMobile ? "20px" : "26px",
                    }}>
                      {d}
                    </div>
                  ))}
                </div>

                {/* Weeks */}
                {weeks.map((week, wi) => (
                  <div key={wi} style={{ display: "flex", flexDirection: "column", gap: GAP + "px" }}>
                    {week.map((day, di) => (
                      <div
                        key={di}
                        title={day.date + ": " + day.count + " contributions"}
                        style={{
                          width: CELL + "px",
                          height: CELL + "px",
                          borderRadius: "2px",
                          backgroundColor: "var(--accent)",
                          opacity: getOpacity(day.level),
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                          cursor: "default",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.4)"; e.currentTarget.style.opacity = "1"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = getOpacity(day.level).toString(); }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "6px",
                marginTop: "10px",
                fontSize: isMobile ? "10px" : "11px",
                color: "var(--text-muted)",
              }}>
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <div key={l} style={{
                    width: CELL + "px",
                    height: CELL + "px",
                    borderRadius: "2px",
                    backgroundColor: "var(--accent)",
                    opacity: getOpacity(l),
                  }} />
                ))}
                <span>More</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* View full profile link */}
        <motion.a
          {...fadeUp(0.25)}
          href={"https://github.com/" + GITHUB_USERNAME}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
        >
          <FaGithub size={16} />
          View full profile on GitHub
        </motion.a>

      </div>
    </section>
  );
}
