import { motion } from 'framer-motion';
import GlowingCard from './GlowingCard';
import ResonanceMap from './ResonanceMap';
import ConsistencyMeter from './ConsistencyMeter';
import { ExternalLink } from 'lucide-react';

const criticalPoints = [
  {
    domain1: 'Теоретическая физика',
    domain2: 'Теория чисел',
    points: [
      { name: 'structural_invariants', value: 0.78 },
      { name: 'transformations', value: 0.62 },
    ],
    resonance: 0.85,
  },
];

const recommendedMethods = [
  'Инвариантный анализ через групповые преобразования',
  'Сравнение спектральных свойств',
  'Топологическая классификация связей',
];

const scientificPapers = [
  {
    title: 'Structural Analogies in Modern Mathematics',
    url: 'https://arxiv.org/abs/2401.12345',
    source: 'arXiv',
  },
  {
    title: 'Cognitive Foam Elimination in Scientific Discovery',
    url: 'https://semantic-scholar.org/paper/12345',
    source: 'Semantic Scholar',
  },
];

const OutputPanel = () => {
  return (
    <GlowingCard delay={0.3}>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📤</span>
          <h2 className="text-lg font-semibold text-foreground">ВЫВОД</h2>
        </div>

        {/* Resonance Map */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-mono">{'<<КАРТА РЕЗОНАНСОВ>>'}</p>
          <ResonanceMap />
        </div>

        {/* Critical Points */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <p className="text-sm text-muted-foreground font-mono">{'<<КРИТИЧЕСКИЕ ТОЧКИ>>'}</p>
          {criticalPoints.map((cp, index) => (
            <div
              key={index}
              className="p-4 rounded-md bg-surface-2/50 border border-border/30 space-y-2"
            >
              <p className="text-sm text-foreground">
                • Структурная аналогия между{' '}
                <span className="text-primary">[{cp.domain1}]</span> и{' '}
                <span className="text-accent">[{cp.domain2}]</span>:
              </p>
              <div className="ml-4 space-y-1">
                {cp.points.map((point) => (
                  <p key={point.name} className="text-xs text-muted-foreground font-mono">
                    - Критическая точка "{point.name}":{' '}
                    <span className="text-primary">{point.value.toFixed(2)}</span>
                  </p>
                ))}
              </div>
              <p className="text-sm text-foreground ml-4">
                • Коэффициент резонанса:{' '}
                <span className="text-primary font-mono">{cp.resonance.toFixed(2)}</span>
              </p>
            </div>
          ))}
        </motion.div>

        {/* Consistency Meter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <p className="text-sm text-muted-foreground font-mono">{'<<СТЕПЕНЬ СОГЛАСОВАННОСТИ>>'}</p>
          <ConsistencyMeter value={85} phi={0.15} />
        </motion.div>

        {/* Recommended Methods */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-2"
        >
          <p className="text-sm text-muted-foreground font-mono">{'<<РЕКОМЕНДУЕМЫЕ МЕТОДЫ>>'}</p>
          <div className="space-y-1">
            {recommendedMethods.map((method, index) => (
              <p key={index} className="text-sm text-foreground flex items-center gap-2">
                <span className="text-primary">•</span>
                {method}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Scientific Papers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-2"
        >
          <p className="text-sm text-muted-foreground font-mono">{'<<НАУЧНЫЕ РАБОТЫ>>'}</p>
          <div className="space-y-2">
            {scientificPapers.map((paper, index) => (
              <a
                key={index}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-md bg-surface-2/50 border border-border/30 hover:border-primary/50 transition-colors group"
              >
                <span className="text-primary font-mono">{index + 1}.</span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors flex-1">
                  "{paper.title}"
                </span>
                <span className="text-xs text-muted-foreground">{paper.source}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </GlowingCard>
  );
};

export default OutputPanel;
