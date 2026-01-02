import { motion } from 'framer-motion';
import GlowingCard from './GlowingCard';
import FormulaDisplay from './FormulaDisplay';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface SolutionOutputProps {
  solution: string | null;
  isAnalyzing: boolean;
  validationStatus: {
    contradictions: boolean;
    invariance: boolean;
    consistency: boolean;
  };
  mathematicalSteps: {
    goal: string;
    additionalGoals: string;
    resonancePoints: string;
    proof: string;
  } | null;
}

const SolutionOutput = ({ solution, isAnalyzing, validationStatus, mathematicalSteps }: SolutionOutputProps) => {
  return (
    <div className="space-y-6">
      {/* Solution Field */}
      <GlowingCard delay={0.3}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📤</span>
            <h2 className="text-lg font-semibold text-foreground">ПОЛЕ ВЫВОДА РЕШЕНИЯ</h2>
          </div>

          <div className="min-h-[150px] p-4 rounded-md bg-surface-2/50 border border-border/30">
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <p className="text-sm text-muted-foreground font-mono">
                  Вычисление структурно неизбежного решения...
                </p>
              </div>
            ) : solution ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                <p className="text-sm text-primary font-mono mb-2">
                  [Структурно неизбежное решение найдено]
                </p>
                <p className="text-foreground leading-relaxed">{solution}</p>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full py-8">
                <p className="text-muted-foreground/60 font-mono text-sm">
                  Область для вывода структурно неизбежного решения
                </p>
              </div>
            )}
          </div>
        </div>
      </GlowingCard>

      {/* Mathematical Calculations */}
      <GlowingCard glowColor="accent" delay={0.4}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🧮</span>
            <h2 className="text-lg font-semibold text-foreground">МАТЕМАТИЧЕСКИЕ ВЫКЛАДКИ</h2>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Формализация цели G₀', value: mathematicalSteps?.goal },
              { label: 'Применение дополнительных целей', value: mathematicalSteps?.additionalGoals },
              { label: 'Расчет резонансных точек', value: mathematicalSteps?.resonancePoints },
              { label: 'Доказательство условия Φ(Ψ*, G₀) = 0', value: mathematicalSteps?.proof },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-3 rounded-md bg-surface-2/30 border border-border/20"
              >
                <p className="text-xs text-muted-foreground font-mono mb-2">• {item.label}</p>
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    <span className="text-xs text-muted-foreground">Вычисление...</span>
                  </div>
                ) : item.value ? (
                  <div className="overflow-x-auto">
                    <FormulaDisplay formula={item.value} displayMode={false} className="text-xs" />
                  </div>
                ) : (
                  <span className="text-xs text-muted-foreground/50">—</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </GlowingCard>

      {/* Validation */}
      <GlowingCard delay={0.5}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">✅</span>
            <h2 className="text-lg font-semibold text-foreground">ВАЛИДАЦИЯ</h2>
          </div>

          <div className="space-y-2">
            {[
              { label: 'Проверка на противоречия', status: validationStatus.contradictions },
              { label: 'Инвариантность относительно преобразований', status: validationStatus.invariance },
              { label: 'Согласованность с существующими теориями', status: validationStatus.consistency },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-2 rounded bg-surface-2/30"
              >
                {isAnalyzing ? (
                  <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />
                ) : solution ? (
                  item.status ? (
                    <CheckCircle2 className="w-4 h-4 text-glow-success" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-destructive" />
                  )
                ) : (
                  <div className="w-4 h-4 rounded-full border border-muted-foreground/30" />
                )}
                <span className="text-sm text-foreground/80">• {item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </GlowingCard>
    </div>
  );
};

export default SolutionOutput;
