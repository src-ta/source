import { Linkedin, Mail, Globe, Github } from 'lucide-react';
import { profile } from '../data/resume';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Chat', href: '#chat' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-bg-deep py-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="w-20 h-full bg-gradient-to-r from-transparent via-primary to-transparent" style={{
          animation: 'shimmer-slide 4s linear infinite',
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-mono text-text-muted hover:text-primary transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="text-text-muted hover:text-primary hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.research}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary hover:scale-110 transition-all duration-200"
              aria-label="Security Research"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Jason Terry. All rights
            reserved.
          </p>
          <p className="text-[10px] text-text-muted/50 font-mono mt-1">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="text-[10px] text-text-muted/30 font-mono mt-2 italic">
            &ldquo;It&apos;s not a deficit of attention, it&apos;s an abundance of curiosity.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
};
