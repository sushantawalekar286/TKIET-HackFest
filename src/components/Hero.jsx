import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

function CountdownTimer() {
  const calculateTimeLeft = () => {
    // Set to some future date
    const targetDate = new Date('2026-05-22T08:00:00');
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="mt-8 flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Registration Closes In</span>
      <div className="flex gap-4">
        {Object.keys(timeLeft).length ? (
          Object.entries(timeLeft).map(([interval, value]) => (
            <div key={interval} className="flex flex-col items-center glass-card px-4 py-3 min-w-[70px]">
              <span className="font-display text-2xl font-bold text-white">{String(value).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400">{interval}</span>
            </div>
          ))
        ) : (
          <span className="text-white">Registration Closed</span>
        )}
      </div>
    </div>
  );
}

export default function Hero({ onRegister, onNavigate }) {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 pb-20">
      <div className="section-shell px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          className="relative z-10 flex flex-col items-center w-full"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan-300 uppercase">📅 22 May 2026</span>
            <span className="rounded-full bg-purple-500/10 border border-purple-400/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-purple-300 uppercase">📍 Offline Mode</span>
            <span className="rounded-full bg-green-500/10 border border-green-400/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-green-300 uppercase">🏆 Cash Prizes</span>
            <span className="rounded-full bg-yellow-500/10 border border-yellow-400/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-yellow-300 uppercase">👨‍💻 Team Size: 2–4</span>
            <span className="rounded-full bg-red-500/10 border border-red-400/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-red-300 uppercase">⏱️ 6 Hour Sprint</span>
            <span className="rounded-full bg-pink-500/10 border border-pink-400/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-pink-300 uppercase">🎓 FCT Colleges Only</span>
          </motion.div>

          {/* Centered Heading */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            LOGICODE<br />
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              HACKFEST 2026
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} transition={{ duration: 0.75 }} className="mt-8 text-base md:text-lg text-slate-400 max-w-2xl px-2">
            A university-level innovation challenge where students collaborate, build real-world solutions, and compete in an intense 6-hour coding sprint.
          </motion.p>

          <CountdownTimer />

          {/* Buttons */}
          <motion.div variants={fadeUp} transition={{ duration: 0.8 }} className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onRegister}
              className="gradient-button w-full sm:w-auto flex items-center justify-center gap-2 group text-base py-4 px-8"
              type="button"
            >
              Register Now 
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('themes')}
              className="ghost-button w-full sm:w-auto text-base py-4 px-8"
              type="button"
            >
              Explore Domains
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
