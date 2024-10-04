import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto_Mono } from "next/font/google";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { Header } from "@/components/layout/header";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devfinder",
  description: "A Web App built with Nextjs to find developers on GitHub"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(robotoMono.className, "flex min-h-dynamic-screen flex-col items-center")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="w-full max-w-screen-lg flex-grow space-y-6 p-3">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
