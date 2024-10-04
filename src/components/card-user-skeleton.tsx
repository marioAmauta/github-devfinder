import { Skeleton } from "@/components/ui/skeleton";

export function UserCardSkeleton() {
  return (
    <div className="custom-grid-areas rounded-2xl bg-primary px-6 py-10 shadow">
      <section className="section-logo">
        <Skeleton className="h-32 w-32 rounded-full" />
      </section>
      <section className="section-title">
        <Skeleton className="h-6 max-w-24 sm:max-w-32" />
        <Skeleton className="mt-2 h-6 max-w-16 sm:max-w-24" />
      </section>
      <Skeleton className="section-date h-6 max-w-32 sm:max-w-40" />
      <Skeleton className="section-description h-6 max-w-96" />
      <section className="section-data flex flex-wrap justify-evenly gap-2 rounded-lg bg-background py-6 xsm:justify-around">
        {Array.from({ length: 3 }).map((_, index) => (
          <article key={index} className="grid gap-2">
            <Skeleton className="h-6 w-16 sm:w-24" />
            <Skeleton className="h-6 w-6 justify-self-center sm:justify-self-start" />
          </article>
        ))}
      </section>
      <section className="section-contact">
        {Array.from({ length: 4 }).map((_, index) => (
          <article key={index} className="flex items-center gap-3">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 flex-grow" />
          </article>
        ))}
      </section>
    </div>
  );
}
