import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

/**
 * GitHub Section — curated, hand-picked repositories highlighting
 * full-stack development, DevOps, and system design skills.
 */
export function GitHubSection() {
  const repos = [
    {
      name: "globalmedx",
      title: "GlobalMedX",
      description: "Enterprise-grade pandemic surveillance platform with real-time dashboards, Kubernetes orchestration, and complete CI/CD pipeline.",
      topics: ["React", "Node.js", "Kubernetes", "Docker", "Jenkins", "MongoDB"],
      url: "https://github.com/adarsh985/globalmedx",
      highlights: [
        "Production DevOps: K8s, Prometheus, Grafana, ELK",
        "Secrets management with HashiCorp Vault",
        "Infrastructure as Code (Terraform)"
      ]
    },
    {
      name: "accident-hotspot-notifier",
      title: "Accident Hotspot Notifier",
      description: "Real-time geospatial accident detection with intelligent clustering algorithms and emergency prioritization for urban safety.",
      topics: ["JavaScript", "Firebase", "Leaflet.js", "DBSCAN", "Algorithms"],
      url: "https://github.com/adarsh985/Accident-hotspot-notifier",
      highlights: [
        "Spatial algorithms: Haversine, DBSCAN clustering",
        "Real-time Firestore sync",
        "Mobile-responsive UI"
      ]
    },
  ];

  return (
    <section id="github" aria-labelledby="github-heading" className="section-band py-24 sm:py-28">
      <div className="section-wrap">
        <div className="section-split gap-10">
          <div className="side-kicker" id="github-heading">
            <span className="grid-caption">Code footprint</span>
            <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
              Repositories are shown as proof of implementation quality, not as filler links.
            </p>
          </div>

          <div>
            <SectionHeading
              index={3}
              eyebrow="Curated, not auto-generated"
              title="GitHub"
              description="Hand-picked repositories showcasing real-world projects, production code, and software engineering practices."
            />

            <div className="mt-14 space-y-6">
              {repos.map((repo, idx) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card
                    as="a"
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    interactive
                    className="block p-6 sm:p-8"
                  >
                    <div className="grid gap-6 lg:grid-cols-[68px_minmax(0,1fr)_220px] lg:items-start">
                      <div className="font-[var(--font-display)] text-4xl leading-none text-[rgba(216,255,98,0.25)]">
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="grid-caption mb-2">{repo.name}</div>
                            <h3 className="font-[var(--font-display)] text-2xl sm:text-[2.4rem] font-semibold leading-tight text-[var(--color-text-primary)]">
                              {repo.title}
                            </h3>
                          </div>
                          <ExternalLink size={18} className="mt-1 text-[var(--color-text-tertiary)]" />
                        </div>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
                          {repo.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {repo.topics.map((topic) => (
                            <Badge key={topic}>{topic}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        {repo.highlights.map((highlight) => (
                          <div key={highlight} className="repo-line text-sm leading-7 text-[var(--color-text-secondary)]">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div className="paper-panel mt-10 rounded-[var(--radius-lg)] p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-[var(--color-text-secondary)]">
                  Explore all projects and contributions on GitHub.
                </p>
                <a
                  href="https://github.com/adarsh985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] px-6 py-3 font-medium text-[#0d0f13] transition-colors hover:bg-[var(--color-marker)]"
                >
                  Visit GitHub Profile
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
