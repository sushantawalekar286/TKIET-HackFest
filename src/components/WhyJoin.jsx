import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Networking',
    description: 'Connect with industry experts, brilliant peers, and potential future co-founders.',
    icon: (
      <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'Turn your boldest ideas into functioning prototypes without creative constraints.',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
  },
  {
    title: 'Mentorship',
    description: 'Get deep technical guidance from senior engineers working at top tech companies.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    ),
  },
  {
    title: 'Prizes',
    description: 'Compete for an enormous prize pool, hardware gifts, and exclusive software credits.',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyJoin() {
  return (
    <section id="whyjoin" className="relative py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center md:text-left"
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.55 }} className="section-label">
            Benefits
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title">
            Why Join HackFest?
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="section-copy mx-auto md:mx-0">
            More than just coding. Experience 48 hours of rapid learning, building, and accelerating your career trajectory.
          </motion.p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <motion.article
                key={benefit.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group relative glass-card p-8 flex flex-col items-start overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition-opacity duration-300 group-hover:bg-purple-500/20" />
                
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 ring-1 ring-inset ring-white/10 shadow-glowBlue transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 relative z-10">{benefit.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                  {benefit.description}
                </p>
                
                {/* Bottom Neon Glow line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
