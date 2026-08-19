import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="section-band mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="font-[var(--font-display)] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-primary)]">
            {profile.name}
          </span>
          <span className="text-sm text-[var(--color-text-tertiary)] font-mono">
            {profile.role} / {profile.focus.join(" / ")}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-signal)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2 rounded-sm"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-signal)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2 rounded-sm"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={profile.links.email}
            aria-label="Send an email"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-signal)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2 rounded-sm"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
