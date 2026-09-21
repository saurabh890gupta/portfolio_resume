import { ArrowUpRight, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="text-primary-400 font-mono text-sm tracking-wider mb-2">03 / PROJECTS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Featured Work</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects showcasing full-stack development and cloud architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="reveal glass-card overflow-hidden hover:border-primary-500/30 transition-all hover:scale-[1.02] group"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Header */}
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative w-16 h-16 rounded-2xl bg-slate-900/60 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-primary-400 transition-colors shrink-0" />
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-success-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800/60 border border-slate-700 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
