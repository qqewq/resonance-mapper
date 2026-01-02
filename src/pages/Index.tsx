import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import InputPanel from '@/components/InputPanel';
import MathematicalBasis from '@/components/MathematicalBasis';
import OutputPanel from '@/components/OutputPanel';
import AnalyzeButton from '@/components/AnalyzeButton';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const [domains, setDomains] = useState([
    { id: 'physics', label: 'Теоретическая физика', checked: true },
    { id: 'numbers', label: 'Теория чисел', checked: true },
    { id: 'biology', label: 'Математическая биология', checked: false },
    { id: 'cognitive', label: 'Когнитивная наука', checked: true },
  ]);

  const [analysisMode, setAnalysisMode] = useState('structural');

  const [sources, setSources] = useState([
    { id: 'arxiv', label: 'arXiv', checked: true },
    { id: 'semantic', label: 'Semantic Scholar', checked: true },
  ]);

  const handleDomainChange = (id: string, checked: boolean) => {
    setDomains(domains.map(d => d.id === id ? { ...d, checked } : d));
  };

  const handleSourceChange = (id: string, checked: boolean) => {
    setSources(sources.map(s => s.id === id ? { ...s, checked } : s));
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

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
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Input Panel */}
            <div className="lg:col-span-3">
              <InputPanel
                domains={domains}
                analysisMode={analysisMode}
                sources={sources}
                onDomainChange={handleDomainChange}
                onModeChange={setAnalysisMode}
                onSourceChange={handleSourceChange}
              />

              <div className="mt-4">
                <AnalyzeButton isAnalyzing={isAnalyzing} onClick={handleAnalyze} />
              </div>
            </div>

            {/* Mathematical Basis */}
            <div className="lg:col-span-4">
              <MathematicalBasis />
            </div>

            {/* Output Panel */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showResults ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
              >
                <OutputPanel />
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/30 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              Resonance Knowledge Synthesizer v1.0 | EN/RU
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
