import type { MouseEvent } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Click handler for "/#section" links. When the section is on the current
 * page, scroll to it directly: the router ignores a click on the hash the URL
 * already has, so the link would do nothing after the user scrolls away.
 */
export function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
  const url = new URL(event.currentTarget.href);
  if (url.pathname !== window.location.pathname || !url.hash) return;

  const target = document.getElementById(url.hash.slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView();
  window.history.replaceState(window.history.state, "", url.hash);
}
