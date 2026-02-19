import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { profile } from '../data/resume';

const CountUp = ({ end, duration = 1.2 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const match = end.match(/^([^0-9]*)(\d+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numericEnd = match ? parseInt(match[2]) : 0;
  const suffix = match ? match[3] : end;

  useEffect(() => {
    if (numericEnd === 0) return;
    let startTime: number;
    let animationFrame: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const linear = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const progress = easeOut(linear);
      
      setCount(Math.floor(progress * numericEnd));

      if (linear < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericEnd, duration]);

  if (!match) return <span>{end}</span>;
  return <span>{prefix}{count}{suffix}</span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % profile.tagline.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-bg-deep z-0">
         <div className="absolute inset-0 bg-grid-pattern opacity-20" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-deep/50 to-bg-deep" />
      </div>
      
      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 font-mono text-xs whitespace-nowrap"
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${100 + Math.random() * 100}vh`,
              opacity: 0 
            }}
            animate={{ 
              y: -100, 
              opacity: [0, 0.4, 0] 
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          >
            {['<Security />', '0x1F480', 'Buffer_Overflow', 'SSH_AUTH_SOCK', 'nmap -sC -sV'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }} 
      />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          style={{ y: y2 }}
          className="flex flex-col relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono shadow-[0_0_15px_rgba(245,158,11,0.2)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_10px_var(--color-primary)]"></span>
              </span>
              Available for Hire
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-text-primary mb-3 text-glow drop-shadow-2xl">Terry Arbors</span>
            <div className="h-[1.2em] relative overflow-hidden">
               <AnimatePresence mode="wait">
                <motion.span 
                  key={taglineIndex}
                  initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dim to-accent font-mono"
                >
                  {profile.tagline[taglineIndex]}
                  <span className="animate-blink inline-block w-2 h-8 bg-primary ml-2 align-middle opacity-70" />
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {profile.subTagline}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
              <motion.a 
                href="#projects"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dim text-bg-deep px-8 py-4 rounded-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
              >
                <Terminal className="w-5 h-5" />
                View Operations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="#contact"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 bg-bg-surface/50 backdrop-blur-sm border border-border text-text-primary px-8 py-4 rounded-sm font-medium hover:border-primary/50 hover:bg-bg-elevated hover:text-primary transition-all shadow-lg"
              >
                Get In Touch
              </motion.a>
            </motion.div>
        </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border/50 bg-bg-surface/30 backdrop-blur-sm p-8 rounded-lg border-l border-r border-b shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.heroStats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="flex flex-col items-center md:items-start group hover:bg-bg-elevated/50 p-2 rounded transition-colors"
              >
                <span className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={stat.value} />
                </span>
                <span className="text-xs text-text-secondary uppercase tracking-widest font-mono group-hover:text-primary transition-colors">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  );
};
