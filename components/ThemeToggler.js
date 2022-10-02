import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../components/assets/icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-12 h-10 bg-blue-100 border-2 dark:bg-slate-800 flex items-center justify-center shadow-offset-black hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="text-blue-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-blue-400 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
