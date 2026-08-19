import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";
import { GithubIcon } from "../components/ui/BrandIcons";
import { profile } from "../data/profile";

/* ─── Animation variants ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const railItem = {
  hidden: { opacity: 0, x: 18 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const railContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.55 } },
};

/* ─── SVG circuit-board background ──────────────────────────────── */
function CircuitBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Horizontal traces */}
          <line x1="0" y1="30" x2="40" y2="30" stroke="#ff6a3d" strokeWidth="0.8" />
          <line x1="60" y1="30" x2="120" y2="30" stroke="#ff6a3d" strokeWidth="0.8" />
          <line x1="0" y1="90" x2="30" y2="90" stroke="#3b8eea" strokeWidth="0.8" />
          <line x1="80" y1="90" x2="120" y2="90" stroke="#3b8eea" strokeWidth="0.8" />
          {/* Vertical traces */}
          <line x1="60" y1="0" x2="60" y2="20" stroke="#ff6a3d" strokeWidth="0.8" />
          <line x1="60" y1="40" x2="60" y2="80" stroke="#ff6a3d" strokeWidth="0.8" />
          <line x1="60" y1="100" x2="60" y2="120" stroke="#ff6a3d" strokeWidth="0.8" />
          <line x1="30" y1="90" x2="30" y2="120" stroke="#3b8eea" strokeWidth="0.8" />
          <line x1="80" y1="0" x2="80" y2="60" stroke="#3b8eea" strokeWidth="0.8" />
          {/* Nodes */}
          <circle cx="60" cy="30" r="3" fill="none" stroke="#ff6a3d" strokeWidth="0.8" />
          <circle cx="60" cy="30" r="1.2" fill="#ff6a3d" />
          <circle cx="30" cy="90" r="3" fill="none" stroke="#3b8eea" strokeWidth="0.8" />
          <circle cx="30" cy="90" r="1.2" fill="#3b8eea" />
          <circle cx="80" cy="60" r="2.5" fill="none" stroke="#d8ff62" strokeWidth="0.8" />
          <circle cx="80" cy="60" r="1" fill="#d8ff62" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

