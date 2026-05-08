import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'Who can participate?',
    answer: 'Students from FCT colleges affiliated with Warana University.',
  },
  {
    question: 'What is the team size?',
    answer: 'Minimum 2 and maximum 4 members.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Yes, ₹100 per participant.',
  },
  {
    question: 'What should participants bring?',
    answer: 'Laptop, charger, extension board, and valid college ID.',
  },
  {
    question: 'Will certificates be provided?',
    answer: 'Yes, all participants will receive certificates.',
  },
  {
    question: 'Can we use any technology stack?',
    answer: 'Yes, teams may use any suitable technologies.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.55 }} className="section-label">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.55 }} className="section-title">
            The essentials, answered quickly.
          </motion.h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.article
                  key={faq.question}
                  className="glass-card overflow-hidden"
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="font-display text-lg font-semibold text-white">{faq.question}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-cyan-200">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-5"
                      >
                        <p className="max-w-3xl text-sm leading-7 text-slate-300">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
