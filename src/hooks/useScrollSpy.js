import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport
 * and returns its id, so the nav can highlight the active link.
 *
 * @param {string[]} sectionIds - ids of the sections to observe (without '#')
 * @param {object} [options]
 * @param {string} [options.rootMargin] - IntersectionObserver rootMargin
 */
export function useScrollSpy(sectionIds, { rootMargin = "-40% 0px -50% 0px" } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
