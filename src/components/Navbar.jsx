import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar({ navigation, onNavigate, onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <button onClick={() => handleNavigate('about')} className="flex items-center gap-3 text-left" type="button">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/10 text-lg font-bold text-cyan-200 shadow-glowBlue">
            H
          </span>
          <span>
            <span className="block font-display text-lg font-bold tracking-wide text-white">HackFest</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-slate-400">2026</span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onRegister} className="hidden md:inline-flex gradient-button" type="button">
            Register Now
          </button>

          <button
            aria-label="Toggle menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-3 rounded-full bg-cyan-200" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="absolute left-0 top-full w-full border-b border-white/10 bg-slate-950/95 px-6 py-6 md:hidden backdrop-blur-2xl"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="section-shell flex flex-col gap-3 px-0">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10 transition"
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              <button onClick={onRegister} className="gradient-button mt-4 w-full" type="button">
                Register Now
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
