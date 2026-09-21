import { Briefcase, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experience } from '@/data/portfolio';

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="text-primary-400 font-mono text-sm tracking-wider mb-2">04 / EXPERIENCE</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Career Journey</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Professional experience building and shipping software across the stack.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/50 via-slate-700 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <div
                key={item.role}
                className={`reveal relative flex flex-col md:flex-row gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-slate-950 -translate-x-1/2 z-10 mt-6" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className="pl-12 md:pl-0 md:w-1/2">
                  <div className={`glass-card p-6 hover:border-primary-500/30 transition-colors ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-center gap-2 text-primary-400 text-sm font-mono mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="text-accent-400 font-medium text-sm mb-3">{item.company}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-slate-300">
                          <ChevronRight className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
