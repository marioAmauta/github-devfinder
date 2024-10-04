import Link from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

export function Header() {
  return (
    <header className="flex w-full max-w-screen-lg items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold text-inherit">
        devfinder
      </Link>
      <ThemeSwitch />
    </header>
  );
}
