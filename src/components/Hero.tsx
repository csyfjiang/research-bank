import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { papers, directions } from '@/data/papers';
import { loadGeneralDatasets, loadMedicalDatasets } from '@/lib/csvLoader';
import { 
  BookOpen, 
  Database, 
  Compass, 
  Sparkles,
  FileText,
  FolderOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { t } = useLanguage();
  const [datasetCount, setDatasetCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDatasetCount() {
      try {
        const [general, medical] = await Promise.all([
          loadGeneralDatasets(),
          loadMedicalDatasets()
        ]);
        setDatasetCount(general.length + medical.length);
      } catch (err) {
        console.error('Failed to load dataset count:', err);
        setDatasetCount(0);
      } finally {
        setLoading(false);
      }
    }
    loadDatasetCount();
  }, []);

  const stats = [
    { 
      icon: BookOpen, 
      value: papers.length, 
      label: t.totalPapers,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Database, 
      value: loading ? '...' : datasetCount, 
      label: t.totalDatasets,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Compass, 
      value: directions.length, 
      label: t.researchDirections,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const scrollToPapers = () => {
    document.getElementById('papers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDatasets = () => {
    document.getElementById('datasets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/20" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {t.heroTitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              ResearchBank
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={scrollToPapers}
              variant="outline"
              className="w-40 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:border-blue-400"
            >
              <FileText className="mr-2 h-4 w-4" />
              {t.papers}
            </Button>
            <Button
              size="lg"
              onClick={scrollToDatasets}
              variant="outline"
              className="w-40 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20 dark:border-purple-400"
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              {t.datasets}
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
}
