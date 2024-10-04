import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateURL(url: string) {
  if (!url) {
    return "";
  }

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  return url;
}

export function formatDate({
  date,
  locale,
  options = {}
}: {
  date: Date;
  locale: Intl.LocalesArgument;
  options: Intl.DateTimeFormatOptions;
}) {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
