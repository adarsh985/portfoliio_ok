import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

/* ─── Custom cursor ────────────────────────────────────────────────
   Two-layer cursor: snappy orange dot + slightly lagged ring.
   Uses transform to position (avoids sub-pixel jitter from left/top).
   Hidden on touch devices via CSS (hover: none).
   ────────────────────────────────────────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Reset initial position off-screen
    dot.style.opacity  = "0";
    ring.style.opacity = "0";

    let raf;
    let rx = -100, ry = -100;
    let mx = -100, my = -100;
    let visible = false;

    function onMove(e) {
      if (!visible) {
        visible = true;
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
      }
      mx = e.clientX;
      my = e.clientY;
      // Direct translate — no calc(), no layout, runs on compositor
      dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    }

    function tick() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    }

    function onEnterLink() {
      dot.style.opacity    = "0.6";
      ring.style.width     = "52px";
      ring.style.height    = "52px";
      ring.style.borderColor = "rgba(255,106,61,0.85)";
    }

    function onLeaveLink() {
      dot.style.opacity    = "1";
      ring.style.width     = "36px";
      ring.style.height    = "36px";
      ring.style.borderColor = "rgba(255,106,61,0.5)";
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    // Use event delegation instead of per-element listeners
    function onDocEnter(e) {
      if (e.target.closest("a, button, [role='button']")) onEnterLink();
    }
    function onDocLeave(e) {
      if (e.target.closest("a, button, [role='button']")) onLeaveLink();
    }
    document.addEventListener("mouseover",  onDocEnter);
    document.addEventListener("mouseout",   onDocLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onDocEnter);
      document.removeEventListener("mouseout",   onDocLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <CustomCursor />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-[var(--color-signal)] focus:text-[#04120f] focus:px-4 focus:py-2 focus:rounded-[var(--radius-sm)] focus:font-medium"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
