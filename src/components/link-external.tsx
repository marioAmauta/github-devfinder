import Link from "next/link";
import { ComponentProps } from "react";

type LinkExternalProps = ComponentProps<typeof Link>;

export function LinkExternal({ href, children, className }: LinkExternalProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </Link>
  );
}
