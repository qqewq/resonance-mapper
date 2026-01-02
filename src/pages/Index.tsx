import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import TaskInput from '@/components/TaskInput';
import InputPanel from '@/components/InputPanel';
import MathematicalBasis from '@/components/MathematicalBasis';
import AnalysisProcedure from '@/components/AnalysisProcedure';
import SolutionOutput from '@/components/SolutionOutput';
import AnalyzeButton from '@/components/AnalyzeButton';

const Index = () => {
  const [task, setTask] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [solution, setSolution] = useState<string | null>(null);

  const [domains, setDomains] = useState([
    { id: 'physics', label: 'Теоретическая физика', checked: false },
    { id: 'numbers', label: 'Теория чисел', checked: false },
    { id: 'biology', label: 'Математическая биология', checked: false },
    { id: 'cognitive', label: 'Когнитивная наука', checked: false },
  ]);

  const [analysisMode, setAnalysisMode] = useState('structural');

  const [sources, setSources] = useState([
    { id: 'arxiv', label: 'arXiv', checked: true },
    { id: 'semantic', label: 'Semantic Scholar', checked: true },
  ]);

  const [validationStatus, setValidationStatus] = useState({
    contradictions: false,
    invariance: false,
    consistency: false,
  });

  const [mathematicalSteps, setMathematicalSteps] = useState<{
    goal: string;
    additionalGoals: string;
    resonancePoints: string;
    proof: string;
  } | null>(null);

  const handleDomainChange = (id: string, checked: boolean) => {
    setDomains(domains.map(d => d.id === id ? { ...d, checked } : d));
  };

  const handleSourceChange = (id: string, checked: boolean) => {
    setSources(sources.map(s => s.id === id ? { ...s, checked } : s));
  };

  const runAnalysis = useCallback(async () => {
    if (!task.trim()) return;

    setIsAnalyzing(true);
    setSolution(null);
    setMathematicalSteps(null);
    setValidationStatus({ contradictions: false, invariance: false, consistency: false });

    // Simulate step-by-step analysis
    for (let step = 1; step <= 5; step++) {
      setCurrentStep(step);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Generate mock mathematical steps
    setMathematicalSteps({
      goal: String.raw`G_0 = \text{arg}\max_{\psi} \langle \psi | \hat{H}_{\text{связь}} | \psi \rangle`,
      additionalGoals: String.raw`\lambda_1 K(\Psi) + \lambda_2 \|\Psi - \mathcal{T}(\Psi)\|^2`,
      resonancePoints: String.raw`\omega_1 = 0.78, \omega_2 = 0.62, \omega_{\text{рез}} = 0.85`,
      proof: String.raw`\Phi(\Psi^*, G_0) = \sum_{i \neq j} |\langle \psi_i | \mathcal{P}_{G_0} | \psi_j \rangle|^2 = 0`,
    });

    // Set validation
    setValidationStatus({
      contradictions: true,
      invariance: true,
      consistency: true,
    });

    // Generate solution based on selected domains
    const selectedDomains = domains.filter(d => d.checked).map(d => d.label);
    const domainText = selectedDomains.length > 0 
      ? selectedDomains.join(' и ') 
      : 'выбранных областей';

    setSolution(
      `Структурная связь между ${domainText} установлена через резонансный анализ. ` +
      `Обнаружена инвариантная структура с коэффициентом резонанса ω = 0.85. ` +
      `Когнитивная пена успешно обнулена: Φ(Ψ*, G₀) = 0. ` +
      `Решение удовлетворяет всем дополнительным целям G₁-G₄ и является структурно неизбежным.`
    );

    setCurrentStep(0);
    setIsAnalyzing(false);
  }, [task, domains]);

  return (
    <>
      <Helmet>
        <title>Resonance Knowledge Synthesizer | Гибридная Резонансная Архитектура</title>
        <meta
          name="description"
          content="Advanced scientific knowledge synthesis tool using hybrid resonance architecture for cross-domain pattern detection and cognitive foam elimination."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="max-w-7xl mx-auto px-4 pb-12">
          {/* Task Input Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 glass-panel rounded-lg p-6"
          >
            <TaskInput value={task} onChange={setTask} />
          </motion.section>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Column - Input & Procedure */}
            <div className="lg:col-span-4 space-y-6">
              <InputPanel
                domains={domains}
                analysisMode={analysisMode}
                sources={sources}
                onDomainChange={handleDomainChange}
                onModeChange={setAnalysisMode}
                onSourceChange={handleSourceChange}
              />

              <AnalyzeButton 
                isAnalyzing={isAnalyzing} 
                onClick={runAnalysis}
                disabled={!task.trim()}
              />

              <AnalysisProcedure 
                currentStep={currentStep} 
                isAnalyzing={isAnalyzing} 
              />
            </div>

            {/* Middle Column - Mathematical Basis */}
            <div className="lg:col-span-4">
              <MathematicalBasis />
            </div>

            {/* Right Column - Output */}
            <div className="lg:col-span-4">
              <SolutionOutput
                solution={solution}
                isAnalyzing={isAnalyzing}
                validationStatus={validationStatus}
                mathematicalSteps={mathematicalSteps}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/30 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              Resonance Knowledge Synthesizer v1.0 | Гибридная Резонансная Архитектура | EN/RU
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
