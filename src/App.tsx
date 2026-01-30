import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PaperSection } from '@/components/PaperSection';
import { DatasetSection } from '@/components/DatasetSection';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <PaperSection />
        <DatasetSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
