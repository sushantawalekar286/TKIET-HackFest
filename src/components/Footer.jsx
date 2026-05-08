export default function Footer({ navigation, onNavigate }) {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-white">HackFest</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            A futuristic hackathon landing experience built for speed, clarity, and a premium demo feel.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {[
            ['X', 'https://x.com'],
            ['IG', 'https://instagram.com'],
            ['GH', 'https://github.com'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs font-bold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="section-shell mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 HackFest. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, Framer Motion, and React Three Fiber.</p>
      </div>
    </footer>
  );
}
