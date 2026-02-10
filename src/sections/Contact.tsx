import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, education, certifications, training } from '../data/resume';
import type { Certification, TrainingPlatform } from '../data/resume';
import {
  Mail,
  Linkedin,
  Download,
  CheckCircle,
  Clock,
  Target,
  Award,
  GraduationCap,
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
    window.location.href = `mailto:jason@terryarbors.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-bg-surface relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-10 text-primary font-mono text-lg">
            <span className="text-accent">$</span> ping jason@terry
            <span className="w-2 h-5 bg-primary animate-pulse ml-1" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Let&apos;s Talk Security
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Actively seeking penetration testing and red team roles.
                Available for full-time positions, contract engagements, and
                consulting.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-sm hover:border-primary/30 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="text-text-primary group-hover:text-primary transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border rounded-sm hover:border-accent/30 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-text-muted">LinkedIn</p>
                    <p className="text-text-primary group-hover:text-accent transition-colors">
                      linkedin.com/in/jason-e-terry
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/Jason-Terry-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-bg-deep font-bold rounded-sm hover:bg-primary-dim transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              <div className="mt-10 p-5 bg-bg-card border border-border rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">
                    Education
                  </h3>
                </div>
                <p className="text-text-primary font-medium">
                  {education.degree}
                </p>
                <p className="text-sm text-text-secondary">
                  {education.focus} — GPA {education.gpa}
                </p>
                <p className="text-sm text-text-muted">
                  {education.school}, {education.location} ({education.status})
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-text-muted mb-1.5 font-mono">
                    name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-sm px-4 py-2.5 text-text-primary outline-none focus:border-primary/50 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-1.5 font-mono">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-sm px-4 py-2.5 text-text-primary outline-none focus:border-primary/50 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-1.5 font-mono">
                    message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-sm px-4 py-2.5 text-text-primary outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-bg-deep font-bold rounded-sm hover:bg-primary-dim transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>

              <div className="p-5 bg-bg-card border border-border rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {certifications.map((cert) => {
                    const config = certStatusConfig[cert.status];
                    const Icon = config.icon;
                    return (
                      <div
                        key={cert.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-3.5 h-3.5 ${config.color}`} />
                          <span className="text-sm text-text-primary font-medium">
                            {cert.name}
                          </span>
                        </div>
                        <span className="text-xs text-text-muted font-mono">
                          {cert.issuer}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-5 bg-bg-card border border-border rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">
                    Practical Training
                  </h3>
                </div>
                <div className="space-y-3">
                  {training.map((t: TrainingPlatform) => (
                    <div key={t.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-text-primary font-medium">
                          {t.name}
                        </p>
                        <p className="text-xs text-text-muted">{t.detail}</p>
                      </div>
                      <span className="shrink-0 text-sm font-mono text-primary font-bold">
                        {t.achievement}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="/JT_HTB-Academy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-primary transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  View HTB Academy Transcript
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
