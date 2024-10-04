import React, { Suspense } from "react";

import { UserCard } from "@/components/card-user";
import { UserCardSkeleton } from "@/components/card-user-skeleton";
import { SearchForm } from "@/components/search-form";

type HomePageProps = {
  searchParams: { q?: string };
};

export default function HomePage({ searchParams }: HomePageProps) {
  const q = searchParams.q ?? "";

  return (
    <>
      <SearchForm searchParam={q} />
      <Suspense key={q} fallback={<UserCardSkeleton />}>
        <UserCard searchQuery={q} />
      </Suspense>
    </>
  );
}
