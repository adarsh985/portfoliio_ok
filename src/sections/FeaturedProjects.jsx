import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/profile";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/ui/BrandIcons";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-band py-24 sm:py-28">
      <div className="section-wrap">
        <div className="section-split gap-10">
          <div className="side-kicker" id="projects-heading">
            <span className="grid-caption">Selected work</span>
            <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
              Each build is shown as a case study, not a thumbnail. The structure, trade-offs, stack, and system shape matter.
            </p>
          </div>

          <div>
            <SectionHeading
              index={1}
              eyebrow="Selected work"
              title="Featured projects"
              description="Production-grade systems showcasing full-stack development, DevOps, and real-world problem-solving."
            />

            <div className="mt-14 space-y-12">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                >
                  <Card interactive tilt className="overflow-hidden p-6 sm:p-8">
                    <div className="grid gap-8 xl:grid-cols-[88px_minmax(0,1fr)]">
                      <div className="project-number">{String(idx + 1).padStart(2, "0")}</div>
                      <div className="space-y-8">
                        <div className="flex flex-wrap items-start justify-between gap-6">
                          <div className="max-w-3xl">
                            <p className="grid-caption mb-4">Project case study</p>
                            <h3 className="font-[var(--font-display)] text-[2rem] sm:text-[3rem] font-semibold leading-[0.95] text-[var(--color-text-primary)]">
                              {project.title}
                            </h3>
                            <p className="mt-3 text-lg text-[var(--color-text-secondary)]">{project.subtitle}</p>
                            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">
                              {project.tagline}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.links.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
                              >
                                <GithubIcon size={16} />
                                GitHub
                              </a>
                            )}
                            {project.links.demo && (
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] px-4 py-2 text-sm font-medium text-[#0d0f13] transition-colors hover:bg-[var(--color-marker)]"
                              >
                                <ExternalLink size={16} />
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="panel-grid">
                          <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-7">
                            <div className="grid-caption mb-3">Overview</div>
                            <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                              {project.longDescription}
                            </p>
                          </div>

                          <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-5">
                            <div className="grid-caption mb-3">Outcome</div>
                            <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                              {project.impact}
                            </p>
                          </div>

                          <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-6">
                            <div className="grid-caption mb-4">Key features</div>
                            <div className="space-y-3">
                              {project.highlights.map((highlight) => (
                                <div key={highlight} className="list-dash text-sm">
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-6">
                            <div className="grid-caption mb-4">Technology stack</div>
                            <div className="space-y-4">
                              {Object.entries(project.techStack).map(([category, techs]) => (
                                <div key={category} className="border-t border-[var(--color-border)] pt-3">
                                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
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
                            <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-6">
                              <div className="grid-caption mb-4">System architecture</div>
                              <div className="space-y-4">
                                {project.architecture.map((layer) => (
                                  <div key={layer.layer} className="border-t border-[var(--color-border)] pt-3">
                                    <p className="font-medium text-[var(--color-text-primary)]">{layer.layer}</p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{layer.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.useCases && (
                            <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-6">
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
                            <div className="ink-block rounded-[var(--radius-lg)] p-5 sm:col-span-6">
                              <div className="grid-caption mb-4">Algorithms and techniques</div>
                              <div className="space-y-4">
                                {project.algorithms.map((algo) => (
                                  <div key={algo.name} className="border-t border-[var(--color-border)] pt-3">
                                    <p className="font-medium text-[var(--color-text-primary)]">{algo.name}</p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{algo.purpose}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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
