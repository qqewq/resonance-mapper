import { motion } from 'framer-motion';
import GlowingCard from './GlowingCard';
import FormulaDisplay from './FormulaDisplay';

const formulas = [
  {
    title: 'Формализация когнитивной пены',
    formula: String.raw`\Phi(\Psi, G) := \sum_{i\neq j} \left| \langle \psi_i | \mathcal{P}_G | \psi_j \rangle \right|^2`,
  },
  {
    title: 'Многоцелевая оптимизация',
    formula: String.raw`\min_{\Psi} \left( \Phi(\Psi, G_0) + \sum_{i=1}^k \lambda_i \mathcal{L}_{G_i}(\Psi) \right)`,
  },
  {
    title: 'Резонансный анализ',
    formula: String.raw`\omega_{\text{рез}} = \frac{1}{D} \cdot \sum_{k=1}^N \frac{q_k}{m_k}`,
  },
  {
    title: 'Условие структурной неизбежности',
    formula: String.raw`\Phi(\Psi^*, G_0) = 0`,
  },
  {
    title: 'Вероятность достижения цели',
    formula: String.raw`P_{\text{total}} = 1 - \prod_{i=1}^n (1 - P_i)`,
  },
];

const additionalGoals = [
  { label: 'G₁ (MDL)', formula: String.raw`\min K(\Psi)` },
  { label: 'G₂ (Инвариантность)', formula: String.raw`\Psi \equiv \mathcal{T}(\Psi)` },
  { label: 'G₃ (Причинная замкнутость)', formula: String.raw`\forall x \in \Psi,\; \exists \text{ причинная цепь к } G_0` },
  { label: 'G₄ (Согласованность)', formula: String.raw`\forall i,j:\; \langle \psi_i | \mathcal{P}_{G_0} | \psi_j \rangle = \langle \psi_j | \mathcal{P}_{G_0} | \psi_i \rangle` },
];

const MathematicalBasis = () => {
  return (
    <GlowingCard glowColor="accent" delay={0.2}>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🧮</span>
          <h2 className="text-lg font-semibold text-foreground">МАТЕМАТИЧЕСКАЯ ОСНОВА</h2>
        </div>

        <div className="grid gap-4">
          {formulas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-4 rounded-md bg-surface-2/50 border border-border/30 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-muted-foreground mb-2 font-mono">{item.title}:</p>
              <div className="overflow-x-auto">
                <FormulaDisplay formula={item.formula} className="text-sm" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-xs text-muted-foreground mb-3 font-mono">Дополнительные цели:</p>
          <div className="grid gap-2">
            {additionalGoals.map((goal, index) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 p-2 rounded bg-surface-3/30 border border-border/20"
              >
                <span className="text-xs text-accent font-mono whitespace-nowrap">{goal.label}:</span>
                <div className="overflow-x-auto flex-1">
                  <FormulaDisplay formula={goal.formula} displayMode={false} className="text-xs" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};

export default MathematicalBasis;
