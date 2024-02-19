export function ThemeSwitchSkeleton() {
  return (
    <div className="flex w-20 gap-4">
      <div className="skeleton h-5 w-12 rounded-full bg-secondary-bg-light dark:bg-secondary-bg-dark" />
      <div className="skeleton h-5 w-5 bg-secondary-bg-light dark:bg-secondary-bg-dark" />
    </div>
  );
}
