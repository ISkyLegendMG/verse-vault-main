import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("poetry-theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("poetry-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("poetry-theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      className="relative w-12 h-6 rounded-full border border-border bg-muted flex items-center transition-all duration-300 hover:border-gold hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      <span
        className="absolute w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center shadow-sm transition-all duration-300"
        style={{ left: dark ? "calc(100% - 22px)" : "2px" }}
      >
        {dark ? (
          <Moon size={11} className="text-midnight" />
        ) : (
          <Sun size={11} className="text-midnight" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
