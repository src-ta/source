import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { profile } from '../data/resume';

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
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bg-elevated/20 via-bg-deep to-bg-deep z-0" />
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }} 
      />
      
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Hire
          </span>
        </motion.div>

        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-text-primary mb-2">Jason Terry</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dim to-accent">
            {profile.tagline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {profile.subTagline}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.a 
              href="#projects"
              variants={itemVariants}
              className="group inline-flex items-center gap-2 bg-primary text-bg-deep px-6 py-3 rounded-sm font-bold hover:bg-primary-dim transition-all"
            >
              <Terminal className="w-5 h-5" />
              View Operations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="/Jason-Terry-Resume.pdf"
              download
              variants={itemVariants}
              className="group inline-flex items-center gap-2 bg-bg-surface border border-border text-text-primary px-6 py-3 rounded-sm font-medium hover:border-primary/50 hover:bg-bg-elevated transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.heroStats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col">
                <span className="text-3xl font-mono font-bold text-text-primary mb-1">{stat.value}</span>
                <span className="text-sm text-text-secondary uppercase tracking-wider font-mono">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </div>
  );
};
