import { motion } from 'framer-motion';
import GlowingCard from './GlowingCard';

const procedureSteps = [
  {
    step: 1,
    text: 'При получении задачи: активируй резонансный анализ для определения Γ_понимание^LLM',
  },
  {
    step: 2,
    text: 'Если Γ_понимание^LLM < Γ_крит^созн: активируй ГРА-метаанализатор',
  },
  {
    step: 3,
    text: 'Примени функционал обнуления пены с дополнительными целями',
  },
  {
    step: 4,
    text: 'Проверь условие Φ(Ψ*, G₀) = 0',
  },
  {
    step: 5,
    text: 'Если условие выполнено: решение структурно неизбежно',
  },
];

interface AnalysisProcedureProps {
  currentStep: number;
  isAnalyzing: boolean;
}

const AnalysisProcedure = ({ currentStep, isAnalyzing }: AnalysisProcedureProps) => {
  return (
    <GlowingCard glowColor="accent" delay={0.2}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">⚙️</span>
          <h2 className="text-lg font-semibold text-foreground">ПРОЦЕДУРА АНАЛИЗА</h2>
        </div>

        <div className="space-y-3">
          {procedureSteps.map((item, index) => {
            const isActive = isAnalyzing && index + 1 === currentStep;
            const isComplete = isAnalyzing && index + 1 < currentStep;
            
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-start gap-3 p-3 rounded-md border transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary/10 border-primary/50 glow-primary' 
                    : isComplete
                    ? 'bg-glow-success/10 border-glow-success/30'
                    : 'bg-surface-2/30 border-border/20'
                }`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                  isActive 
                    ? 'bg-primary text-primary-foreground animate-pulse' 
                    : isComplete
                    ? 'bg-glow-success text-background'
                    : 'bg-surface-3 text-muted-foreground'
                }`}>
                  {isComplete ? '✓' : item.step}
                </div>
                <p className={`text-sm font-mono ${
                  isActive 
                    ? 'text-primary' 
                    : isComplete
                    ? 'text-glow-success'
                    : 'text-foreground/70'
                }`}>
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </GlowingCard>
  );
};

export default AnalysisProcedure;
