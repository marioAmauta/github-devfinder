import { Skeleton } from "@/components/ui/skeleton";

export function ThemeSwitchSkeleton() {
  return (
    <div className="flex w-20 gap-4">
      <Skeleton className="h-5 w-12 rounded-full" />
      <Skeleton className="h-5 w-5" />
    </div>
  );
}
