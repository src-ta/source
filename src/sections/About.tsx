import { motion } from 'framer-motion';
import { summary, experience } from '../data/resume';
import { ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6 text-primary font-mono text-lg">
            <span className="text-accent">$</span> whoami
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6 text-text-primary leading-tight"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {summary.pivotQuestion}
              </motion.h2>
              <motion.div
                className="relative bg-bg-card p-6 rounded-sm shadow-lg mb-8 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                <p className="text-lg text-text-secondary leading-relaxed relative z-10 italic">
                  &ldquo;{summary.pivotAnswer}&rdquo;
                </p>
              </motion.div>
              <div className="text-text-secondary space-y-4">
                {summary.long.split('\n\n').map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="relative pl-8 md:mt-0 mt-8">
              <div className="absolute top-0 bottom-0 left-0 w-px">
                <div className="w-full h-full bg-gradient-to-b from-accent via-primary/50 to-border" />
                <motion.div
                  className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary to-transparent"
                  animate={{ y: ['0%', '500%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ opacity: 0.6 }}
                />
              </div>
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
              <div className="space-y-12">
                {experience.map((job, index) => {
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative group"
                    >
                      <motion.div
                        className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 bg-bg-deep border-text-secondary group-hover:border-primary group-hover:shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      />
                      
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-accent text-sm">{job.period}</span>
                        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                          {job.company}
                        </h3>
                        <p className="text-text-secondary font-medium">{job.title}</p>
                        
                        <ul className="mt-4 space-y-2">
                          {job.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                              className="flex items-start gap-2 text-sm text-text-secondary"
                            >
                              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
