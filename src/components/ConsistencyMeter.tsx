import { motion } from 'framer-motion';

interface ConsistencyMeterProps {
  value: number;
  phi: number;
}

const ConsistencyMeter = ({ value, phi }: ConsistencyMeterProps) => {
  const segments = 10;
  const filledSegments = Math.round((value / 100) * segments);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground font-mono">Φ(Ψ, G₀) = {phi.toFixed(2)}</span>
        <span className="text-primary font-mono">{value}%</span>
      </div>
      
      <div className="flex gap-1">
        {Array.from({ length: segments }).map((_, index) => (
          <motion.div
            key={index}
            className={`h-6 flex-1 rounded-sm ${
              index < filledSegments 
                ? 'bg-primary' 
                : 'bg-surface-3/50 border border-border/30'
            }`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            style={{
              boxShadow: index < filledSegments 
                ? '0 0 10px hsl(var(--primary) / 0.5)' 
                : 'none',
            }}
          />
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-muted-foreground font-mono">
        <span>[</span>
        <span>{Array.from({ length: filledSegments }).map(() => '|').join('')}</span>
        <span>{Array.from({ length: segments - filledSegments }).map(() => '.').join('')}</span>
        <span>]</span>
      </div>
    </div>
  );
};

export default ConsistencyMeter;
