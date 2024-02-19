import { Suspense } from "react";
import { UserCard } from "./components/UserCard";
import { SearchForm } from "./components/SearchForm";
import { UserCardSkeleton } from "./components/UserCardSkeleton";

export default async function HomePage({
  searchParams
}: {
  searchParams: {
    user?: string;
  };
}) {
  const search = searchParams.user ?? "";

  return (
    <>
      <SearchForm searchParam={search} />
      <Suspense key={search} fallback={<UserCardSkeleton />}>
        <UserCard searchQuery={search} />
      </Suspense>
    </>
  );
}
