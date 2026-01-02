import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent';
  delay?: number;
}

const GlowingCard = ({ children, className = '', glowColor = 'primary', delay = 0 }: GlowingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative group ${className}`}
    >
      <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${
        glowColor === 'primary' 
          ? 'from-primary/30 to-primary/10' 
          : 'from-accent/30 to-accent/10'
      } opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
      <div className="relative glass-panel rounded-lg p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowingCard;
