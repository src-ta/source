import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, certifications, training } from '../data/resume';
import type { Certification, TrainingPlatform } from '../data/resume';
import {
  Mail,
  Linkedin,
  Globe,
  Github,
  CheckCircle,
  Clock,
  Target,
  Award,
} from 'lucide-react';

const certStatusConfig: Record<
  Certification['status'],
  { icon: typeof CheckCircle; color: string; label: string }
> = {
  earned: { icon: CheckCircle, color: 'text-primary', label: 'Earned' },
  'in-progress': { icon: Clock, color: 'text-accent', label: 'In Progress' },
  planned: { icon: Target, color: 'text-text-muted', label: 'Planned' },
};

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-10 text-primary font-mono text-lg">
            <span className="text-accent">$</span> ping jason@terryarbors.com
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.h2
                className="text-3xl font-bold text-text-primary mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let&apos;s Talk Security
              </motion.h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Actively seeking penetration testing and red team roles.
                Available for full-time positions, contract engagements, and
                consulting.
              </p>

              <div className="space-y-4 mb-10">
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-sm hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-shadow">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="text-text-primary group-hover:text-primary transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-sm hover:border-accent/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-shadow">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">LinkedIn</p>
                    <p className="text-text-primary group-hover:text-accent transition-colors">
                      linkedin.com/in/jason-e-terry
                    </p>
                  </div>
                </motion.a>
                <motion.a
                  href={profile.research}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-sm hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-shadow">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Security Research</p>
                    <p className="text-text-primary group-hover:text-primary transition-colors">
                      loudmumble.com
                    </p>
                  </div>
                </motion.a>
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-sm hover:border-border transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-border/20 border border-border flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-shadow">
                    <Github className="w-5 h-5 text-text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">GitHub</p>
                    <p className="text-text-primary group-hover:text-text-primary transition-colors">
                      github.com/loudmumble
                    </p>
                  </div>
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#chat"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dim text-bg-deep font-bold rounded-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-shadow text-sm"
                >
                  Ask Me Anything
                </motion.a>
              </div>


            </div>

            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="group">
                  <label htmlFor="contact-name" className="block text-sm text-text-muted mb-1.5 font-mono group-focus-within:text-primary transition-colors">
                    name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-sm px-4 py-2.5 text-text-primary outline-none focus:border-primary/50 focus:shadow-[0_0_12px_rgba(245,158,11,0.08)] transition-all duration-300 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="contact-email" className="block text-sm text-text-muted mb-1.5 font-mono group-focus-within:text-primary transition-colors">
                    email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-sm px-4 py-2.5 text-text-primary outline-none focus:border-primary/50 focus:shadow-[0_0_12px_rgba(245,158,11,0.08)] transition-all duration-300 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="contact-message" className="block text-sm text-text-muted mb-1.5 font-mono group-focus-within:text-primary transition-colors">
                    message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-sm px-4 py-2.5 text-text-primary outline-none focus:border-primary/50 focus:shadow-[0_0_12px_rgba(245,158,11,0.08)] transition-all duration-300 text-sm resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-dim text-bg-deep font-bold rounded-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-shadow text-sm"
                >
                  Send Message
                </motion.button>
              </form>

              <motion.div
                className="p-5 bg-bg-card border border-border rounded-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/40 via-transparent to-primary/40" />
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {certifications.map((cert, i) => {
                    const config = certStatusConfig[cert.status];
                    const Icon = config.icon;
                    return (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center justify-between group/cert hover:bg-bg-elevated/30 rounded px-1 -mx-1 py-0.5 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-3.5 h-3.5 ${config.color} ${cert.status === 'in-progress' ? 'animate-pulse' : ''}`} />
                          <span className="text-sm text-text-primary font-medium group-hover/cert:text-primary transition-colors">
                            {cert.name}
                          </span>
                        </div>
                        <span className="text-xs text-text-muted font-mono">
                          {cert.issuer}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                className="p-5 bg-bg-card border border-border rounded-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/40 via-transparent to-accent/40" />
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">
                    Practical Training
                  </h3>
                </div>
                <div className="space-y-3">
                  {training.map((t: TrainingPlatform, i: number) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start justify-between gap-4 group/train hover:bg-bg-elevated/30 rounded px-1 -mx-1 py-1 transition-colors"
                    >
                      <div>
                        <p className="text-sm text-text-primary font-medium group-hover/train:text-accent transition-colors">
                          {t.name}
                        </p>
                        <p className="text-xs text-text-muted">{t.detail}</p>
                      </div>
                      <span className="shrink-0 text-sm font-mono text-primary font-bold bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                        {t.achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-accent/60">
                  Transcript available upon request
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
