import { motion } from 'framer-motion';

const milestones = [
  {
    time: 'Day 0',
    title: 'Registration and onboarding',
    description: 'Teams sign in, meet mentors, and get the challenge brief.',
  },
  {
    time: 'Hour 1',
    title: 'Ideation sprint',
    description: 'Refine the problem, map user value, and pick a build direction.',
  },
  {
    time: 'Midway check',
    title: 'Mentor review',
    description: 'Validate scope, de-risk the concept, and sharpen the demo story.',
  },
  {
    time: 'Final hour',
    title: 'Demo and awards',
    description: 'Present polished prototypes and celebrate the strongest builds.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.55 }} className="section-label">
            Timeline
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title">
            A clear path from idea to demo.
          </motion.h2>

          <div className="relative mt-12 grid gap-6 lg:mt-16">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400/70 via-blue-400/40 to-transparent md:left-7" />
            {milestones.map((milestone, index) => (
              <motion.article
                key={milestone.title}
                className="relative ml-0 rounded-3xl border border-white/10 bg-white/5 p-6 pl-16 backdrop-blur-xl md:ml-8"
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                whileHover={{ x: 4 }}
              >
                <div className="absolute left-2 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950 text-xs font-bold text-cyan-100 shadow-glowBlue md:left-0">
                  {index + 1}
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">{milestone.time}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{milestone.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">{milestone.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
