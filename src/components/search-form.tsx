"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";

type SearchFormProps = {
  searchParam: string;
};

export function SearchForm({ searchParam }: SearchFormProps) {
  const router = useRouter();

  const [search, setSearch] = useState(() => searchParam);
  const [debouncedSearch] = useDebounce(search, 500);

  const searchAction = useCallback(
    (q?: string) => {
      if (!q) {
        return;
      }

      router.push(`/?q=${q}`);
    },
    [router]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    searchAction(new FormData(event.currentTarget).get("q")?.toString());
  }

  useEffect(() => {
    searchAction(debouncedSearch);
  }, [debouncedSearch, searchAction]);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl bg-primary px-2 py-3 shadow">
      <SearchIcon className="ml-1 size-5 shrink-0 fill-accent" />
      <input
        type="search"
        name="q"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search GitHub username"
        className="w-full truncate bg-transparent text-inherit outline-none placeholder:text-inherit"
      />
      <Button type="submit" className="rounded-lg bg-accent px-3 py-2 text-white">
        Search
      </Button>
    </form>
  );
}
