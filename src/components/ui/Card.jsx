import { useRef } from "react";

/**
 * Card — base surface used by project cards, GitHub repo cards,
 * decision cards. Uses CSS perspective tilt on hover for the
 * "premium" feel without heavy JS.
 */
export function Card({ as: Tag = "div", interactive = false, tilt = false, className = "", children, ...props }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    if (!tilt || !cardRef.current) return;
    const rect   = cardRef.current.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const centerX = rect.width  / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) *  3;
    cardRef.current.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  }

  function handleMouseLeave() {
    if (!tilt || !cardRef.current) return;
    cardRef.current.style.transform = "";
  }

  const interactiveClasses = interactive
    ? [
        "cursor-pointer",
        "transition-[border-color,background-color,box-shadow,transform] duration-250",
        "hover:border-[var(--color-signal)]",
        "hover:bg-[var(--color-surface-hover)]",
        "hover:shadow-[0_28px_70px_rgba(0,0,0,0.30),0_0_0_1px_rgba(255,106,61,0.08)]",
      ].join(" ")
    : "";

  return (
    <Tag
      ref={cardRef}
      className={[
        "paper-panel bg-[var(--color-surface)] border border-[var(--color-border)]",
        "rounded-[var(--radius-lg)]",
        tilt ? "tilt-card" : "",
        interactiveClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseMove={tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
