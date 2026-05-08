import { motion } from 'framer-motion';

const prizes = [
  {
    title: 'Winner',
    value: '₹3000',
    description: 'Top-tier recognition, spotlight demo, and premium certificate.',
    accent: 'from-violet-500/30 to-cyan-400/20',
  },
  {
    title: 'Runner-Up',
    value: '₹2000',
    description: 'A strong runner-up prize for a polished and useful prototype.',
    accent: 'from-blue-500/25 to-violet-500/20',
  },
  {
    title: 'Third Place',
    value: '₹1000',
    description: 'Recognition for standout design, utility, and technical craft.',
    accent: 'from-cyan-400/25 to-blue-500/20',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.55 }} className="section-label">
            Prizes
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title">
            Exciting Prizes to Win.
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="section-copy">
            In addition to cash prizes, all attendees will receive Participation Certificates. Expect excellent Networking Opportunities and Recognition Awards for the top teams.
          </motion.p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {prizes.map((prize, index) => (
              <motion.article
                key={prize.title}
                className="glass-card group relative overflow-hidden p-7"
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">{prize.title}</h3>
                  <p className="mt-3 text-3xl font-semibold text-cyan-100">{prize.value}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{prize.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
