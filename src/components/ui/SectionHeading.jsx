/**
 * SectionHeading — eyebrow + title + optional description, used to
 * open every major section. The eyebrow's leading index (01, 02...)
 * only appears when `index` is passed, since it should encode real
 * position in the page's narrative, not decorate every heading.
 */
export function SectionHeading({ index, eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-marker)]">
          {typeof index === "number" && (
            <span className="text-[var(--color-text-tertiary)]">
              {String(index).padStart(2, "0")} /
            </span>
          )}
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-[var(--font-display)] text-[2.5rem] sm:text-[3.6rem] font-semibold leading-[0.96] tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-[var(--color-text-secondary)] text-[15px] sm:text-base leading-8">{description}</p>
      )}
    </div>
  );
}
