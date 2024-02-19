"use client";

import { useFormState, useFormStatus } from "react-dom";
import { searchAction } from "../lib/actions";
import { SearchIcon } from "./Icons";

function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center gap-3 rounded-lg bg-custom-accent-color px-3 py-2 text-font-color-primary-dark ${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <span>Search</span>
      {pending ? <span className="loading loading-spinner loading-xs" /> : null}
    </button>
  );
}

export function SearchForm({ searchParam }: { searchParam: string }) {
  const [, formAction] = useFormState(searchAction, null);

  return (
    <form action={formAction} className="flex items-center justify-center gap-2 rounded-2xl bg-secondary-bg-light p-3 shadow dark:bg-secondary-bg-dark">
      <SearchIcon height="1.2rem" width="1.2rem" className="flex-shrink-0 fill-custom-accent-color" />
      <input
        name="search"
        type="search"
        placeholder="Search GitHub username..."
        className="search-input flex-grow truncate bg-transparent text-inherit outline-none placeholder:text-font-color-primary-light dark:placeholder:text-font-color-primary-dark sm:px-5"
        defaultValue={searchParam}
      />
      <SearchButton />
    </form>
  );
}
