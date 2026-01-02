import { motion } from 'framer-motion';
import { Brain, Zap } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Logo */}
          <motion.div
            className="relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
              <span className="glow-text-primary">Resonance</span>{' '}
              <span className="text-muted-foreground">Knowledge Synthesizer</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1 font-mono">
              Гибридная Резонансная Архитектура с обнулением когнитивной пены
            </p>
          </div>

          {/* Status indicator */}
          <motion.div
            className="md:ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/50 border border-border/30"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">SYSTEM READY</span>
            <div className="w-2 h-2 rounded-full bg-glow-success animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
