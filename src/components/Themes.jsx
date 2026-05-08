import { motion } from 'framer-motion';

const themes = [
  {
    title: 'FinTech',
    description: 'Innovative solutions for digital payments, banking access, and financial inclusion.',
    accent: 'from-violet-500/25 to-cyan-400/20',
    label: 'Finance',
  },
  {
    title: 'AgriTech',
    description: 'Smart technologies for agriculture and rural development.',
    accent: 'from-blue-500/25 to-cyan-400/20',
    label: 'Agriculture',
  },
  {
    title: 'EdTech',
    description: 'Tools for enhanced learning and accessible education.',
    accent: 'from-emerald-500/20 to-teal-400/20',
    label: 'Education',
  },
  {
    title: 'HealthTech',
    description: 'Technology-driven healthcare and wellness solutions.',
    accent: 'from-sky-500/20 to-indigo-500/20',
    label: 'Healthcare',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Themes() {
  return (
    <section id="themes" className="relative py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.55 }} className="section-label">
            Domains
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title">
            Four domains built for high-impact ideas.
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="section-copy">
            Choose a sector that fits your strengths, then innovate beyond the obvious. Each domain supports bold concepts to solve real-world problems.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme) => (
              <motion.article
                key={theme.title}
                className="group glass-card relative overflow-hidden p-7"
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-cyan-100">
                    {theme.label}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">{theme.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{theme.description}</p>
                  <div className="mt-6 h-px bg-gradient-to-r from-white/20 via-cyan-300/40 to-transparent" />
                  <p className="mt-5 text-sm text-cyan-100/90">Hover to reveal the glow.</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
