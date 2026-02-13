import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/resume';
import { ChevronRight } from 'lucide-react';

const statusColors: Record<string, string> = {
  'Active Development': 'bg-primary/10 text-primary border-primary/30',
  'Active Research': 'bg-accent/10 text-accent border-accent/30',
  Ongoing: 'bg-warning/10 text-warning border-warning/30',
};

const statusPulse: Record<string, boolean> = {
  'Active Development': true,
  'Active Research': true,
};

const defaultStatusColor = 'bg-text-muted/10 text-text-muted border-text-muted/30';

const ProjectCard = ({ project, index }: { project: typeof projects[number]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-bg-card rounded-sm p-6 flex flex-col overflow-hidden"
      style={{
        border: '1px solid var(--color-border)',
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-sm pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent), var(--color-primary))',
          backgroundSize: '200% 200%',
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0,
          backgroundPosition: isHovered ? '100% 100%' : '0% 0%',
          boxShadow: isHovered
            ? '0 0 20px rgba(245, 158, 11, 0.35), 0 0 40px rgba(0, 212, 255, 0.15)'
            : '0 0 0px transparent, 0 0 0px transparent',
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Scan line effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(245, 158, 11, 0.05) 50%, transparent 100%)',
          height: '100%',
        }}
        animate={{
          y: isHovered ? ['-100%', '100%'] : '-100%',
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3
              className="text-xl font-bold transition-colors duration-300"
              style={{ color: isHovered ? '#0a0a0f' : undefined }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm text-accent font-mono mt-1 transition-colors duration-300"
              style={isHovered ? { color: 'var(--color-primary)' } : undefined}
            >
              {project.subtitle}
            </p>
          </div>
          <span
            className={`shrink-0 ml-4 px-2.5 py-1 text-xs font-mono rounded-sm border transition-all ${
              statusColors[project.status] ?? defaultStatusColor
            } ${statusPulse[project.status] ? 'animate-pulse' : ''}`}
          >
            {project.status}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-5 transition-colors duration-300"
          style={{ color: isHovered ? '#0a0a0f' : undefined }}
        >
          {project.description}
        </p>

        <ul className="space-y-2 mb-6 flex-1">
          {project.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="flex items-start gap-2 text-sm transition-colors duration-300"
              style={{ color: isHovered ? '#0a0a0f' : undefined }}
            >
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className={isHovered ? '' : 'text-text-secondary'}>{h}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          {project.tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.04 }}
              className="px-2 py-0.5 text-xs font-mono bg-bg-elevated text-text-muted rounded-sm hover:text-primary hover:bg-primary/5 transition-colors duration-200"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
