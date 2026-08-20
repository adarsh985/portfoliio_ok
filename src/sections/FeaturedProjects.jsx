import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/profile";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/ui/BrandIcons";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-band py-24 sm:py-28"
    >
      <div className="section-wrap">
        <div className="section-split gap-10">
          <div className="side-kicker" id="projects-heading">
            <span className="grid-caption">Selected work</span>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Real systems, real architecture, and the engineering decisions behind them.
            </p>

            <div className="mt-8 hidden lg:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                Case studies
              </div>
              <div className="mt-3 h-px w-24 bg-[var(--color-signal)]" />
            </div>
          </div>

          <div>
            <SectionHeading
              index={1}
              eyebrow="Selected work"
              title="Things I've built"
              description="Full-stack systems showcasing development, infrastructure, and practical problem-solving."
            />

            <div className="mt-12 space-y-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                >
                  <Card interactive tilt className="group relative overflow-hidden p-6 sm:p-8">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-signal)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]" />

                    <div className="relative">
                      <div className="flex flex-wrap items-start justify-between gap-6">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm text-[var(--color-signal)]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-8 bg-[var(--color-border)]" />
                          <span className="grid-caption">
                            Featured project
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-primary)] transition-all hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
                            >
                              <GithubIcon size={15} />
                              GitHub
                            </a>
                          )}

                          {project.links.demo && !project.links.demo.includes("localhost") && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] px-4 py-2 text-sm font-medium text-[#0d0f13] transition-transform hover:-translate-y-0.5"
                            >
                              <ExternalLink size={15} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="mt-9">
                        <h3 className="max-w-4xl font-[var(--font-display)] text-[2.5rem] font-semibold leading-[0.92] tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
                          {project.subtitle}
                        </p>

                        <p className="mt-4 max-w-2xl font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-signal)]">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="mt-9 grid gap-4 md:grid-cols-12">
                        <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-7">
                          <div className="grid-caption mb-3">Overview</div>
                          <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                            {project.longDescription}
                          </p>
                        </div>

                        <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-5">
                          <div className="grid-caption mb-3">Impact</div>
                          <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                            {project.impact}
                          </p>
                        </div>

                        <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-6">
                          <div className="grid-caption mb-4">What I built</div>
                          <div className="space-y-3">
                            {project.highlights.slice(0, 5).map((highlight) => (
                              <div key={highlight} className="list-dash text-sm">
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-6">
                          <div className="grid-caption mb-4">Technology</div>
                          <div className="space-y-4">
                            {Object.entries(project.techStack).map(([category, techs]) => (
                              <div
                                key={category}
                                className="border-t border-[var(--color-border)] pt-3 first:border-t-0 first:pt-0"
                              >
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                                  {category.replace(/([A-Z])/g, " $1").trim()}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {techs.map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {project.architecture && (
                          <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-6">
                            <div className="grid-caption mb-4">Architecture</div>
                            <div className="space-y-4">
                              {project.architecture.map((layer) => (
                                <div
                                  key={layer.layer}
                                  className="border-t border-[var(--color-border)] pt-3 first:border-t-0 first:pt-0"
                                >
                                  <p className="font-medium text-[var(--color-text-primary)]">
                                    {layer.layer}
                                  </p>
                                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                                    {layer.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.useCases && (
                          <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-6">
                            <div className="grid-caption mb-4">Use cases</div>
                            <div className="space-y-3">
                              {project.useCases.map((useCase) => (
                                <div key={useCase} className="list-dash text-sm">
                                  <span>{useCase}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.algorithms && (
                          <div className="ink-block rounded-[var(--radius-lg)] p-5 md:col-span-6">
                            <div className="grid-caption mb-4">Algorithms</div>
                            <div className="space-y-4">
                              {project.algorithms.map((algo) => (
                                <div
                                  key={algo.name}
                                  className="border-t border-[var(--color-border)] pt-3 first:border-t-0 first:pt-0"
                                >
                                  <p className="font-medium text-[var(--color-text-primary)]">
                                    {algo.name}
                                  </p>
                                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                                    {algo.purpose}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
