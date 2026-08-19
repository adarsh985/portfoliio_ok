import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  GitMerge,
  Cloud,
} from "lucide-react";

/* Map stage ids → lucide icons */
const STAGE_ICONS = {
  frontend:       Monitor,
  backend:        Server,
  database:       Database,
  devops:         GitMerge,
  infrastructure: Cloud,
};

/* ─── Animated SVG connector ──────────────────────────────────────
   Draws the connecting line with an animated traveling dot that
   pulses along the path (CSS animation-based, no heavy deps).
   ────────────────────────────────────────────────────────────────── */
function PipelineConnector({ index, isActive, prefersReducedMotion }) {
  return (
    <>
      {/* Desktop: horizontal */}
      <div
        aria-hidden="true"
        className="hidden md:block relative h-px mx-1 shrink-0"
        style={{ width: "clamp(24px, 3vw, 48px)" }}
      >
        {/* Base track */}
        <div className="absolute inset-0 bg-[var(--color-border)]" />

        {/* Filled trace (scale-in on mount) */}
        <motion.div
          className="absolute inset-y-0 left-0 w-full origin-left"
          style={{ background: isActive ? "var(--color-signal)" : "var(--color-border-strong)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            delay:    prefersReducedMotion ? 0 : 0.15 * index + 0.25,
            ease:     [0.16, 1, 0.3, 1],
          }}
        />

        {/* Traveling pulse dot */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-signal)] shadow-[0_0_6px_2px_rgba(255,106,61,0.6)]"
            animate={{ left: ["-10%", "110%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration:   1.6,
              delay:      index * 0.35,
              repeat:     Infinity,
              ease:       "linear",
              times:      [0, 0.1, 0.9, 1],
            }}
          />
        )}
      </div>

      {/* Mobile: vertical */}
      <div aria-hidden="true" className="md:hidden relative w-px h-6 mx-auto">
        <div className="absolute inset-0 bg-[var(--color-border)]" />
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-[var(--color-signal)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.4,
            delay:    prefersReducedMotion ? 0 : 0.1 * index + 0.2,
            ease:     [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </>
  );
}

/* ─── Node button ────────────────────────────────────────────────── */
function NodeButton({ node, index, isOpen, onToggle }) {
  const Icon = STAGE_ICONS[node.id] ?? Server;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className={[
        "group flex-1 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-3",
        "text-left px-4 py-3.5 md:px-5 md:py-4 rounded-[var(--radius-md)] border",
        "transition-all duration-250",
        "focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-2",
        isOpen
          ? "border-[var(--color-signal)] bg-[var(--color-signal-wash)] shadow-[0_0_0_1px_rgba(255,106,61,0.15),0_8px_28px_rgba(255,106,61,0.10)]"
          : "border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--color-border-strong)] hover:bg-[rgba(255,255,255,0.035)]",
      ].join(" ")}
    >
      {/* Stage index */}
      <span
        className="hidden md:block font-mono text-[10px] tracking-[0.22em] text-[var(--color-text-tertiary)] mb-0.5"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <span
        className={[
          "shrink-0 flex items-center justify-center w-8 h-8 rounded-[var(--radius-sm)]",
          "transition-colors duration-200",
          isOpen
            ? "bg-[rgba(255,106,61,0.18)] text-[var(--color-signal)]"
            : "bg-[rgba(255,255,255,0.04)] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)]",
        ].join(" ")}
        aria-hidden="true"
      >
        <Icon size={16} strokeWidth={1.8} />
      </span>

      <span className="flex flex-col min-w-0">
        <span className="font-[var(--font-display)] font-medium text-sm text-[var(--color-text-primary)] leading-tight">
          {node.label}
        </span>
        <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] mt-0.5 leading-tight truncate">
          {node.tech.split(" · ")[0]}
        </span>
      </span>
    </button>
  );
}

/* ─── Main diagram ────────────────────────────────────────────────── */
export function ArchitectureDiagram({ nodes, defaultOpenId = null }) {
  const [openId, setOpenId]       = useState(defaultOpenId);
  const prefersReducedMotion       = useReducedMotion();
  const activeNode                 = nodes.find((n) => n.id === openId) ?? null;
  const activeIndex                = nodes.findIndex((n) => n.id === openId);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <div className="flex flex-col gap-5">
      {/* Pipeline chain */}
      <div
        role="list"
        aria-label="System architecture stages"
        className="flex flex-col md:flex-row items-stretch md:items-center gap-0"
      >
        {nodes.map((node, i) => (
          <div
            key={node.id}
            role="listitem"
            className="flex flex-col md:flex-row items-stretch md:items-center flex-1"
          >
            <NodeButton
              node={node}
              index={i}
              isOpen={openId === node.id}
              onToggle={() => toggle(node.id)}
            />
            {i < nodes.length - 1 && (
              <PipelineConnector
                index={i}
                isActive={i < activeIndex}
                prefersReducedMotion={!!prefersReducedMotion}
              />
            )}
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: prefersReducedMotion ? 0 : -6  }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(255,255,255,0.025)] px-6 py-5"
          >
            {/* Header row */}
            <div className="flex items-center gap-3 mb-3">
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-7 h-7 rounded-[var(--radius-xs)] bg-[rgba(255,106,61,0.15)] text-[var(--color-signal)]"
              >
                {(() => {
                  const Icon = STAGE_ICONS[activeNode.id] ?? Server;
                  return <Icon size={14} strokeWidth={2} />;
                })()}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-signal)]">
                {activeNode.label}
              </span>
              <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                ·
              </span>
              <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {activeNode.tech}
              </span>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              {activeNode.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No selection hint */}
      {!activeNode && (
        <p className="font-mono text-[10px] uppercase tracking-[0.20em] text-[var(--color-text-tertiary)] text-center py-2">
          Select a stage to inspect
        </p>
      )}
    </div>
  );
}
