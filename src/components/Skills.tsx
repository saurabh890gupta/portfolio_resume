import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="text-primary-400 font-mono text-sm tracking-wider mb-2">02 / SKILLS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Technical Expertise</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, databases, and cloud infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="reveal glass-card p-6 hover:border-primary-500/30 transition-all hover:scale-[1.02] group"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 rounded-lg hover:border-primary-500/40 hover:text-primary-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
