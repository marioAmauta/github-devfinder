import { redirect } from "next/navigation";
import { SearchIcon } from "./Icons";

export function SearchForm({ searchParam }: { searchParam: string }) {
  async function searchAction(formData: FormData) {
    "use server";

    if (!formData.get("search")) redirect("/");

    redirect(`/?user=${formData.get("search")}`);
  }

  return (
    <form action={searchAction} className="flex items-center justify-center gap-2 rounded-2xl bg-secondary-bg-light p-3 shadow dark:bg-secondary-bg-dark">
      <SearchIcon height="1.2rem" width="1.2rem" className="flex-shrink-0 fill-custom-accent-color" />
      <input
        name="search"
        type="search"
        placeholder="Search GitHub username..."
        className="search-input flex-grow truncate bg-transparent text-inherit outline-none placeholder:text-font-color-primary-light dark:placeholder:text-font-color-primary-dark sm:px-5"
        defaultValue={searchParam}
      />
      <button className="rounded-lg bg-custom-accent-color px-3 py-2 text-font-color-primary-dark">Search</button>
    </form>
  );
}
