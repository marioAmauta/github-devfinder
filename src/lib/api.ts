export async function getUser(searchQuery: string) {
  if (!searchQuery) {
    return {
      message: "Search for a User"
    };
  }

  try {
    return (await fetch(`https://api.github.com/users/${searchQuery}`, { cache: "no-store" })).json();
  } catch (error) {
    console.error(error);
  }
}
