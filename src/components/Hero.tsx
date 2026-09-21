import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { personal, socialLinks } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-sm text-slate-300">Available for new opportunities</span>
          <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 animate-fade-up">
          {personal.name.split(' ')[0]}{' '}
          <span className="text-gradient-animated">{personal.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {personal.title}
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {personal.tagline}. {personal.bio}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <MapPin className="w-4 h-4" />
          <span>{personal.location}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-7 py-3.5 font-medium text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 font-medium text-slate-200 glass rounded-xl hover:border-primary-500/50 transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center glass rounded-xl text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary-400 transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
