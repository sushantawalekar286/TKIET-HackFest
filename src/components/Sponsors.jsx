import { motion } from 'framer-motion';

const sponsors = [
  { name: 'DevFolio', logo: 'DEVFOLIO' },
  { name: 'GitHub', logo: 'GITHUB' },
  { name: 'Microsoft', logo: 'MICROSOFT' },
  { name: 'Twilio', logo: 'TWILIO' },
  { name: 'DigitalOcean', logo: 'DIGITALOCEAN' },
  { name: 'MongoDB', logo: 'MONGODB' },
  { name: 'MLH', logo: 'MLH' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-16 border-y border-white/5 bg-slate-950/40 backdrop-blur-sm overflow-hidden">
      <div className="section-shell flex flex-col items-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80 mb-10 text-center">
          Backed By Visionaries
        </p>
        
        {/* Infinite Scroll setup (Simple flex layout with wrapping for now, 
            or wide container with animation) */}
        <div className="w-full relative flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-12 items-center max-w-5xl mx-auto">
            {sponsors.map((sponsor, idx) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, filter: 'brightness(1.5)' }}
                className="text-slate-400/70 font-display font-bold text-xl md:text-3xl tracking-widest cursor-pointer transition-all duration-300 hover:text-white"
              >
                {sponsor.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
