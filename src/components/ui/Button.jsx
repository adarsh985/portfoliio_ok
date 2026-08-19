import { forwardRef } from "react";

const VARIANTS = {
  primary: [
    "bg-[var(--color-signal)] text-[#0d0f13] font-semibold",
    "shadow-[0_0_0_1px_rgba(255,106,61,0.2),0_4px_16px_rgba(255,106,61,0.20)]",
    "hover:bg-[hsl(18,100%,62%)] hover:shadow-[0_0_0_1px_rgba(255,106,61,0.3),0_6px_24px_rgba(255,106,61,0.28)]",
    "active:scale-[0.975] active:shadow-[0_0_0_1px_rgba(255,106,61,0.25),0_2px_8px_rgba(255,106,61,0.18)]",
  ].join(" "),

  secondary: [
    "bg-transparent text-[var(--color-text-primary)] font-medium",
    "border border-[var(--color-border-strong)]",
    "hover:border-[var(--color-signal)] hover:bg-[rgba(255,106,61,0.05)] hover:text-[var(--color-signal)]",
    "active:scale-[0.975]",
  ].join(" "),

  ghost: [
    "bg-transparent text-[var(--color-text-secondary)] font-medium",
    "hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.05)]",
    "active:scale-[0.975]",
  ].join(" "),
};

const SIZES = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3.5 text-[15px] gap-2",
};

/**
 * Button — renders as <a> when `href` is provided, otherwise <button>.
 * All four states (default / hover / active / focus-visible) are distinct.
 */
export const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    external,
    icon: Icon,
    iconPosition = "right",
    className = "",
    children,
    ...props
  },
  ref
) {
  const classes = [
    "inline-flex items-center justify-center",
    "rounded-[var(--radius-sm)]",
    "transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-200",
    "focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-3",
    VARIANTS[variant],
    SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left"  && <Icon size={15} strokeWidth={2} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={15} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  );
});
