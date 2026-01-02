import { motion } from 'framer-motion';
import { Play, Loader2 } from 'lucide-react';

interface AnalyzeButtonProps {
  isAnalyzing: boolean;
  onClick: () => void;
}

const AnalyzeButton = ({ isAnalyzing, onClick }: AnalyzeButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={isAnalyzing}
      className="relative w-full py-4 px-8 rounded-lg font-semibold text-primary-foreground overflow-hidden disabled:cursor-not-allowed"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
      
      {/* Animated shimmer */}
      {!isAnalyzing && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      )}
      
      {/* Glow effect */}
      <div className="absolute inset-0 glow-primary opacity-50" />
      
      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        {isAnalyzing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>АНАЛИЗ В ПРОЦЕССЕ...</span>
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            <span>НАЧАТЬ АНАЛИЗ</span>
          </>
        )}
      </div>
    </motion.button>
  );
};

export default AnalyzeButton;
