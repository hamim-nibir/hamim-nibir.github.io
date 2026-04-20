import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark-blue";
  });

  useEffect(() => {
    const t = themes[themeKey];
    const root = document.documentElement;

    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--surface", t.surface);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-soft", t.accentSoft);
    root.style.setProperty("--accent-glow", t.accentGlow);
    root.style.setProperty("--text", t.text);
    root.style.setProperty("--text-muted", t.textMuted);
    root.style.setProperty("--border", t.border);
    root.setAttribute("data-mode", t.mode);

    // inside the useEffect, after the existing setProperty lines
    root.style.setProperty(
      "--grid-line",
      t.mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.04)",
    );
    root.style.setProperty(
      "--spotlight",
      t.mode === "light" ? "rgba(0,0,0,0.04)" : `${t.accent}18`,
    );

    localStorage.setItem("portfolio-theme", themeKey);
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
