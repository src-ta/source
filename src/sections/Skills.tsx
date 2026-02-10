import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories, frameworks, extendedTools } from '../data/resume';
import type { Skill } from '../data/resume';
import { Shield } from 'lucide-react';

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
        {skill.name}
      </span>
      <span className="text-xs font-mono text-text-muted">{skill.level}%</span>
    </div>
    <div className="h-2 bg-bg-deep rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
);

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0]);

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-bg-deep relative">
      <div className="container mx-auto px-6 max-w-5xl">
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
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-sm font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-bg-deep font-bold'
                    : 'bg-bg-card text-text-secondary border border-border hover:border-primary/50 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
            {filteredSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

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
                {extendedTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-mono bg-bg-card border border-border rounded-sm text-text-secondary hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory !== 'Tools' && <div className="mb-16" />}

          <div className="border-t border-border pt-10">
            <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              Frameworks &amp; Compliance
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((fw) => (
                <span
                  key={fw}
                  className="px-3 py-1.5 text-sm font-mono bg-bg-card border border-border rounded-sm text-text-secondary hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
