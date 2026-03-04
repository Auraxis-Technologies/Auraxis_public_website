
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Layers, 
  Users, 
  Rocket, 
  Cpu, 
  Cloud, 
  Settings, 
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Lock,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { ServiceItem, Step, TargetAudience } from './types';
import heroBanner from './assets/Auraxis_banner_dark.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: ServiceItem[] = [
    {
      title: "Custom Backend Solutions",
      description: "Tailor-made solutions to solve your startup's unique technical challenges.",
      icon: <Layers className="w-6 h-6 text-[#1A2B56]" />
    },
    {
      title: "Ongoing Strategic Support",
      description: "We don't just hand over code. We provide continuous maintenance, security updates, and architectural guidance as you grow.",
      icon: <Settings className="w-6 h-6 text-[#1E88E5]" />
    }
  ];

  const targetAudiences: TargetAudience[] = [
    {
      title: "Early-Stage Startups",
      description: "We provide the foundation you need to launch with confidence.",
      icon: <Rocket className="w-8 h-8 text-[#1E88E5]" />
    },
    {
      title: "Non-Technical Founders",
      description: "Your tech partner that speaks business. We handle the complexity while you build the vision.",
      icon: <Users className="w-8 h-8 text-[#6345ED]" />
    },
    {
      title: "Fast-Moving Teams",
      description: "Small teams that need to offload backend complexity to stay lean and focused on customer engagement.",
      icon: <Zap className="w-8 h-8 text-amber-500" />
    }
  ];

  const processSteps: Step[] = [
    {
      number: "01",
      title: "Discovery Call",
      description: "A short call to understand your product, users, and technical requirements."
    },
    {
      number: "02",
      title: "Fixed-Scope Build",
      description: "We define exactly what we're building and deliver it on a timeline and budget."
    },
    {
      number: "03",
      title: "Deployment & Growth",
      description: "Launch your system and optionally continue with our maintenance partnership."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden selection:bg-[#6345ED] selection:text-white">
      {/* Site-wide background pattern */}
      <div className="fixed inset-0 -z-20 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className={cn(
            "hover:opacity-90 transition-all",
            scrolled ? "text-[#1A2B56]" : "text-white"
          )}>
            <Logo className="h-10 md:h-12" roundBlend />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#built-for" className={cn(
              "text-[10px] font-black tracking-[0.25em] transition-colors uppercase",
              scrolled ? "text-[#1A2B56] hover:text-[#6345ED]" : "text-white/70 hover:text-white"
            )}>Strategic Partnership</a>
            <a href="#services" className={cn(
              "text-[10px] font-black tracking-[0.25em] transition-colors uppercase",
              scrolled ? "text-[#1A2B56] hover:text-[#6345ED]" : "text-white/70 hover:text-white"
            )}>Capabilities</a>
            <a href="#how-it-works" className={cn(
              "text-[10px] font-black tracking-[0.25em] transition-colors uppercase",
              scrolled ? "text-[#1A2B56] hover:text-[#6345ED]" : "text-white/70 hover:text-white"
            )}>Lifecycle</a>
            <Button 
              size="sm" 
              variant="secondary" 
              onClick={() => window.location.href = 'mailto:root@auraxis.ca'}
              className={cn(
                "rounded-full px-8 text-[10px] font-black tracking-widest uppercase transition-all",
                scrolled 
                  ? "bg-[#6345ED] hover:bg-[#5235d6] !text-white shadow-lg shadow-[#6345ED]/20" 
                  : "bg-white !text-[#0A1128] hover:bg-white/90 shadow-lg shadow-white/10"
              )}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-[#1A2B56]" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl"
            >
              <a href="#built-for" onClick={() => setIsMenuOpen(false)} className="text-sm font-black text-[#1A2B56] uppercase tracking-widest">Strategic Partnership</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm font-black text-[#1A2B56] uppercase tracking-widest">Capabilities</a>
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-sm font-black text-[#1A2B56] uppercase tracking-widest">Lifecycle</a>
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = 'mailto:root@auraxis.ca';
                }}
                className="w-full bg-[#6345ED] hover:bg-[#5235d6] text-white rounded-full uppercase tracking-widest font-black text-xs py-4" 
                variant="secondary"
              >
                Book a Call
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-[#0A1128]">
        {/* Professional Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={heroBanner} 
            alt="Auraxis Technology Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 via-[#0A1128]/70 to-[#0A1128]"></div>
          
          {/* Animated Accents */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#7CCDFD] rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-[#6345ED] rounded-full blur-[150px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mt-6 mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6345ED] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6345ED]"></span>
              </span>
              Engineered for ease of mind
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-12 tracking-tighter"
            >
              We Architect <span className="text-cyan-400">Software Solutions</span> <br/>
              to Scale Your <span className="text-indigo-400">Startup.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl leading-relaxed font-semibold"
            >
              Auraxis builds custom software solutions for startups, providing ongoing technical support and architectural expertise founders need to scale with confidence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'mailto:root@auraxis.ca'}
                className="w-full sm:w-auto gap-4 bg-[#6345ED] hover:bg-[#5235d6] text-white rounded-full shadow-2xl shadow-[#6345ED]/30 px-10 py-5 text-sm uppercase font-black tracking-[0.2em]"
              >
                Initialize Partnership <ArrowRight size={20} />
              </Button>
            </motion.div>
            <div className="h-10 md:h-16" />
          </div>
        </div>
      </header>

      {/* Network Section */}
      <section id="built-for" className="py-32 bg-[#F8FAFC] border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <h2 className="text-[10px] font-black text-[#6345ED] uppercase tracking-[0.5em] mb-8">Strategic Partnership</h2>
            <h3 className="text-5xl md:text-6xl font-black text-[#1A2B56] mb-10 leading-tight tracking-tight">Built by engineers <br/>who understand growth.</h3>
            <p className="text-xl text-slate-500 font-semibold max-w-2xl">We don't just write code; we architect the core systems of your company, ensuring every node contributes to long-term stability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {targetAudiences.map((audience, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#1E88E5]/30 transition-all hover:shadow-2xl group"
              >
                <div className="mb-10 p-6 rounded-2xl bg-slate-50 w-fit group-hover:bg-[#1A2B56] group-hover:text-white transition-all duration-500">
                  {audience.icon}
                </div>
                <h4 className="text-2xl font-black text-[#1A2B56] mb-6 uppercase tracking-tight">{audience.title}</h4>
                <p className="text-slate-500 leading-relaxed font-bold">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-28 gap-16">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black text-[#6345ED] uppercase tracking-[0.5em] mb-8">Capabilities</h2>
              <h3 className="text-6xl md:text-7xl font-black text-[#1A2B56] leading-[0.9] tracking-tighter">Software Solutions <br/>for Scale.</h3>
            </div>
            <div className="max-w-sm pt-4">
              <p className="text-slate-500 font-bold mb-8 text-lg">Building custom technical solutions with dedicated ongoing support for every stage of your journey.</p>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#6345ED] to-[#1E88E5]"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-12 rounded-[2rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all group"
              >
                <div className="mb-10">{service.icon}</div>
                <h4 className="text-lg font-black text-[#1A2B56] mb-6 uppercase tracking-[0.1em]">{service.title}</h4>
                <p className="text-slate-500 mb-10 leading-relaxed font-bold">{service.description}</p>
              </motion.div>
            ))}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A2B56] p-12 rounded-[2rem] shadow-2xl text-white flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-1000"></div>
              <div className="relative z-10">
                <h4 className="text-4xl font-black mb-6 leading-none tracking-tight">Custom <br/>Logic.</h4>
                <p className="text-blue-100/60 mb-4 font-bold text-lg">Solving complex business requirements: Customer data management, payment integration, mobile applications, and AI.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section id="how-it-works" className="py-40 bg-[#1A2B56] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-[10px] font-black text-[#7CCDFD] uppercase tracking-[0.6em] mb-10">Lifecycle</h2>
            <h3 className="text-6xl font-black mb-10 tracking-tighter leading-none">Engineering for Longevity.</h3>
            <p className="text-xl text-blue-100/40 font-bold leading-relaxed max-w-2xl mx-auto">Our workflow is rooted in careful consideration and rigorous testing, ensuring your software is a strategic asset.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-24 relative">
            <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full bg-white text-[#1A2B56] flex items-center justify-center text-4xl font-black mb-12 shadow-2xl transition-all duration-700 group-hover:bg-[#7CCDFD]"
                >
                  {step.number}
                </motion.div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{step.title}</h4>
                <p className="text-blue-100/40 max-w-xs font-bold leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 md:p-24 border border-slate-200 shadow-[0_40px_100px_-20px_rgba(26,43,86,0.1)] flex flex-col lg:flex-row items-center justify-between gap-20 overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <h3 className="text-6xl md:text-8xl font-black text-[#1A2B56] mb-10 tracking-tighter leading-[0.9]">Scale <br/>with a <br/>Partner.</h3>
              <p className="text-xl text-slate-500 mb-12 font-bold leading-relaxed">Partner with Auraxis Technologies today and transform your technical challenges into a competitive advantage with our ongoing support.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                  <CheckCircle2 className="text-[#6345ED]" size={18} /> Strategic Design Review
                </div>
                <div className="flex items-center gap-4 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                  <CheckCircle2 className="text-[#1E88E5]" size={18} /> Expert Followup
                </div>
                <div className="flex items-center gap-4 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                  <CheckCircle2 className="text-[#7CCDFD]" size={18} /> Scaling Roadmap
                </div>
                <div className="flex items-center gap-4 text-slate-900 font-black uppercase text-[10px] tracking-[0.2em]">
                  <CheckCircle2 className="text-[#1A2B56]" size={18} /> Continuous Support
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto text-center relative z-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-[#1A2B56] text-white rounded-[3rem] p-16 shadow-2xl shadow-[#1A2B56]/40 transition-all duration-700 border border-white/10"
              >
                <h4 className="text-2xl font-black mb-4 uppercase tracking-[0.1em]">Partnership Initialized</h4>
                <p className="text-blue-100/40 text-[10px] mb-12 font-black uppercase tracking-[0.4em]">Available Sessions this Week</p>
                <Button 
                  variant="secondary" 
                  onClick={() => window.location.href = 'mailto:root@auraxis.ca'}
                  className="bg-[#6345ED] text-white hover:bg-[#5235d6] w-full py-8 text-2xl font-black rounded-3xl shadow-2xl shadow-[#6345ED]/30 uppercase tracking-widest"
                >
                  Book a Call
                </Button>
                <p className="mt-10 text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">No-Obligation Protocol</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0A1128] pt-20 pb-12 border-t border-white/10 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            <div className="col-span-1">
              <img src={heroBanner} alt="Auraxis Technologies" className="h-16 mb-12 w-auto object-contain object-left" />
              <p className="text-slate-400 font-bold text-sm leading-relaxed max-w-xs uppercase tracking-tight opacity-80">
                The premier custom software partner for high-growth startups. Dedicated ongoing support.
              </p>
              <p className="mt-6 text-slate-500 text-xs font-bold uppercase tracking-widest opacity-70">
                Proudly in Canada 🇨🇦
              </p>
            </div>
            <div>
              <h5 className="font-black text-blue-100 mb-10 uppercase tracking-[0.3em] text-[10px]">Expertise</h5>
              <ul className="space-y-6 text-[11px] text-slate-400 font-black uppercase tracking-widest">
                <li><a href="#" className="hover:text-[#6345ED] transition-all">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-[#6345ED] transition-all">DevOps Lifecycle</a></li>
                <li><a href="#" className="hover:text-[#6345ED] transition-all">Ongoing Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] text-slate-500 font-black uppercase tracking-[0.4em]">
            <p>© 2026 Auraxis Technologies Inc - your software partner in Canada 🇨🇦</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
