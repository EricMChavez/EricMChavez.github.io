"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useActiveSection() {
  // Tagged with the route it was observed on, so a stale value from the
  // previous page is ignored without resetting state inside the effect.
  const [active, setActive] = useState({ pathname: "", sectionId: "" });
  const pathname = usePathname();

  // The navbar lives in the root layout and never remounts, so re-query the
  // sections on every route change instead of observing stale elements.
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId) {
              setActive({ pathname, sectionId });
            }
          }
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return active.pathname === pathname ? active.sectionId : "";
}
