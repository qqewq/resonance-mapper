import { motion } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import GlowingCard from './GlowingCard';

interface InputPanelProps {
  domains: { id: string; label: string; checked: boolean }[];
  analysisMode: string;
  sources: { id: string; label: string; checked: boolean }[];
  onDomainChange: (id: string, checked: boolean) => void;
  onModeChange: (mode: string) => void;
  onSourceChange: (id: string, checked: boolean) => void;
}

const InputPanel = ({
  domains,
  analysisMode,
  sources,
  onDomainChange,
  onModeChange,
  onSourceChange,
}: InputPanelProps) => {
  return (
    <GlowingCard className="h-full" delay={0.1}>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📋</span>
          <h2 className="text-lg font-semibold text-foreground">ВВОД</h2>
        </div>

        {/* Scientific Domains */}
        <div className="space-y-3">
          <Label className="text-sm text-muted-foreground font-mono">
            {'<<НАУЧНЫЕ ОБЛАСТИ>>'}
          </Label>
          <div className="space-y-2">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center space-x-3 group"
              >
                <Checkbox
                  id={domain.id}
                  checked={domain.checked}
                  onCheckedChange={(checked) => onDomainChange(domain.id, checked as boolean)}
                  className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label
                  htmlFor={domain.id}
                  className="text-sm text-foreground/80 group-hover:text-primary transition-colors cursor-pointer"
                >
                  {domain.label}
                </Label>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Analysis Mode */}
        <div className="space-y-3">
          <Label className="text-sm text-muted-foreground font-mono">
            {'<<РЕЖИМ АНАЛИЗА>>'}
          </Label>
          <RadioGroup value={analysisMode} onValueChange={onModeChange}>
            {[
              { value: 'structural', label: 'Структурные аналогии' },
              { value: 'optimization', label: 'Оптимизация параметров' },
              { value: 'verification', label: 'Верификация гипотез' },
            ].map((mode, index) => (
              <motion.div
                key={mode.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-3 group"
              >
                <RadioGroupItem
                  value={mode.value}
                  id={mode.value}
                  className="border-primary/50 text-primary"
                />
                <Label
                  htmlFor={mode.value}
                  className="text-sm text-foreground/80 group-hover:text-primary transition-colors cursor-pointer"
                >
                  {mode.label}
                </Label>
              </motion.div>
            ))}
          </RadioGroup>
        </div>

        {/* Sources */}
        <div className="space-y-3">
          <Label className="text-sm text-muted-foreground font-mono">
            {'<<ИСТОЧНИКИ>>'}
          </Label>
          <div className="space-y-2">
            {sources.map((source, index) => (
              <motion.div
                key={source.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-3 group"
              >
                <Checkbox
                  id={source.id}
                  checked={source.checked}
                  onCheckedChange={(checked) => onSourceChange(source.id, checked as boolean)}
                  className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label
                  htmlFor={source.id}
                  className="text-sm text-foreground/80 group-hover:text-primary transition-colors cursor-pointer"
                >
                  {source.label}
                </Label>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};

export default InputPanel;
