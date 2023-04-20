"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="ml-[2rem] w-[4.4rem] h-[4.4rem]"></span>;
  }

  return (
    <button
      aria-label={`use ${isDarkTheme ? "light" : "dark"} mode`}
      className="ml-[2rem] p-[1rem] flex"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
    >
      <FontAwesomeIcon
        icon={isDarkTheme ? faSun : faMoon}
        size="xl"
        className={`${
          isDarkTheme
            ? "text-sun hover:rotate-90"
            : "text-moon hover:-rotate-[30deg]"
        } transition-all duration-300 ease-in-out`}
      />
    </button>
  );
};
