import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface FormulaDisplayProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

const FormulaDisplay = ({ formula, displayMode = true, className = '' }: FormulaDisplayProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(formula, containerRef.current, {
          displayMode,
          throwOnError: false,
          trust: true,
        });
      } catch (e) {
        console.error('KaTeX error:', e);
      }
    }
  }, [formula, displayMode]);

  return (
    <div
      ref={containerRef}
      className={`font-mono text-foreground ${className}`}
    />
  );
};

export default FormulaDisplay;
