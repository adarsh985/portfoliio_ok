import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navLinks, profile } from "../data/profile";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = navLinks
  .filter((link) => link.href.startsWith("#"))
  .map((link) => link.href.slice(1));

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId               = useScrollSpy(sectionIds);
  const prefersReducedMotion   = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(12,14,18,0.88)] backdrop-blur-sm border-b border-[rgba(255,255,255,0.065)] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-5 sm:px-8 h-[4.5rem] flex items-center justify-between gap-4"
      >
        {/* Wordmark */}
        <a
          href="#top"
          className="font-[var(--font-display)] text-base sm:text-[1.05rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-4 rounded-[var(--radius-xs)] transition-opacity hover:opacity-80"
        >
          Aadarsh<span className="text-[var(--color-marker)]">.</span>
        </a>

        {/* Desktop pill nav */}
        <ul className="hidden md:flex items-center gap-0.5 rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.025)] px-1.5 py-1 backdrop-blur-sm">
          {navLinks.map((link) => {
            const id       = link.href.startsWith("#") ? link.href.slice(1) : null;
            const isActive = id !== null && id === activeId;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={[
                    "relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    "focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2",
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                  ].join(" ")}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[rgba(255,106,61,0.13)] border border-[rgba(255,106,61,0.22)]"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 400, damping: 32 }
                      }
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[var(--color-border)] rounded-full text-[var(--color-text-primary)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] hover:bg-[rgba(255,106,61,0.05)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2"
        >
          GitHub
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.06)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={prefersReducedMotion ? false : { opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={prefersReducedMotion ? false : { opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.18 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:hidden overflow-hidden bg-[var(--color-bg-raised)] border-b border-[var(--color-border)] backdrop-blur-xl"
          >
            <ul className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link, idx) => {
                const id       = link.href.startsWith("#") ? link.href.slice(1) : null;
                const isActive = id !== null && id === activeId;
                return (
                  <motion.li
                    key={link.label}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={() => setOpen(false)}
                      className={[
                        "flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-[var(--radius-md)] transition-colors",
                        "focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2",
                        isActive
                          ? "text-[var(--color-text-primary)] bg-[rgba(255,106,61,0.08)] border border-[rgba(255,106,61,0.18)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]",
                      ].join(" ")}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)]" aria-hidden="true" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                className="pt-3"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05, duration: 0.22 }}
              >
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border-strong)] rounded-[var(--radius-md)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2"
                >
                  View GitHub
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
