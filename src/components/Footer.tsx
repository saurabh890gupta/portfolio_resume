import { Code2, Heart } from 'lucide-react';
import { personal, navLinks, socialLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">
              {personal.name.split(' ')[0]}
              <span className="text-primary-400">.</span>
            </span>
          </div>

          {/* Quick links */}
          {/* <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav> */}

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const sectionId =
                    link.href === '/' ? 'hero' : link.href.substring(1);

                  document.getElementById(sectionId)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });

                  window.history.pushState({}, '', link.href);
                }}
                className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/60 text-slate-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-error-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
