import { Linkedin, Mail } from 'lucide-react';
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
    <footer className="bg-bg-deep border-t border-border py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="text-text-muted hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Jason Terry. All rights
            reserved.
          </p>
          <p className="text-[10px] text-text-muted/50 font-mono mt-1">
            Last Updated: 2-9-2026
          </p>
          <p className="text-[10px] text-text-muted/30 font-mono mt-2 italic">
            "It's not a deficit of attention, it's an abundance of curiosity."
          </p>
        </div>
      </div>
    </footer>
  );
};
