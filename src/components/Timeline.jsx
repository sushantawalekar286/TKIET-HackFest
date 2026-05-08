import { motion } from 'framer-motion';

const milestones = [
  {
    time: '08:00 AM',
    title: 'Registration & Verification',
    description: 'Teams sign in, verify their details, and settle in.',
  },
  {
    time: '09:00 AM',
    title: 'Inauguration Ceremony',
    description: 'Kickoff the hackathon with opening remarks and the problem statement.',
  },
  {
    time: '10:00 AM',
    title: 'Coding Session I',
    description: 'The sprint begins. Start building your solutions.',
  },
  {
    time: '12:30 PM',
    title: 'Snack Break',
    description: 'Relax, recharge, and network.',
  },
  {
    time: '01:00 PM',
    title: 'Coding Session II',
    description: 'Resume the development sprint and polish your prototypes.',
  },
  {
    time: '02:30 PM',
    title: 'Mid Evaluation',
    description: 'Mentors assess progress and provide valuable feedback.',
  },
  {
    time: '03:30 PM',
    title: 'Final Evaluation',
    description: 'Present polished prototypes to the judges.',
  },
  {
    time: '04:30 PM',
    title: 'Prize Distribution',
    description: 'Celebrate the strongest builds and announce winners.',
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
