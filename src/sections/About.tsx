import { motion } from 'framer-motion';
import { summary, experience } from '../data/resume';
import { ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-surface relative overflow-hidden">
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
              <h2 className="text-3xl font-bold mb-6 text-text-primary leading-tight">
                {summary.pivotQuestion}
              </h2>
              <div className="bg-bg-card p-6 rounded-sm border-l-2 border-primary shadow-lg mb-8">
                <p className="text-lg text-text-secondary leading-relaxed">
                  {summary.pivotAnswer}
                </p>
              </div>
              <div className="text-text-secondary space-y-4">
                {summary.long.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative pl-8 border-l border-border md:mt-0 mt-8">
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="space-y-12">
                {experience.map((job, index) => {
                  const isPivot = job.company === 'Microsoft';
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 ${
                        isPivot ? 'bg-primary border-primary' : 'bg-bg-deep border-text-secondary'
                      }`} />
                      
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-accent text-sm">{job.period}</span>
                        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                          {job.company}
                          {isPivot && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">THE PIVOT</span>}
                        </h3>
                        <p className="text-text-secondary font-medium">{job.title}</p>
                        <p className="text-text-muted text-sm mt-2">{job.location}</p>
                        
                        <ul className="mt-4 space-y-2">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
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
