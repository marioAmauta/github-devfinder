"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ThemeSwitchSkeleton } from "@/components/theme-switch-skeleton";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

type IconType = "light" | "dark";

function ThemeIcon({ iconType }: { iconType: IconType }) {
  if (iconType === "light") {
    return <SunIcon className="size-5 fill-foreground" />;
  }

  if (iconType === "dark") {
    return <MoonIcon className="size-5 fill-foreground" />;
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

  if (!mounted) {
    return <ThemeSwitchSkeleton />;
  }

  if (resolvedTheme === "dark") {
    return <ThemeButton label="Light" iconType="light" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <ThemeButton label="Dark" iconType="dark" onClick={() => setTheme("dark")} />;
  }

  return null;
}
