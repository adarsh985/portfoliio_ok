import { useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const decisions = [
  {
    problem: "How to handle global real-time data updates across distributed microservices?",
    options: "Polling API, WebSockets, Message Queue, Event Streaming",
    chosen: "Kubernetes + Prometheus Scraping + Event-Driven Architecture",
    reasoning: "Prometheus scrapes metrics every 10s, enabling real-time monitoring and historical trend analysis. For critical alerts, event-driven messaging ensures no data loss.",
    tradeoff: "Slightly higher latency than pure WebSockets, but gained reliability, auditability, and easier debugging through centralized metrics.",
    project: "GlobalMedX",
  },
  {
    problem: "Database choice for pandemic surveillance data with high write throughput",
    options: "SQL (PostgreSQL), NoSQL (MongoDB), Time-Series DB (InfluxDB)",
    chosen: "MongoDB Replica Sets + Sharding",
    reasoning: "MongoDB's flexible schema handles heterogeneous epidemiological data. Replica sets ensure high availability; sharding enables horizontal scaling for millions of daily records.",
    tradeoff: "Trading ACID compliance for availability. Implemented application-level consistency checks and eventual consistency patterns.",
    project: "GlobalMedX",
  },
  {
    problem: "Secrets management for production credentials (DB URI, JWT signing keys)",
    options: "Environment variables, .env files, Secrets Manager, Vault",
    chosen: "HashiCorp Vault with auto-rotation",
    reasoning: "Vault provides encryption at rest, automatic credential rotation, and audit logs. Backend authenticates on startup, never storing credentials in code or config files.",
    tradeoff: "Additional operational complexity. Worth it for security-critical systems handling health data.",
    project: "GlobalMedX",
  },
  {
    problem: "Real-time geospatial clustering for thousands of concurrent accident reports",
    options: "Naive O(n²) comparison, KD-tree, Grid hashing, DBSCAN",
    chosen: "Spatial grid hashing + DBSCAN-like clustering",
    reasoning: "Grid divides the map into cells; accidents in adjacent cells are checked for clustering. Reduces complexity from O(n²) to O(n). DBSCAN-like algorithm detects dense regions naturally.",
    tradeoff: "Grid size tuning is critical. Too small means many cells; too large can miss clusters. Settled on dynamic grid sizing based on city density.",
    project: "Accident Hotspot Notifier",
  },
  {
    problem: "How to prioritize emergency response when resources are limited?",
    options: "FIFO queue, Priority queue (severity only), Multi-factor ranking",
    chosen: "Min-heap priority queue with composite scoring",
    reasoning: "Priority = severity × weather_risk × proximity_to_hospital. This ensures life-threatening accidents in bad weather near populated areas get immediate response.",
    tradeoff: "Requires accurate real-time data. Falls back to severity-only prioritization if external data becomes stale.",
    project: "Accident Hotspot Notifier",
  },
  {
    problem: "Frontend-backend contract: REST API versioning vs. GraphQL",
    options: "REST v1/v2 endpoints, GraphQL, gRPC",
    chosen: "REST with versioning + TypeScript contract codegen",
    reasoning: "Simplicity for initial scale. Explicit versioning prevents breaking changes, while type-safe clients via OpenAPI/TypeScript reduce runtime errors.",
    tradeoff: "Some endpoints may return more data than a particular screen needs. Accepted for the MVP with future migration to GraphQL possible.",
    project: "Both",
  },
];

export function EngineeringDecisions() {
  const [active, setActive] = useState(0);
  const decision = decisions[active];

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="section-band py-24 sm:py-28"
    >
      <div className="section-wrap">
        <div className="section-split gap-10">
          <div className="side-kicker" id="engineering-heading">
            <span className="grid-caption">Decision log</span>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Good engineering is not just choosing technologies. It is understanding constraints, trade-offs, and why one solution wins.
            </p>

            <div className="mt-8 hidden lg:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                06 decisions
              </div>
              <div className="mt-3 h-px w-24 bg-[var(--color-signal)]" />
            </div>
          </div>

          <div>
            <SectionHeading
              index={2}
              eyebrow="Why, not just what"
              title="Engineering decisions"
              description="Real trade-offs and architectural choices that shaped GlobalMedX and Accident Hotspot Notifier."
            />

            <div className="mt-12 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="space-y-2">
                {decisions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`group w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                      active === idx
                        ? "border-[var(--color-signal)] bg-[var(--color-surface)]"
                        : "border-[var(--color-border)] hover:border-[var(--color-text-tertiary)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${
                          active === idx
                            ? "text-[var(--color-signal)]"
                            : "text-[var(--color-text-tertiary)]"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                          {item.project}
                        </p>
                        <p
                          className={`text-sm font-medium leading-5 ${
                            active === idx
                              ? "text-[var(--color-text-primary)]"
                              : "text-[var(--color-text-secondary)]"
                          }`}
                        >
                          {item.problem}
                        </p>
                      </div>

                      <ChevronDown
                        size={15}
                        className={`shrink-0 transition-transform ${
                          active === idx ? "rotate-180 text-[var(--color-signal)]" : ""
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>

              <Card className="relative overflow-hidden p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-signal)] opacity-[0.07] blur-3xl" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Badge tone="signal">{decision.project}</Badge>
                      <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                        {String(active + 1).padStart(2, "0")} / 06
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-2xl font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-3xl">
                      {decision.problem}
                    </h3>

                    <div className="mt-7">
                      <p className="grid-caption mb-2">Options considered</p>
                      <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                        {decision.options}
                      </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-[var(--color-signal)]/30 bg-[var(--color-signal)]/[0.05] p-5">
                      <p className="grid-caption mb-2 text-[var(--color-signal)]">
                        Chosen approach
                      </p>
                      <p className="text-base font-medium leading-7 text-[var(--color-text-primary)]">
                        {decision.chosen}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="grid-caption mb-2">Reasoning</p>
                        <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                          {decision.reasoning}
                        </p>
                      </div>

                      <div>
                        <p className="grid-caption mb-2">Trade-off</p>
                        <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                          {decision.tradeoff}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
