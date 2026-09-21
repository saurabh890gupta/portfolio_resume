import { useScrollReveal } from '@/hooks/useScrollReveal';
import { personal, stats } from '@/data/portfolio';

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="text-primary-400 font-mono text-sm tracking-wider mb-2">01 / ABOUT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="reveal space-y-5">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm {personal.name}, a {personal.title.toLowerCase()} based in {personal.location}.
              I specialize in building production-grade web applications that scale — from
              designing clean APIs to deploying resilient infrastructure on AWS.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My journey spans the entire stack: crafting pixel-perfect interfaces with React and
              Angular, building performant backends with Node.js, modeling data in MongoDB and SQL
              databases, and managing cloud infrastructure with AWS services like EC2, S3, and
              CloudWatch. I believe great software is both functional and elegant.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source, or
              optimizing CI/CD pipelines for faster, more reliable deliveries.
            </p>
          </div>

          {/* Stats grid */}
          <div className="reveal grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card p-6 hover:border-primary-500/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
