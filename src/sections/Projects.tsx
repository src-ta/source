import { motion } from 'framer-motion';
import { projects } from '../data/resume';
import { ChevronRight } from 'lucide-react';

const statusColors: Record<string, string> = {
  'Active Development': 'bg-primary/10 text-primary border-primary/30',
  'Active Research': 'bg-accent/10 text-accent border-accent/30',
  Ongoing: 'bg-warning/10 text-warning border-warning/30',
};

const defaultStatusColor = 'bg-text-muted/10 text-text-muted border-text-muted/30';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-surface relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-10 text-primary font-mono text-lg">
            <span className="text-accent">$</span> ls -la /operations/
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-bg-card border border-border rounded-sm p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 ml-4 px-2.5 py-1 text-xs font-mono rounded-sm border ${
                      statusColors[project.status] ?? defaultStatusColor
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-bg-elevated text-text-muted rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
