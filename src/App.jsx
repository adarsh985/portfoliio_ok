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
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
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
