import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { getPathForPage } from "@/lib/routes";

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  page: string;
  onNavigate: (page: string) => void;
  children: ReactNode;
}

export function AppLink({
  page,
  onNavigate,
  href,
  onClick,
  children,
  ...props
}: AppLinkProps) {
  const path = href ?? getPathForPage(page);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    onNavigate(page);
  };

  return (
    <a href={path} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
