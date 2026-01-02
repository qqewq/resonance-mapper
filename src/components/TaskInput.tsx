import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TaskInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TaskInput = ({ value, onChange }: TaskInputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-3"
    >
      <Label className="text-sm text-muted-foreground font-mono">
        {'<<ПОЛЕ ВВОДА ЗАДАЧИ>>'}
      </Label>
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder='Пример: "Найти структурную связь между распределением простых чисел и спектром квантового хаотического оператора"'
          className="min-h-[120px] bg-surface-2/50 border-border/50 text-foreground placeholder:text-muted-foreground/60 resize-none focus:border-primary/50 focus:ring-primary/20 font-mono text-sm"
        />
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">
          {value.length} символов
        </div>
      </div>
    </motion.div>
  );
};

export default TaskInput;
