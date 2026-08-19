import { motion } from "framer-motion";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { SectionHeading } from "../components/ui/SectionHeading";
import { identityNodes } from "../data/profile";

export function TechnicalIdentity() {
  return (
    <section
      id="identity"
      aria-labelledby="identity-heading"
      className="section-band py-24 sm:py-32"
    >
      <div className="section-wrap">
        {/* Full-width heading above the split — breaks the repeated sidebar rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="How I think about systems"
            title="Frontend to cloud, one continuous chain"
            description="Every project below moves through the same stages — click a stage to see what I actually work with at that layer."
          />
        </motion.div>

        {/* Pipeline visual — full width, elevated panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[var(--radius-xl)] border border-[var(--color-border)] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%), var(--color-surface)",
            boxShadow: "0 2px 0 rgba(255,255,255,0.04) inset, 0 40px 100px rgba(0,0,0,0.28)",
          }}
        >
          {/* Corner accent lines */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-32 h-px"
            style={{ background: "linear-gradient(90deg, var(--color-signal), transparent)" }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-24 h-px"
            style={{ background: "linear-gradient(270deg, var(--color-foil), transparent)" }}
          />

          {/* Section label — top right metadata */}
          <div className="absolute top-4 right-5 hidden sm:block">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-text-tertiary)]">
              System view
            </span>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            {/* Sidebar context — inline, not in the section-split layout */}
            <p className="text-xs font-mono uppercase tracking-[0.20em] text-[var(--color-text-tertiary)] mb-6 max-w-lg">
              Frontend, backend, data, deployment, and infrastructure are treated as one connected system.
            </p>

            <ArchitectureDiagram nodes={identityNodes} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
