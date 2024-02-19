export function validateURL(url: string) {
  if (!url) return "";

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  return url;
}

export async function getUser(searchQuery: string) {
  if (!searchQuery) return { message: "Search for a User" };

  try {
    const res = await fetch(`https://api.github.com/users/${searchQuery}`, { cache: "no-store" });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export function formatDate({ date, locale, options = {} }: { date: Date; locale: string; options: Intl.DateTimeFormatOptions }) {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
