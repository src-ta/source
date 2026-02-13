import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Chat', href: '#chat' },
  { name: 'Contact', href: '#contact' },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-bg-deep/80 backdrop-blur-md border-b border-border shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2 font-mono text-xl font-bold text-primary hover:text-primary-dim transition-colors"
        >
          <div className="relative">
            <Terminal className="w-6 h-6 group-hover:text-accent transition-colors duration-300" />
            <span className="absolute -inset-2 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>
          <span className="relative">
            JT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative group py-2"
            >
              <span className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-secondary group-hover:text-primary'
              }`}>
                <span className="text-primary/70 mr-1 font-mono text-xs">0{navLinks.indexOf(link) + 1}.</span>
                {link.name}
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                activeSection === link.href.substring(1) ? 'w-full opacity-100 shadow-[0_0_8px_var(--color-primary)]' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
              }`} />
            </a>
          ))}
          <a
            href="/JT_HTB-Academy.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-mono text-bg-deep bg-accent hover:bg-accent-dim transition-all duration-300 rounded-sm font-bold mr-2 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
          >
            HTB Transcript
          </a>
          <a
            href="/Jason-Terry-Resume.pdf"
            download
            className="px-4 py-2 text-sm font-mono text-bg-deep bg-primary hover:bg-primary-dim transition-all duration-300 rounded-sm font-bold hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-text-primary hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-secondary'
                  }`}
                >
                  <span className="text-primary mr-2">0{navLinks.indexOf(link) + 1}.</span>
                  {link.name}
                </a>
              ))}
              <a
                href="/JT_HTB-Academy.pdf"
                target="_blank"
                className="mt-4 w-full py-3 text-center font-mono text-bg-deep bg-accent hover:bg-accent-dim transition-colors rounded-sm font-bold"
              >
                View HTB Transcript
              </a>
              <a
                href="/Jason-Terry-Resume.pdf"
                download
                className="mt-2 w-full py-3 text-center font-mono text-bg-deep bg-primary hover:bg-primary-dim transition-colors rounded-sm font-bold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
