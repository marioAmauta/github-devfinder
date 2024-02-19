export function UserCardSkeleton() {
  return (
    <div className="custom-grid-areas skeleton w-full rounded-2xl bg-secondary-bg-light p-6 shadow dark:bg-secondary-bg-dark sm:p-12 xsm:p-10">
      <div className="section-logo">
        <div className="skeleton h-32 w-32 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark" />
      </div>
      <div className="section-title">
        <div className="skeleton h-6 w-24 bg-primary-bg-light dark:bg-primary-bg-dark sm:w-32" />
        <div className="skeleton mt-2 h-6 w-16 bg-primary-bg-light dark:bg-primary-bg-dark sm:w-24" />
      </div>
      <div className="section-date skeleton h-6 w-24 bg-primary-bg-light dark:bg-primary-bg-dark sm:w-40" />
      <div className="section-description skeleton h-6 w-48 bg-primary-bg-light dark:bg-primary-bg-dark" />
      <div className="section-data skeleton flex justify-evenly rounded-lg bg-primary-bg-light py-6  dark:bg-primary-bg-dark xsm:justify-around">
        <article>
          <div className="skeleton h-6 w-16 bg-primary-bg-light dark:bg-secondary-bg-dark sm:w-20"></div>
          <div className="skeleton mx-auto mt-2 h-6 w-6 bg-primary-bg-light dark:bg-secondary-bg-dark"></div>
        </article>
        <article>
          <div className="skeleton h-6 w-16 bg-primary-bg-light dark:bg-secondary-bg-dark sm:w-20"></div>
          <div className="skeleton mx-auto mt-2 h-6 w-6 bg-primary-bg-light dark:bg-secondary-bg-dark"></div>
        </article>
        <article>
          <div className="skeleton h-6 w-16 bg-primary-bg-light dark:bg-secondary-bg-dark sm:w-20"></div>
          <div className="skeleton mx-auto mt-2 h-6 w-6 bg-primary-bg-light dark:bg-secondary-bg-dark"></div>
        </article>
      </div>
      <div className="section-contact">
        <section className="flex flex-col gap-4">
          <article className="flex items-center gap-3">
            <div className="skeleton h-6 w-6 bg-primary-bg-light dark:bg-primary-bg-dark"></div>
            <div className="skeleton h-6 flex-grow bg-primary-bg-light dark:bg-primary-bg-dark"></div>
          </article>
          <article className="flex items-center gap-3">
            <div className="skeleton h-6 w-6 bg-primary-bg-light dark:bg-primary-bg-dark"></div>
            <div className="skeleton h-6 flex-grow bg-primary-bg-light dark:bg-primary-bg-dark"></div>
          </article>
        </section>
        <section className="flex flex-col gap-4">
          <article className="flex items-center gap-3">
            <div className="skeleton h-6 w-6 bg-primary-bg-light dark:bg-primary-bg-dark"></div>
            <div className="skeleton h-6 flex-grow bg-primary-bg-light dark:bg-primary-bg-dark"></div>
          </article>
          <article className="flex items-center gap-3">
            <div className="skeleton h-6 w-6 bg-primary-bg-light dark:bg-primary-bg-dark"></div>
            <div className="skeleton h-6 flex-grow bg-primary-bg-light dark:bg-primary-bg-dark"></div>
          </article>
        </section>
      </div>
    </div>
  );
}
