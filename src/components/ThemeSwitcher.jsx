import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const swatchColors = {
  "dark-blue":   "#3b82f6",
  "dark-violet": "#7c3aed",
  "dark-orange": "#f97316",
  "dark-lime":   "#84cc16",
  "light":       "#f8fafc",
};

export default function ThemeSwitcher() {
  const { themeKey, setThemeKey } = useTheme();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 10px",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "999px",
    }}>
      {Object.entries(swatchColors).map(([key, color]) => (
        <motion.button
          key={key}
          onClick={() => setThemeKey(key)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={key}
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: color,
            border: themeKey === key
              ? `2px solid var(--accent)`
              : "2px solid transparent",
            outline: themeKey === key ? "2px solid var(--accent)" : "none",
            outlineOffset: "2px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        />
      ))}
    </div>
  );
}