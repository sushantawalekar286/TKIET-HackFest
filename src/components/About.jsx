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
            About The Hackathon
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title relative z-10">
            Organized By Department of Computer Science & Engineering
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="section-copy relative z-10">
            Logicode HackFest Hackathon 2026 is a university-level technical innovation event organized by the Department of Computer Science & Engineering under the Logicode Coding Club. The event provides students with a competitive platform to solve real-world problems using modern technologies within a focused 6-hour development sprint.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="relative z-10 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Real-world Problem Solving', 'Tackle genuine challenges with innovative solutions.'],
              ['Innovation & Creativity', 'Push boundaries and think outside the box.'],
              ['Industry-Level Evaluation', 'Get judged by experts on real-world criteria.'],
              ['Team Collaboration', 'Work together to build, design, and execute.'],
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
