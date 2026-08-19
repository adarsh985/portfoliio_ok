import { Mail, FileText } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-band py-24 sm:py-28">
      <div className="section-wrap">
        <div className="paper-panel contact-frame rounded-[var(--radius-lg)] px-6 py-8 sm:px-10 sm:py-10">
          <div id="contact-heading" className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Get in touch"
                title="Open to internship opportunities"
                description={`Based in ${profile.location}. The fastest way to reach me is email — I usually reply within a day.`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button href={profile.links.email} variant="primary" size="lg" icon={Mail}>
                Email me
              </Button>
              <Button href={profile.links.linkedin} external variant="secondary" size="lg" icon={LinkedinIcon}>
                LinkedIn
              </Button>
              <Button href={profile.links.github} external variant="secondary" size="lg" icon={GithubIcon}>
                GitHub
              </Button>
              <Button href={profile.links.resume} external variant="ghost" size="lg" icon={FileText}>
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
