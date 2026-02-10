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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-deep/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 font-mono text-xl font-bold text-primary hover:text-primary-dim transition-colors"
        >
          <Terminal className="w-6 h-6" />
          <span>JT</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              <span className="text-primary mr-1">0{navLinks.indexOf(link) + 1}.</span>
              {link.name}
            </a>
          ))}
          <a
            href="/Jason-Terry-Resume.pdf"
            download
            className="px-4 py-2 text-sm font-mono text-bg-deep bg-primary hover:bg-primary-dim transition-colors rounded-sm font-bold"
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
                href="/Jason-Terry-Resume.pdf"
                download
                className="mt-4 w-full py-3 text-center font-mono text-bg-deep bg-primary hover:bg-primary-dim transition-colors rounded-sm font-bold"
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
