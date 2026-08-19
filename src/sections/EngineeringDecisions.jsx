import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { motion } from "framer-motion";

/**
 * Engineering Decisions — highlights real trade-offs and architectural choices
 * made in GlobalMedX and Accident Hotspot Notifier projects.
 */
export function EngineeringDecisions() {
  const decisions = [
    {
      problem: "How to handle global real-time data updates across distributed microservices?",
      options: "Polling API, WebSockets, Message Queue, Event Streaming",
      chosen: "Kubernetes + Prometheus Scraping + Event-Driven Architecture",
      reasoning:
        "Prometheus scrapes metrics every 10s, enabling both real-time monitoring and historical trend analysis. For critical alerts, event-driven messaging ensures no data loss.",
      tradeoff:
        "Slightly higher latency than pure WebSockets, but gained reliability, auditability, and easier debugging through centralized metrics.",
      project: "GlobalMedX",
    },
    {
      problem: "Database choice for pandemic surveillance data with high write throughput",
      options: "SQL (PostgreSQL), NoSQL (MongoDB), Time-Series DB (InfluxDB)",
      chosen: "MongoDB Replica Sets + Sharding",
      reasoning:
        "MongoDB's flexible schema handles heterogeneous epidemiological data. Replica sets ensure high availability; sharding enables horizontal scaling for millions of daily records.",
      tradeoff:
        "Trading ACID compliance for availability. Implemented application-level consistency checks and eventual consistency patterns.",
      project: "GlobalMedX",
    },
    {
      problem: "Secrets management for production credentials (DB URI, JWT signing keys)",
      options: "Environment variables, .env files, Secrets Manager, Vault",
      chosen: "HashiCorp Vault with auto-rotation",
      reasoning:
        "Vault provides encryption at rest, automatic credential rotation, and audit logs. Backend authenticates on startup, never storing credentials in code or config files.",
      tradeoff:
        "Additional operational complexity. Worth it for security-critical systems handling health data.",
      project: "GlobalMedX",
    },
    {
      problem: "Real-time geospatial clustering for thousands of concurrent accident reports",
      options: "Naive O(n²) comparison, KD-tree, Grid hashing, DBSCAN",
      chosen: "Spatial grid hashing + DBSCAN-like clustering",
      reasoning:
        "Grid divides the map into cells; accidents in adjacent cells are checked for clustering. Reduces complexity from O(n²) to O(n). DBSCAN-like algorithm detects dense regions naturally.",
      tradeoff:
        "Grid size tuning is critical. Too small = many cells; too large = missed clusters. Settled on dynamic grid sizing based on city density.",
      project: "Accident Hotspot Notifier",
    },
    {
      problem: "How to prioritize emergency response when resources are limited?",
      options: "FIFO queue, Priority queue (severity only), Multi-factor ranking",
      chosen: "Min-heap priority queue with composite scoring",
      reasoning:
        "Priority = severity × weather_risk × proximity_to_hospital. Ensures life-threatening accidents in bad weather near populated areas get immediate response.",
      tradeoff:
        "Requires accurate real-time data (weather, hospital locations). Fallback to severity-only if data is stale.",
      project: "Accident Hotspot Notifier",
    },
    {
      problem: "Frontend-backend contract: REST API versioning vs. GraphQL",
      options: "REST v1/v2 endpoints, GraphQL, gRPC",
      chosen: "REST with versioning + TypeScript contract codegen",
      reasoning:
        "Simplicity for initial scale. Explicit versioning prevents breaking changes. Type-safe clients via OpenAPI/TypeScript eliminate runtime errors.",
      tradeoff:
        "Over-fetching data in some queries. Accepted for MVP; future migration to GraphQL possible.",
      project: "Both",
    },
  ];

  return (
    <section id="engineering" aria-labelledby="engineering-heading" className="section-band py-24 sm:py-28">
      <div className="section-wrap">
        <div className="section-split gap-10">
          <div className="side-kicker" id="engineering-heading">
            <span className="grid-caption">Decision log</span>
            <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
              This section is intentionally about reasoning, not visuals. It shows how system choices were made under real constraints.
            </p>
          </div>

          <div>
            <SectionHeading
              index={2}
              eyebrow="Why, not just what"
              title="Engineering decisions"
              description="Real trade-offs and architectural choices that shaped GlobalMedX and Accident Hotspot Notifier."
            />

            <div className="mt-14 space-y-5">
              {decisions.map((decision, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <Card className="p-6 sm:p-8">
                    <div className="grid gap-6 xl:grid-cols-[68px_180px_minmax(0,1fr)]">
                      <div className="font-[var(--font-display)] text-4xl leading-none text-[rgba(255,106,61,0.22)]">
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <div className="space-y-4">
                        <Badge tone="signal">{decision.project}</Badge>
                        <div>
                          <p className="grid-caption mb-2">Options considered</p>
                          <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{decision.options}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="max-w-3xl font-[var(--font-display)] text-xl sm:text-[1.8rem] font-semibold leading-tight text-[var(--color-text-primary)]">
                          {decision.problem}
                        </h3>

                        <div className="mt-6 panel-grid">
                          <div className="ink-block rounded-[var(--radius-md)] p-4 sm:col-span-4">
                            <div className="grid-caption mb-2">Chosen approach</div>
                            <p className="text-sm leading-7 text-[var(--color-text-primary)]">{decision.chosen}</p>
                          </div>
                          <div className="ink-block rounded-[var(--radius-md)] p-4 sm:col-span-8">
                            <div className="grid-caption mb-2">Reasoning</div>
                            <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{decision.reasoning}</p>
                          </div>
                        </div>

                        <div className="mt-5 border-l-2 border-[var(--color-marker)] pl-4">
                          <div className="grid-caption mb-2">Trade-off</div>
                          <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{decision.tradeoff}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
