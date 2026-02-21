import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { skills, skillCategories, frameworks, extendedTools } from '../data/resume';
import type { Skill } from '../data/resume';
import { Shield } from 'lucide-react';

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </span>
        <motion.span
          className="text-xs font-mono text-primary/80 bg-primary/5 px-1.5 py-0.5 rounded"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.8 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div
        ref={ref}
        className="h-2.5 bg-bg-deep rounded-full overflow-hidden relative border border-border/30"
      >
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
          }}
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              animation: 'shimmer 2s ease-in-out infinite',
              animationDelay: `${index * 0.1}s`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0]);

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-bg-deep relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-10 text-primary font-mono text-lg">
            <span className="text-accent">$</span> cat /etc/skills.conf
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {skillCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-sm text-sm font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-bg-deep font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-bg-card text-text-secondary border border-border hover:border-primary/50 hover:text-text-primary hover:shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-5 mb-8"
            >
              {filteredSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {activeCategory === 'Tools' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                Full Arsenal
              </h4>
              <div className="flex flex-wrap gap-2">
                {extendedTools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: 'rgba(245, 158, 11, 0.5)',
                      color: 'var(--color-primary)',
                      boxShadow: '0 0 12px rgba(245, 158, 11, 0.2)',
                    }}
                    className="px-2.5 py-1 text-xs font-mono bg-bg-card border border-border rounded-sm text-text-secondary cursor-default transition-shadow"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory !== 'Tools' && <div className="mb-16" />}

          <div className="border-t border-border/50 pt-10 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              Frameworks &amp; Compliance
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((fw, i) => (
                <motion.span
                  key={fw}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{
                    borderColor: 'rgba(0, 212, 255, 0.5)',
                    boxShadow: '0 0 12px rgba(0, 212, 255, 0.15)',
                  }}
                  className="px-3 py-1.5 text-sm font-mono bg-bg-card border border-border rounded-sm text-text-secondary hover:text-accent transition-all duration-300 cursor-default"
                >
                  {fw}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
