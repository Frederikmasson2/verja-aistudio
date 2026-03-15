import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, ShieldAlert, Mail, User, Terminal, ArrowUpRight, Lock, FileCheck, Activity, Github, Slack } from 'lucide-react';
import HeroSpline from './components/HeroSpline';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#050505] dark:text-[#e0e0e0] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-500">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 lg:p-12 text-[10px] uppercase tracking-[0.2em] z-50 mix-blend-difference pointer-events-auto text-white">
        <div className="flex gap-4 lg:gap-8 items-center">
          <a href="#home" className="text-white font-bold text-sm tracking-[0.3em] mr-2 lg:mr-8">VERJA</a>
          <a href="#platform" className="hover:text-white/80 transition-colors">Platform</a>
          <a href="#methodology" className="hover:text-white/80 transition-colors hidden sm:block pt-0">Methodology</a>
        </div>
        <div className="flex gap-4 lg:gap-6 items-center">
          <ThemeToggle />
          <a href="#contact" className="border-b border-white/30 pb-1 hover:border-white transition-colors">Book Pentest</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center p-6 lg:p-24 z-10 overflow-hidden">
        {/* Spline Background Container */}
        <HeroSpline />

        {/* Foreground Content (pointer events none so Spline is interactive, auto on interactive children if needed) */}
        <div className="relative z-10 pointer-events-none flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-7xl mx-auto mt-20 lg:mt-0">
          
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-8xl font-light leading-[1.1] tracking-tight mix-blend-difference text-white"
            >
              Pentesting in days, <br/>
              not weeks. <br/>
              <span className="font-serif italic text-white/90">Platform-delivered.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-8 text-black/60 dark:text-white/60 max-w-md leading-relaxed mix-blend-difference text-white/70"
            >
              When your next enterprise deal, SOC2 audit, or Series A requires a pentest — get it done at a fraction of the traditional cost. Human-validated, actionable results.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/3 mt-24 lg:mt-0 flex flex-col gap-0"
          >
            {[
              { label: 'Web Applications', desc: 'OWASP Top 10 & Business Logic' },
              { label: 'API Security', desc: 'Endpoint & Auth Validation' },
              { label: 'Human Validated', desc: 'Zero False Positives' },
              { label: 'Actionable Reports', desc: 'Jira & GitHub Ready' }
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center border-b border-black/10 dark:border-white/10 py-6 group cursor-default mix-blend-difference border-white/20 hover:border-white/40 transition-colors">
                <div>
                  <span className="block text-xs uppercase tracking-[0.15em] group-hover:translate-x-4 transition-transform duration-500 ease-out text-black dark:text-white text-white">{item.label}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 mt-2 group-hover:translate-x-4 transition-transform duration-500 ease-out delay-75 text-white/40">{item.desc}</span>
                </div>
                <Lock className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-white/50" />
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Logos / Credibility */}
      <section className="py-24 bg-zinc-100 dark:bg-[#0a0a0a] border-y border-black/5 dark:border-white/5 overflow-hidden relative z-10 transition-colors duration-500">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-100 dark:from-[#0a0a0a] to-transparent z-10 transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-100 dark:from-[#0a0a0a] to-transparent z-10 transition-colors duration-500" />
        
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/30 mb-12">Securing the next generation of SaaS</p>
        
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-24 items-center pr-24 text-black/30 dark:text-white/40"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-2xl lg:text-4xl font-serif italic hover:text-black dark:hover:text-white transition-colors cursor-default">FintechX</span>
                <span className="text-2xl lg:text-4xl font-light tracking-widest hover:text-black dark:hover:text-white transition-colors cursor-default">DATASYNC</span>
                <span className="text-2xl lg:text-4xl font-serif hover:text-black dark:hover:text-white transition-colors cursor-default">HealthFlow</span>
                <span className="text-2xl lg:text-4xl font-bold tracking-tighter hover:text-black dark:hover:text-white transition-colors cursor-default">NEXUS_API</span>
                <span className="text-2xl lg:text-4xl font-serif italic hover:text-black dark:hover:text-white transition-colors cursor-default">CloudScale</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works / Platform */}
      <section id="platform" className="py-32 px-6 lg:px-24 bg-zinc-50 dark:bg-[#050505] relative z-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6">The Platform <br/><span className="font-serif italic">Advantage</span></h2>
            <p className="text-zinc-600 dark:text-white/50 max-w-xl text-sm leading-relaxed">
              We combine the speed of automated scanning with the precision of human pentesters. No commoditized vulnerability scanners. No slow traditional consultancies. Just fast, repeatable, and actionable security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Scope & Onboard", 
                desc: "Book through the platform. We collect your URLs, API endpoints, environments, and auth credentials in minutes.",
                icon: <Terminal className="w-6 h-6 text-black/40 dark:text-white/40" />
              },
              { 
                step: "02", 
                title: "Scan & Validate", 
                desc: "Automated scanning runs against your assets. Our human pentesters review, validate, and add manual business-logic findings.",
                icon: <Activity className="w-6 h-6 text-black/40 dark:text-white/40" />
              },
              { 
                step: "03", 
                title: "Actionable Output", 
                desc: "Get a clean dashboard with findings ranked by severity, a downloadable PDF for auditors, and direct Jira/GitHub ticket creation.",
                icon: <FileCheck className="w-6 h-6 text-black/40 dark:text-white/40" />
              }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="border border-black/10 dark:border-white/10 p-10 rounded-3xl bg-black/5 dark:bg-white/[0.01] hover:bg-black/10 dark:hover:bg-white/[0.03] transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-6xl font-serif italic text-black/5 dark:text-white/5">{s.step}</div>
                <div className="mb-8">{s.icon}</div>
                <h3 className="text-xl font-medium mb-4">{s.title}</h3>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-24 bg-zinc-100 dark:bg-[#0a0a0a] border-y border-black/5 dark:border-white/5 relative z-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">Trusted by <br/><span className="font-serif italic">engineering leaders</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Verja helped us close a Fortune 500 deal. Their platform-delivered pentest was incredibly fast, and the human validation meant zero false positives for our team to chase.", author: "Sarah Jenkins", role: "CTO, FintechX" },
              { text: "We needed a pentest for our SOC2 Type II audit. Verja delivered a comprehensive PDF report and pushed Jira tickets directly to our devs in under 5 days.", author: "Marcus Thorne", role: "VP Engineering, DataSync" },
              { text: "Traditional consultancies quoted us 4 weeks and $30k. Verja got us onboarded in minutes and delivered superior, actionable results for a fraction of the cost.", author: "Elena Rostova", role: "CISO, CloudScale" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="border border-black/10 dark:border-white/10 p-10 rounded-3xl bg-zinc-50 hover:bg-white dark:bg-transparent dark:hover:bg-white/[0.02] transition-colors group shadow-sm dark:shadow-none"
              >
                <p className="text-lg font-light leading-relaxed mb-12 text-zinc-700 dark:text-white/80">"{t.text}"</p>
                <div className="mt-auto">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-[10px] text-zinc-500 dark:text-white/40 uppercase tracking-widest mt-2">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 px-6 lg:px-24 bg-zinc-50 dark:bg-[#050505] relative z-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-7xl font-light mb-8 tracking-tight">
              Secure your <br/>
              next big <br/>
              <span className="font-serif italic text-black dark:text-white">milestone.</span>
            </h2>
            <p className="text-zinc-500 dark:text-white/50 max-w-md text-sm leading-relaxed mb-12">
              Don't let security hold up your enterprise deals or compliance audits. Book a pentest today and get actionable results in days.
            </p>
            
            <div className="space-y-6 text-sm text-zinc-600 dark:text-white/60">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p>Capacity available for this month</p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-black/10 dark:border-white/10 w-fit">
                <Github className="w-4 h-4" />
                <Slack className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest ml-2">Integrates with your workflow</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="flex flex-col gap-10 bg-white shadow-xl dark:shadow-none dark:bg-white/[0.02] p-8 lg:p-12 rounded-3xl border border-black/5 dark:border-white/5">
              <div className="relative border-b border-black/20 dark:border-white/20 pb-4 focus-within:border-black dark:focus-within:border-white transition-colors group">
                <label className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 absolute -top-4 left-0 transition-all group-focus-within:text-black dark:group-focus-within:text-white/80">Company Name</label>
                <div className="flex items-center gap-4 mt-4">
                  <Terminal className="w-4 h-4 text-black/30 dark:text-white/30 group-focus-within:text-black dark:group-focus-within:text-white/80 transition-colors" />
                  <input type="text" placeholder="Acme SaaS" className="bg-transparent w-full outline-none text-sm placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white" />
                </div>
              </div>
              
              <div className="relative border-b border-black/20 dark:border-white/20 pb-4 focus-within:border-black dark:focus-within:border-white transition-colors group">
                <label className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 absolute -top-4 left-0 transition-all group-focus-within:text-black dark:group-focus-within:text-white/80">Work Email</label>
                <div className="flex items-center gap-4 mt-4">
                  <Mail className="w-4 h-4 text-black/30 dark:text-white/30 group-focus-within:text-black dark:group-focus-within:text-white/80 transition-colors" />
                  <input type="email" placeholder="founder@acme.com" className="bg-transparent w-full outline-none text-sm placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white" />
                </div>
              </div>
              
              <div className="relative border-b border-black/20 dark:border-white/20 pb-4 focus-within:border-black dark:focus-within:border-white transition-colors group">
                <label className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 absolute -top-4 left-0 transition-all group-focus-within:text-black dark:group-focus-within:text-white/80">Scope / Timeline</label>
                <div className="flex items-start gap-4 mt-4">
                  <Activity className="w-4 h-4 text-black/30 dark:text-white/30 mt-1 group-focus-within:text-black dark:group-focus-within:text-white/80 transition-colors" />
                  <textarea placeholder="We need a pentest for our upcoming SOC2 audit..." rows={3} className="bg-transparent w-full outline-none text-sm resize-none placeholder:text-black/30 dark:placeholder:text-white/20 text-black dark:text-white"></textarea>
                </div>
              </div>
              
              <button type="button" className="group self-start flex items-center gap-4 bg-zinc-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-zinc-800 dark:hover:bg-gray-200 transition-all mt-4">
                Book Pentest
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 relative z-10 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500">
        <div className="flex items-center gap-4">
          <span className="text-black dark:text-white font-bold tracking-[0.3em]">VERJA</span>
          <span>&copy; 2026. All rights reserved.</span>
        </div>
        <div className="flex gap-8 items-center">
          <span>Copenhagen, Denmark</span>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
        </div>
      </footer>

    </div>
  );
}
