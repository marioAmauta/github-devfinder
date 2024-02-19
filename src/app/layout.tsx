import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";
import { ReactNode } from "react";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Link from "next/link";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devfinder",
  description: "A Web App built with Nextjs to find developers on GitHub"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoMono.className} flex min-h-dynamic-screen flex-col items-center bg-primary-bg-light text-font-color-primary-light  dark:bg-primary-bg-dark dark:text-font-color-primary-dark`}
      >
        <Providers>
          <header className="w-full max-w-screen-lg">
            <nav className="flex items-center justify-between p-4">
              <Link href="/" className="text-xl font-bold text-inherit">
                devfinder
              </Link>
              <ThemeSwitch />
            </nav>
          </header>
          <main className="w-full max-w-screen-lg flex-grow space-y-6 p-3">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
