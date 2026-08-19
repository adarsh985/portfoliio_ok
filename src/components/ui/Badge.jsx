const TONES = {
  neutral: "border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-secondary)]",
  signal: "border-[var(--color-signal-dim)] text-[var(--color-signal)] bg-[var(--color-signal-wash)]",
};

/**
 * Badge — small mono-set label used for tech tags, status markers,
 * and eyebrow text. Reusable across project cards, case studies, and
 * the GitHub section.
 */
export function Badge({ tone = "neutral", children, className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center rounded-[var(--radius-sm)] border
        px-2.5 py-1 text-[11px] font-mono tracking-tight
        ${TONES[tone]} ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}
