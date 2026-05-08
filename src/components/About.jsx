import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          className="glass-card relative overflow-hidden p-8 sm:p-10 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div className="glow-ring" />
          <motion.span variants={fadeUp} transition={{ duration: 0.55 }} className="section-label relative z-10">
            About The Event
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title relative z-10">
            A futuristic build arena for ambitious teams.
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="section-copy relative z-10">
            HackFest brings together creators who want more than a weekend challenge. Expect a sleek environment, expert guidance, and a fast-moving build culture focused on shipping polished ideas that feel real from the first demo.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Built for teams', 'Collaborate across design, product, and engineering roles.'],
              ['Mentorship loops', 'Get clear feedback from experienced builders throughout the event.'],
              ['Demo-ready polish', 'Ship something visual, useful, and presentation-friendly.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur-md">
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
