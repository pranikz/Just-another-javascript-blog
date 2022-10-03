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
      className="w-12 h-10  dark:bg-slate-800 flex items-center justify-center  hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="text-white w-5 h-5" />
      ) : (
        <SunIcon className="text-js-yellow w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
