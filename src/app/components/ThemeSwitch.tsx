"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeSwitchSkeleton } from "./ThemeSwitchSkeleton";
import { MoonIcon, SunIcon } from "./Icons";

type IconType = "light" | "dark";

function ThemeIcon({ iconType }: { iconType: IconType }) {
  if (iconType === "light") {
    return <SunIcon height="1.2rem" width="1.2rem" className="fill-font-color-primary-dark" />;
  }

  if (iconType === "dark") {
    return <MoonIcon height="1.2rem" width="1.2rem" className="fill-font-color-primary-light" />;
  }
}

function ThemeButton({ label, iconType, onClick }: { label: string; iconType: IconType; onClick: () => void }) {
  return (
    <button className="flex w-20 items-center justify-center gap-3" onClick={onClick}>
      <span className="select-none font-semibold uppercase text-inherit">{label}</span>
      <ThemeIcon iconType={iconType} />
    </button>
  );
}

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <ThemeSwitchSkeleton />;

  if (resolvedTheme === "dark") {
    return <ThemeButton label="Light" iconType="light" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <ThemeButton label="Dark" iconType="dark" onClick={() => setTheme("dark")} />;
  }
}
