import { motion } from "framer-motion";
import {
  siJavascript,
  siTypescript,
  siPython,
  siOpenjdk,
  siHtml5,
  siCss,
  siReact,
  siVite,
  siTailwindcss,
  siChartdotjs,
  siLeaflet,
  siRedux,
  siMongodb,
  siMysql,
  siFirebase,
  siDocker,
  siKubernetes,
  siJenkins,
  siGithubactions,
} from "simple-icons";
import { technicalSkills } from "../data/profile";

const iconMap = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Python: siPython,
  Java: siOpenjdk,
  HTML5: siHtml5,
  CSS3: siCss,
  "React.js": siReact,
  Vite: siVite,
  "Tailwind CSS": siTailwindcss,
  "Chart.js": siChartdotjs,
  "Leaflet.js": siLeaflet,
  Redux: siRedux,
  MongoDB: siMongodb,
  MySQL: siMysql,
  "Firebase Firestore": siFirebase,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Jenkins: siJenkins,
  "GitHub Actions": siGithubactions,
  "CI/CD": null,
};

const normalizeSkills = () => ({
  languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
  frontend: technicalSkills.frontend,
  databases: technicalSkills.databases,
  devops: technicalSkills.devops,
});

const rows = [
  {
    key: "languages",
    label: "LANGUAGES",
    direction: "left",
    duration: 34,
  },
  {
    key: "frontend",
    label: "FRONTEND",
    direction: "right",
    duration: 38,
  },
  {
    key: "databases",
    label: "DATABASES",
    direction: "left",
    duration: 36,
  },
  {
    key: "devops",
    label: "DEVOPS",
    direction: "right",
    duration: 40,
  },
];

function BrandIcon({ name }) {
  const icon = iconMap[name];

  if (!icon) {
    return (
      <span className="tech-icon-fallback" aria-hidden="true">
        /
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
      className="tech-icon"
    >
      <path d={icon.path} />
    </svg>
  );
}

function SkillPill({ name }) {
  return (
    <div className="tech-pill">
      <BrandIcon name={name} />
      <span>{name}</span>
    </div>
  );
}

function SkillRow({ label, items, direction, duration }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="tech-row">
      <div className="tech-row-label">
        <span>{label}</span>
      </div>

      <div className="tech-marquee">
        <motion.div
          className="tech-track"
          animate={{
            x:
              direction === "left"
                ? ["0%", "-25%"]
                : ["-25%", "0%"],
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {repeated.map((item, index) => (
            <SkillPill key={`${item}-${index}`} name={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function TechnicalIdentity() {
  const skills = normalizeSkills();

  return (
    <section
      id="identity"
      aria-labelledby="technical-stack-heading"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <style>{`
        .tech-section-glow {
          position: absolute;
          pointer-events: none;
          width: 500px;
          height: 500px;
          border-radius: 999px;
          filter: blur(110px);
          opacity: 0.28;
        }

        .tech-glow-left {
          left: -320px;
          bottom: -100px;
          background: rgba(27, 161, 214, 0.7);
        }

        .tech-glow-right {
          right: -300px;
          top: -140px;
          background: rgba(27, 161, 214, 0.55);
        }

        .tech-header {
          position: relative;
          z-index: 2;
          max-width: 820px;
        }

        .tech-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          color: rgba(255,255,255,0.48);
          font-family: monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .tech-eyebrow-line {
          width: 42px;
          height: 1px;
          background: var(--color-signal);
        }

        .tech-heading {
          margin: 0;
          max-width: 760px;
          color: #f5f3ee;
          font-family: var(--font-display);
          font-size: clamp(2.7rem, 6vw, 5.6rem);
          font-weight: 650;
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .tech-description {
          max-width: 650px;
          margin-top: 22px;
          color: rgba(255,255,255,0.48);
          font-size: 15px;
          line-height: 1.8;
        }

        .tech-stack {
          position: relative;
          z-index: 3;
          margin-top: 72px;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 12px 0 16px;
        }

        .tech-row {
          display: flex;
          align-items: center;
          min-height: 68px;
          margin: 4px 0;
        }

        .tech-row-label {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 145px;
          min-width: 145px;
          padding-right: 22px;
          color: rgba(255,255,255,0.25);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          white-space: nowrap;
        }

        .tech-row-label::before {
          content: "";
          width: 18px;
          height: 1px;
          margin-right: 8px;
          background: rgba(255,255,255,0.18);
        }

        .tech-marquee {
          width: calc(100vw - 145px);
          overflow: hidden;
        }

        .tech-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 12px;
          will-change: transform;
        }

        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 18px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.065),
              rgba(255,255,255,0.025)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.055),
            0 10px 25px rgba(0,0,0,0.2);
          color: rgba(255,255,255,0.72);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .tech-pill:hover {
          border-color: rgba(255,103,61,0.55);
          background: rgba(255,103,61,0.08);
          color: #fff;
          transform: translateY(-2px);
        }

        .tech-icon {
          flex-shrink: 0;
          color: currentColor;
          opacity: 0.82;
        }

        .tech-icon-fallback {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 19px;
          height: 19px;
          border: 1px solid currentColor;
          border-radius: 50%;
          font-family: monospace;
          font-size: 11px;
          opacity: 0.7;
        }

        .tech-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
          color: rgba(255,255,255,0.25);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .tech-footer-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-signal);
          box-shadow: 0 0 10px rgba(255,103,61,0.55);
        }

        @media (max-width: 700px) {
          .tech-heading {
            font-size: clamp(2.5rem, 12vw, 4rem);
          }

          .tech-stack {
            margin-top: 52px;
          }

          .tech-row-label {
            width: 92px;
            min-width: 92px;
            padding-right: 10px;
            font-size: 7px;
          }

          .tech-row-label::before {
            display: none;
          }

          .tech-marquee {
            width: calc(100vw - 92px);
          }

          .tech-pill {
            min-height: 44px;
            padding: 0 14px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="tech-section-glow tech-glow-left" aria-hidden="true" />
      <div className="tech-section-glow tech-glow-right" aria-hidden="true" />

      <div className="section-wrap">
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="tech-eyebrow">
            <span className="tech-eyebrow-line" />
            Technical Stack
          </div>

          <h2 id="technical-stack-heading" className="tech-heading">
            The tools I use to build systems.
          </h2>

          <p className="tech-description">
            A practical stack across frontend, backend, databases, and
            deployment — the technologies I use to turn ideas into working
            products.
          </p>
        </motion.div>

        <motion.div
          className="tech-stack"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {rows.map((row) => (
            <SkillRow
              key={row.key}
              label={row.label}
              items={skills[row.key]}
              direction={row.direction}
              duration={row.duration}
            />
          ))}
        </motion.div>

        <div className="tech-footer">
          <span className="tech-footer-dot" />
          continuously learning, building, and shipping
        </div>
      </div>
    </section>
  );
}
