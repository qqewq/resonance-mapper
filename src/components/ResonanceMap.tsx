import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
}

interface Connection {
  from: string;
  to: string;
  strength: number;
}

const ResonanceMap = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const nodes: Node[] = [
    { id: 'physics', label: 'Физика', x: 150, y: 60, color: 'hsl(var(--primary))' },
    { id: 'math', label: 'Математика', x: 280, y: 120, color: 'hsl(var(--accent))' },
    { id: 'biology', label: 'Биология', x: 120, y: 180, color: 'hsl(var(--glow-success))' },
    { id: 'cognitive', label: 'Когнитивистика', x: 250, y: 220, color: 'hsl(var(--glow-warning))' },
  ];

  const connections: Connection[] = [
    { from: 'physics', to: 'math', strength: 0.85 },
    { from: 'math', to: 'biology', strength: 0.62 },
    { from: 'biology', to: 'cognitive', strength: 0.78 },
    { from: 'cognitive', to: 'physics', strength: 0.45 },
    { from: 'physics', to: 'biology', strength: 0.55 },
    { from: 'math', to: 'cognitive', strength: 0.70 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const getNodePosition = (id: string) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-64 bg-surface-2/30 rounded-lg border border-border/30 overflow-hidden">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={`hsl(var(--primary) / ${conn.strength})`}
              strokeWidth={conn.strength * 3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute flex flex-col items-center"
          style={{ left: node.x - 30, top: node.y - 30 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.15, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: node.color,
              boxShadow: `0 0 20px ${node.color}`,
            }}
            animate={animationComplete ? {
              boxShadow: [
                `0 0 20px ${node.color}`,
                `0 0 30px ${node.color}`,
                `0 0 20px ${node.color}`,
              ],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-bold text-background">
              {node.label.charAt(0)}
            </span>
          </motion.div>
          <span className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ top: 0 }}
        animate={{ top: '100%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default ResonanceMap;
