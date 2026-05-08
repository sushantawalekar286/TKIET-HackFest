import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyJoin from './components/WhyJoin';
import Themes from './components/Themes';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const Scene = lazy(() => import('./three/Scene'));

const registerUrl = 'https://forms.gle/YOUR_LINK';

const sectionIds = ['about', 'whyjoin', 'themes', 'timeline', 'prizes', 'faq'];

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let finished = false;

    const settle = () => {
      if (finished) {
        return;
      }

      finished = true;
      window.setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === 'complete') {
      settle();
    } else {
      window.addEventListener('load', settle, { once: true });
    }

    return () => {
      finished = true;
      window.removeEventListener('load', settle);
    };
  }, []);

  const navigation = useMemo(
    () => sectionIds.map((id) => ({ id, label: id === 'faq' ? 'FAQ' : id === 'whyjoin' ? 'Why Join' : id.charAt(0).toUpperCase() + id.slice(1) })),
    [],
  );

  const handleRegister = () => {
    window.open(registerUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020617]">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
        style={{ scaleX: scrollYProgress }}
      />

      {/* GLOBAL 3D BACKGROUND LAYER - FIXED LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl animate-glow" />
        <div className="absolute right-[-6%] top-[18%] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <div className="absolute bottom-[-8%] left-[22%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="glass-card flex flex-col items-center gap-4 px-8 py-10 text-center">
              <div className="h-16 w-16 rounded-full border-2 border-cyan-300/30 border-t-cyan-300 animate-spin" />
              <div>
                <p className="font-display text-xl font-semibold text-white">HackFest 2026</p>
                <p className="mt-1 text-sm text-slate-400">Booting the neon experience...</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar navigation={navigation} onNavigate={scrollToSection} onRegister={handleRegister} />

      <main className="relative z-10">
        <Hero onRegister={handleRegister} onNavigate={scrollToSection} />
        <Sponsors />
        <About />
        <WhyJoin />
        <Themes />
        <Timeline />
        <Prizes />
        <FAQ />
      </main>

      <Footer navigation={navigation} onNavigate={scrollToSection} />
    </div>
  );
}
