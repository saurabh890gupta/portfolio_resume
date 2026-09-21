import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { personal, socialLinks } from '@/data/portfolio';

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="text-primary-400 font-mono text-sm tracking-wider mb-2">05 / CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Let's Build Together</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or looking for a developer? I'm just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="reveal md:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm">{personal.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-white mb-3">Connect</h3>
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
                      className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/60 text-slate-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal md:col-span-3 glass-card p-6 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-2">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-success-500 text-sm animate-fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-error-500 text-sm animate-fade-in">
                <AlertCircle className="w-5 h-5" />
                <span>Please fill in all fields.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-medium text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