/* ─── Animated SVG node diagram (hero right accent) ─────────────── */
function HeroNodeDiagram({ reduced }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-h-[90px] opacity-60"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Connecting lines */}
      <line x1="40" y1="60" x2="80" y2="60" stroke="#2c3344" strokeWidth="1" />
      <line x1="110" y1="60" x2="150" y2="60" stroke="#2c3344" strokeWidth="1" />
      <line x1="180" y1="60" x2="220" y2="60" stroke="#2c3344" strokeWidth="1" />

      {/* Animated trace on first connector */}
      {!reduced && (
        <motion.line
          x1="40" y1="60" x2="80" y2="60"
          stroke="#ff6a3d" strokeWidth="1.5"
          strokeDasharray="4 36"
          animate={{ strokeDashoffset: [40, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      )}
      {!reduced && (
        <motion.line
          x1="110" y1="60" x2="150" y2="60"
          stroke="#3b8eea" strokeWidth="1.5"
          strokeDasharray="4 36"
          animate={{ strokeDashoffset: [40, 0] }}
          transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, ease: "linear" }}
        />
      )}
      {!reduced && (
        <motion.line
          x1="180" y1="60" x2="220" y2="60"
          stroke="#d8ff62" strokeWidth="1.5"
          strokeDasharray="4 36"
          animate={{ strokeDashoffset: [40, 0] }}
          transition={{ duration: 1.2, delay: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Nodes */}
      {[
        { cx: 30, cy: 60, label: "UI", color: "#ff6a3d", delay: 0 },
        { cx: 95, cy: 60, label: "API", color: "#f2ede4", delay: 0.2 },
        { cx: 165, cy: 60, label: "DB", color: "#3b8eea", delay: 0.4 },
        { cx: 230, cy: 60, label: "K8s", color: "#d8ff62", delay: 0.6 },
      ].map(({ cx, cy, label, color, delay }) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r="14" fill="#1e2433" stroke="#2c3344" strokeWidth="1" />
          {!reduced ? (
            <motion.circle
              cx={cx} cy={cy} r="14"
              fill="none" stroke={color} strokeWidth="1"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <circle cx={cx} cy={cy} r="14" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
          )}
          <text
            x={cx} y={cy + 4}
            textAnchor="middle"
            fill={color}
            fontSize="8"
            fontFamily="IBM Plex Mono, monospace"
            fontWeight="500"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─── Hero component ─────────────────────────────────────────────── */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const variants    = prefersReducedMotion ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : container;
  const itemV       = prefersReducedMotion ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : item;
  const railV       = prefersReducedMotion ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : railContainer;
  const railItemV   = prefersReducedMotion ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : railItem;

  return (
    <section
      id="top"
      className="relative bg-trace-grid overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* Circuit board background */}
      <CircuitBackground />

      {/* Noise overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-noise" />

      {/* Orange spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none hero-spotlight"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scanline sweep */}
      {!prefersReducedMotion && (
        <div aria-hidden="true" className="pointer-events-none hero-scanline" />
      )}

      {/* Bottom fade-to-bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
      />

      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 sm:px-8"
      >
        <div className="hero-frame rounded-[var(--radius-lg)] px-5 py-7 sm:px-8 sm:py-9">
          <motion.div
            className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.6fr)] lg:items-end"
            variants={variants}
          >
            {/* ── Left column ─────────────────────────────────────── */}
            <div className="flex flex-col items-start gap-7 text-left">

              {/* Availability pill */}
              <motion.div variants={itemV} className="hero-status signal-pill rounded-full">
                {profile.availability}
              </motion.div>

              {/* Label + hero name */}
              <motion.div variants={itemV} className="space-y-4">
                <p className="cut-label">
                  <Sparkles size={13} className="mr-1 inline-block align-[-2px]" />
                  Engineered to feel authored
                </p>
                <h1
                  className="hero-name-break font-[var(--font-display)] font-semibold"
                  style={{
                    fontSize:      "clamp(3.6rem, 11vw, 8rem)",
                    lineHeight:    "0.84",
                    letterSpacing: "-0.05em",
                  }}
                >
                  <span className="title-echo" data-text="Aadarsh">Aadarsh</span>
                  <span className="title-echo" data-text="Singh">Singh</span>
                </h1>
              </motion.div>

              {/* Role */}
              <motion.p
                variants={itemV}
                className="font-[var(--font-display)] leading-tight text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(1.2rem, 3.2vw, 2rem)" }}
              >
                {profile.role}
              </motion.p>

              {/* Statement */}
              <motion.p
                variants={itemV}
                className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg"
              >
                {profile.statement}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemV}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                >
                  <Button href="#projects" variant="primary" size="lg" icon={ArrowRight}>
                    Explore Projects
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                >
                  <Button
                    href={profile.links.github}
                    external
                    variant="secondary"
                    size="lg"
                    icon={GithubIcon}
                  >
                    View GitHub
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                >
                  <Button
                    href={profile.links.resume}
                    external
                    variant="ghost"
                    size="lg"
                    icon={FileText}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* ── Right rail ──────────────────────────────────────── */}
            <motion.div
              variants={railV}
              className="hero-rail"
            >
              {/* Mini node diagram */}
              <motion.div variants={railItemV} className="paper-panel rounded-[var(--radius-md)] p-4">
                <div className="grid-caption mb-3">System view</div>
                <HeroNodeDiagram reduced={!!prefersReducedMotion} />
              </motion.div>

              {/* Location */}
              <motion.div variants={railItemV} className="paper-panel rounded-[var(--radius-md)] p-4 sm:p-5">
                <div className="grid-caption">Location</div>
                <p className="mt-2.5 text-base leading-6 text-[var(--color-text-primary)]">
                  {profile.location}
                </p>
              </motion.div>

              {/* Primary focus */}
              <motion.div variants={railItemV} className="paper-panel rounded-[var(--radius-md)] p-4 sm:p-5">
                <div className="grid-caption">Primary focus</div>
                <div className="mt-3 space-y-2.5">
                  {profile.focus.map((focusItem, index) => (
                    <div
                      key={focusItem}
                      className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-2.5"
                    >
                      <span className="text-sm text-[var(--color-text-primary)]">{focusItem}</span>
                      <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Current signal */}
              <motion.div variants={railItemV} className="paper-panel rounded-[var(--radius-md)] p-4 sm:p-5">
                <div className="grid-caption">Current signal</div>
                <div className="mt-3 border-l-2 border-[var(--color-marker)] pl-4">
                  <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                    Building full-stack systems with deployment depth, monitoring discipline, and
                    product-level execution.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
