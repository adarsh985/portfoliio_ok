import { Mail, ArrowUpRight, FileText } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-band relative overflow-hidden py-24 sm:py-32"
    >
      <style>{`
        .contact-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 999px;
          background: rgba(255, 103, 61, 0.08);
          filter: blur(100px);
          pointer-events: none;
          right: -220px;
          bottom: -220px;
        }

        .contact-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.25;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
        }

        .contact-frame {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.10);
          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.045),
              rgba(255,255,255,0.012) 55%,
              rgba(255,103,61,0.025)
            ),
            rgba(10,10,10,0.72);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 35px 90px rgba(0,0,0,0.30);
        }

        .contact-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 180px;
          height: 1px;
          background: linear-gradient(90deg, var(--color-signal), transparent);
        }

        .contact-meta {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 18px;
          color: rgba(255,255,255,0.35);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .contact-meta-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-signal);
          box-shadow: 0 0 12px rgba(255,103,61,0.55);
        }

        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          width: fit-content;
          margin-top: 26px;
          padding: 13px 16px;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 12px;
          background: rgba(255,255,255,0.025);
          color: rgba(255,255,255,0.72);
          transition: all 200ms ease;
        }

        .contact-email:hover {
          transform: translateY(-2px);
          border-color: rgba(255,103,61,0.45);
          background: rgba(255,103,61,0.055);
          color: #fff;
        }

        .contact-email-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 9px;
          color: var(--color-signal);
          background: rgba(255,255,255,0.025);
        }

        .contact-email-label {
          display: block;
          margin-bottom: 2px;
          color: rgba(255,255,255,0.30);
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .contact-email-address {
          display: block;
          font-size: 13px;
          font-weight: 500;
        }

        .contact-arrow {
          margin-left: 4px;
          opacity: 0.35;
          transition: transform 200ms ease, opacity 200ms ease;
        }

        .contact-email:hover .contact-arrow {
          transform: translate(2px, -2px);
          opacity: 0.8;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .contact-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 34px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.25);
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        @media (max-width: 700px) {
          .contact-actions {
            justify-content: flex-start;
          }

          .contact-email {
            width: 100%;
          }

          .contact-email-address {
            font-size: 12px;
          }

          .contact-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-glow" aria-hidden="true" />

      <div className="section-wrap">
        <div className="contact-frame rounded-[var(--radius-lg)] px-6 py-8 sm:px-10 sm:py-12">
          <div className="contact-accent" aria-hidden="true" />

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <div className="contact-meta">
                <span className="contact-meta-dot" />
                Get in touch
              </div>

              <SectionHeading
                eyebrow=""
                title="Let's build something useful."
                description={`Based in ${profile.location}. Open to internship opportunities, engineering projects, and conversations about building better software.`}
              />

              <a
                href="mailto:58adarshvimalsingh@gmail.com"
                className="contact-email"
                aria-label="Send an email to Aadarsh Singh"
              >
                <span className="contact-email-icon">
                  <Mail size={16} />
                </span>

                <span>
                  <span className="contact-email-label">Direct email</span>
                  <span className="contact-email-address">
                    58adarshvimalsingh@gmail.com
                  </span>
                </span>

                <ArrowUpRight size={15} className="contact-arrow" />
              </a>
            </div>

            <div className="contact-actions">
              <Button
                href={profile.links.linkedin}
                external
                variant="secondary"
                size="lg"
                icon={LinkedinIcon}
              >
                LinkedIn
              </Button>

              <Button
                href={profile.links.github}
                external
                variant="secondary"
                size="lg"
                icon={GithubIcon}
              >
                GitHub
              </Button>

              <Button
                href={profile.links.resume}
                external
                variant="ghost"
                size="lg"
                icon={FileText}
              >
                Resume
              </Button>
            </div>
          </div>

          <div className="contact-bottom">
            <span>Available for opportunities</span>
            <span>58adarshvimalsingh@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
