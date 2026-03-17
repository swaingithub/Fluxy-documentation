'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  Code2, 
  ArrowRight, 
  Github, 
  Cpu,
  Terminal,
  Box,
  Smartphone,
  Globe,
  Database,
  CheckCircle2,
  Sparkles,
  Star,
  Activity,
  Palette,
  TerminalSquare,
  Copy,
  Users
} from 'lucide-react';
import { FluxyLogo } from '@/components/logo';

export default function LandingPage() {
  const [codeTab, setCodeTab] = useState<'builder' | 'tailwind'>('tailwind');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const handleCopy = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-indigo-500/30 font-sans antialiased overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full mix-blend-screen opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <FluxyLogo className="w-9 h-9 relative z-10" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Fluxy
            </span>
            <div className="hidden sm:flex px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold tracking-widest text-indigo-400 ml-2">
              v1.2.3
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <NavLink href="/docs">Documentation</NavLink>
            <NavLink href="/docs/components">Components</NavLink>
            <NavLink href="/docs/fundamentals/reactive-engine">Engine</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/swaingithub/fluxy" 
              className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <Github size={20} />
            </Link>
            <Link 
              href="/docs" 
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-bold tracking-wide transition-all hover:bg-gray-50 hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
            >
              Get Started <ArrowRight size={14} className="text-black/70" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
              <Sparkles size={12} className="text-indigo-400" />
              <span className="text-white/80">Fluxy v1.2.3 is now available with Elite Motion System</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
              Build Flutter apps <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400">
                at Light Speed.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              The high-performance framework that unifies <span className="text-gray-300 font-medium">State</span>, <span className="text-gray-300 font-medium">Networking</span>, and <span className="text-gray-300 font-medium">Style</span>. <br className="hidden md:block"/>
              Write 80% less boilerplate. Ship 10x faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                href="/docs" 
                className="group relative px-8 py-4 bg-white text-black rounded-xl text-base font-bold tracking-wide hover:bg-gray-50 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Building <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-black" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md font-mono text-sm text-white/60 hover:bg-white/[0.05] transition-colors cursor-text group">
                <span className="text-indigo-400 select-none">$</span>
                <span className="group-hover:text-white transition-colors">fluxy init my_app</span>
                <button 
                  onClick={() => navigator.clipboard.writeText('fluxy init my_app')}
                  className="ml-4 p-1.5 rounded-md hover:bg-white/10 text-white/30 hover:text-white transition-all"
                  title="Copy"
                >
                  <Code2 size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10 bg-white/[0.01] rounded-3xl">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">10x</div>
              <div className="text-white/50 text-sm font-bold tracking-wide uppercase">Dev Velocity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">-80%</div>
              <div className="text-white/50 text-sm font-bold tracking-wide uppercase">Boilerplate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">0</div>
              <div className="text-white/50 text-sm font-bold tracking-wide uppercase">Extra Packages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2 drop-shadow-lg">v1.2.3</div>
              <div className="text-indigo-400/50 text-sm font-bold tracking-wide uppercase">Production Ready</div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard 
              title="Reactive Engine"
              desc="Granular updates with Signals. No context hell."
              icon={<Zap className="text-yellow-400" size={24} />}
              gradient="from-yellow-500/20 to-orange-500/5"
            />
            <BentoCard 
              title="Global Networking"
              desc="Zero-dependency HTTP client with smart caching."
              icon={<Globe className="text-blue-400" size={24} />}
              gradient="from-blue-500/20 to-cyan-500/5"
            />
            <BentoCard 
              title="Atomic Styling"
              desc="Tailwind-like logic for Flutter widgets."
              icon={<Box className="text-purple-400" size={24} />}
              gradient="from-purple-500/20 to-pink-500/5"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
             <BentoCard 
              title="Stability Kernel™"
              desc="Auto-repair for layout overflows and render crashes."
              icon={<Smartphone className="text-rose-400" size={24} />}
              gradient="from-rose-500/20 to-red-500/5"
              className="md:col-span-1"
            />
             <BentoCard 
              title="Elite Motion"
              desc="Mesh gradients, neon borders, and physical fluid physics."
              icon={<Sparkles className="text-white" size={24} />}
              gradient="from-indigo-500/20 to-blue-800/5"
              className="md:col-span-1"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
             <BentoCard 
              title="Offline Architecture"
              desc="Local-first repositories with auto-sync."
              icon={<Database className="text-emerald-400" size={24} />}
              gradient="from-emerald-500/20 to-green-500/5"
              className="md:col-span-1"
            />
             <BentoCard 
              title="CLI Automation"
              desc="Generate features, models, and controllers instantly."
              icon={<Terminal className="text-white" size={24} />}
              gradient="from-slate-500/20 to-slate-800/5"
              className="md:col-span-1"
            />
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 relative overflow-hidden mt-12">
          <div className="absolute inset-0 bg-indigo-900/5 sm:bg-indigo-900/10 border-y border-white/5" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen opacity-50 translate-x-1/3 -translate-y-1/3" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide">
                  <Star size={14} className="fill-indigo-400" /> Production Showcase
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Premium aesthetics, <br />
                  <span className="text-white/40">zero compromise.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                  Fluxy isn't just about logical architecture. It's a complete design engineering system. Build stunning e-commerce apps, intricate social platforms, and fintech dashboards with built-in dark mode and elite physics.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                    <Activity className="text-rose-400 mb-3" size={24} />
                    <h4 className="font-bold text-white mb-1">Fluid Physics</h4>
                    <p className="text-sm text-white/50">Apple-like spring animations baked into primitives.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                    <Palette className="text-cyan-400 mb-3" size={24} />
                    <h4 className="font-bold text-white mb-1">Auto Dark Mode</h4>
                    <p className="text-sm text-white/50">Seamless light & dark themes without extra code.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link href="/docs/ecommerce/overview" className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all border border-white/10 hover:border-white/30 shadow-xl">
                    Explore E-Commerce Showcase 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full relative">
                <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-[600px] flex items-center justify-center">
                  <motion.img 
                    initial={{ y: 50, opacity: 0, rotate: -5 }}
                    whileInView={{ y: 0, opacity: 1, rotate: -5 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src="/ecommerce-screenshots/screenshot-1.png" 
                    className="absolute left-[5%] w-[50%] rounded-[2rem] border-[6px] border-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 hover:z-30 hover:rotate-0 hover:scale-105 transition-all duration-500" 
                    alt="App Preview" 
                  />
                  <motion.img 
                    initial={{ y: 100, opacity: 0, rotate: 5 }}
                    whileInView={{ y: 40, opacity: 1, rotate: 5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    src="/ecommerce-screenshots/screenshot-23.png" 
                    className="absolute right-[5%] w-[50%] rounded-[2rem] border-[6px] border-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 hover:z-30 hover:rotate-0 hover:scale-105 transition-all duration-500" 
                    alt="App Preview Dark" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Comparison */}
        <section className="container mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Stop writing <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400">Spaghetti Code.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Fluxy eliminates deeply nested widget trees. Chain your styles natively, or use the blazing fast <span className="text-indigo-400 font-semibold">Tailwind CSS syntax</span>, and let the engine handle the rest.
              </p>
              
              <ul className="space-y-4 pt-4">
                <CheckItem text="80% less boilerplate code" />
                <CheckItem text="No explicit BuildContext required" />
                <CheckItem text="Automatic memory management" />
                <CheckItem text="Type-safe responsive design" />
              </ul>
            </div>

            <div className="flex-1 w-full max-w-2xl relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="relative bg-[#0F0F10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button 
                        onClick={() => setCodeTab('builder')}
                        className={`text-xs font-mono px-3 py-1 rounded-md transition-colors ${codeTab === 'builder' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
                      >
                        builder_syntax.dart
                      </button>
                      <button 
                        onClick={() => setCodeTab('tailwind')}
                        className={`text-xs font-mono px-3 py-1 rounded-md transition-colors ${codeTab === 'tailwind' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
                      >
                        tailwind_syntax.dart
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 overflow-x-auto min-h-[280px]">
                  {codeTab === 'builder' ? (
                    <pre className="font-mono text-sm leading-relaxed">
                      <code>
                        <span className="text-purple-400">Fluxy</span>.<span className="text-blue-400">box</span>()<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">p</span>(20).<span className="text-yellow-400">rounded</span>(16)<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">bg</span>(Colors.white)<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">shadow</span>.lg<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">onTap</span>(() =&gt; controller.<span className="text-blue-400">login</span>())<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">child</span>(<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.<span className="text-blue-400">col</span>()<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-400">gap</span>(8)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-400">children</span>([<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.<span className="text-blue-400">text</span>(<span className="text-green-400">"Welcome Back"</span>).<span className="text-yellow-400">h2</span>(),<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.<span className="text-blue-400">text</span>(user.name).<span className="text-yellow-400">muted</span>(),<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])<br/>
                        &nbsp;&nbsp;)
                      </code>
                    </pre>
                  ) : (
                    <pre className="font-mono text-sm leading-relaxed">
                      <code>
                        <span className="text-purple-400">Fluxy</span>.<span className="text-blue-400">box</span>()<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">tw</span>(<span className="text-green-400">'p-5 rounded-2xl bg-white shadow-lg cursor-pointer'</span>)<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">onTap</span>(() =&gt; controller.<span className="text-blue-400">login</span>())<br/>
                        &nbsp;&nbsp;.<span className="text-yellow-400">child</span>(<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.<span className="text-blue-400">col</span>()<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-400">tw</span>(<span className="text-green-400">'gap-2'</span>)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-400">children</span>([<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.<span className="text-blue-400">text</span>(<span className="text-green-400">"Welcome Back"</span>).<span className="text-yellow-400">tw</span>(<span className="text-green-400">'text-2xl font-bold text-gray-900'</span>),<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.<span className="text-blue-400">text</span>(user.name).<span className="text-yellow-400">tw</span>(<span className="text-green-400">'text-gray-500 text-sm'</span>),<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])<br/>
                        &nbsp;&nbsp;)
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Quick Start Terminal */}
        <section className="container mx-auto px-6 py-20 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="flex-1 w-full relative order-2 lg:order-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-[#0F0F10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-xs font-mono text-white/30">
                    <TerminalSquare size={14} /> zsh — fluxy-cli
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Step 1 */}
                  <div className="flex items-start justify-between group">
                    <div className="font-mono text-sm leading-relaxed">
                      <span className="text-emerald-400"># 1. Install Fluxy CLI globally</span><br/>
                      <span className="text-white/40">$</span> <span className="text-white">dart pub global activate fluxy_cli</span>
                    </div>
                    <button onClick={() => handleCopy('dart pub global activate fluxy_cli', 1)} className="p-2 text-white/20 hover:text-white transition-colors">
                      {copiedStep === 1 ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start justify-between group pt-2">
                    <div className="font-mono text-sm leading-relaxed">
                      <span className="text-emerald-400"># 2. Initialize a new project</span><br/>
                      <span className="text-white/40">$</span> <span className="text-white">fluxy create my_ecommerce_app</span>
                    </div>
                    <button onClick={() => handleCopy('fluxy create my_ecommerce_app', 2)} className="p-2 text-white/20 hover:text-white transition-colors">
                      {copiedStep === 2 ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start justify-between group pt-2">
                    <div className="font-mono text-sm leading-relaxed">
                      <span className="text-emerald-400"># 3. Launch your app in seconds!</span><br/>
                      <span className="text-white/40">$</span> <span className="text-white">cd my_ecommerce_app && flutter run</span>
                    </div>
                    <button onClick={() => handleCopy('cd my_ecommerce_app && flutter run', 3)} className="p-2 text-white/20 hover:text-white transition-colors">
                      {copiedStep === 3 ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex-1 space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                From zero to production <br />
                <span className="text-emerald-400">in under a minute.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Fluxy comes entirely batteries-included. Our CLI sets up your entire project architecture, state management files, standard assets, and native bindings before you even open your IDE.
              </p>
              
              <Link href="/docs/fundamentals/cli" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                Explore CLI Documentation <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>

        {/* Social Proof Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/5">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
              <Users size={16} className="text-blue-400" /> Loved by Flutter Developers
            </div>
            <h3 className="text-2xl md:text-4xl font-bold max-w-3xl leading-snug">
              "Fluxy fundamentally changed how our team ships. We design faster, write less bugs, and don't worry about state architecture anymore."
            </h3>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg border-2 border-white/10 shadow-xl shadow-indigo-500/20">
                R
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Rakesh Swain</div>
                <div className="text-sm text-white/50">Creator of Fluxy Framework</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20 text-center">
            <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                  Ready to upgrade your workflow?
                </h2>
                
                <Link 
                  href="/docs" 
                  className="inline-flex px-10 py-5 bg-white text-black rounded-full text-xl font-bold tracking-wide hover:scale-105 transition-transform shadow-xl"
                >
                  Read the Docs
                </Link>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 overflow-hidden bg-[#050505]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] pointer-events-none" />
        
        {/* Large watermark */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none z-0">
          FLUXY
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-8 max-w-sm">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <FluxyLogo className="w-10 h-10 relative z-10" />
                </div>
                <span className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  Fluxy
                </span>
              </Link>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                The ultimate application framework for Flutter. Engineered for production-grade scale, supreme performance, and breathtaking native aesthetics.
              </p>
              <div className="flex gap-4 pt-2">
                 <Link href="https://github.com/swaingithub/fluxy" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all hover:scale-110 shadow-lg">
                   <Github size={18} />
                 </Link>
                 <Link href="https://twitter.com/swaingithub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all hover:scale-110 shadow-lg">
                   <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z"/></svg>
                 </Link>
              </div>
            </div>
            
            <div className="space-y-6 lg:ml-auto">
                <h4 className="font-bold text-white tracking-wide">Resources</h4>
                <div className="flex flex-col gap-4">
                  <FooterLink href="/docs">Documentation</FooterLink>
                  <FooterLink href="/docs/fundamentals/fluxy-core">API Reference</FooterLink>
                  <FooterLink href="/docs/components">Components</FooterLink>
                  <FooterLink href="/docs/production">Production Guide</FooterLink>
                </div>
            </div>

            <div className="space-y-6 lg:ml-auto">
                <h4 className="font-bold text-white tracking-wide">Ecosystem</h4>
                <div className="flex flex-col gap-4">
                  <FooterLink href="/docs/fundamentals/cli">Fluxy CLI</FooterLink>
                  <FooterLink href="/docs/fundamentals/state-management">Reactive State</FooterLink>
                  <FooterLink href="/docs/ecosystem/networking">Networking</FooterLink>
                  <FooterLink href="https://pub.dev/packages/fluxy">Pub.dev Package</FooterLink>
                </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
             <div className="flex items-center gap-2">
                © 2026 Rakesh Swain. All rights reserved.
             </div>
             
             <div className="flex items-center gap-8">
               <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
               <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 
                 Systems Operational
               </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group py-2">
      <span className="relative z-10 hover:text-white transition-colors">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function BentoCard({ title, desc, icon, gradient, className }: any) {
  return (
    <div className={`p-8 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden ${className}`}>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white relative z-10">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed relative z-10">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <CheckCircle2 size={18} className="text-emerald-500" />
      <span>{text}</span>
    </div>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  const isExternal = href.startsWith('http');
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    // @ts-ignore
    <Component href={href} {...props} className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors cursor-pointer">
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
      </span>
      {isExternal && <ArrowRight size={12} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:text-indigo-400 transition-all duration-300" />}
    </Component>
  );
}
