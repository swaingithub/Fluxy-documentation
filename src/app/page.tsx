'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  Code2, 
  ArrowRight, 
  Github, 
  ExternalLink,
  Cpu,
  Smartphone,
  Sparkles,
  Terminal
} from 'lucide-react';
import { FluxyLogo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-50 selection:bg-primary/30">
      {/* Dynamic Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[160px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[160px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px] rounded-full animate-float" />
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FluxyLogo className="w-10 h-10 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Fluxy
            </span>
            <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-white/40 ml-2">
              v0.2.0
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-wide text-white/50">
            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <Link href="/docs/core-concepts" className="hover:text-white transition-colors">Engine</Link>
            <Link href="/docs/examples" className="hover:text-white transition-colors">Showcase</Link>
            <Link href="https://github.com/swaingithub/fluxy" className="flex items-center gap-2 hover:text-white transition-colors">
              GitHub <Github size={14} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/docs" 
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-black hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-48 pb-32 px-6">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-10 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-500/80">
                  New v0.2.0: Professional Inspector & Scoped DI
                </span>
              </div>

              <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12">
                REACTIVE <br />
                <span className="text-gradient">AUTHORITY.</span>
              </h1>

              <p className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium tracking-tight">
                The high-performance engine for Flutter that unifies <span className="text-white">State</span>, <span className="text-white">Networking</span>, and <span className="text-white">Style</span> into a single, cohesive application platform.
              </p>

              <div className="max-w-xl mx-auto mb-16 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative glass rounded-2xl px-6 py-4 flex flex-col gap-3 border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 font-mono text-sm md:text-base text-white/70">
                        <span className="text-emerald-500">$</span>
                        <span>dart pub global activate fluxy</span>
                      </div>
                      <button 
                        onClick={() => navigator.clipboard.writeText('dart pub global activate fluxy')}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/40 hover:text-white"
                        title="Copy to clipboard"
                      >
                        <Code2 size={18} />
                      </button>
                    </div>
                    <div className="h-px bg-white/5 w-full" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 font-mono text-sm md:text-base text-white/70">
                        <span className="text-emerald-500">$</span>
                        <span>fluxy init my_awesome_app</span>
                      </div>
                      <button 
                        onClick={() => navigator.clipboard.writeText('fluxy init my_awesome_app')}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/40 hover:text-white"
                        title="Copy to clipboard"
                      >
                        <Code2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href="/docs" 
                  className="w-full sm:w-auto px-12 py-6 bg-primary text-primary-foreground rounded-2xl text-2xl font-black hover:scale-105 transition-all shadow-[0_0_60px_-15px_rgba(var(--primary),0.6)] group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Building <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
                <div className="flex items-center gap-10">
                  <StatItem value="v0.2.0" label="Stable" />
                  <div className="w-px h-10 bg-white/10" />
                  <StatItem value="60fps" label="Isolate Engine" />
                </div>
              </div>
            </motion.div>

            {/* Code Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-32 max-w-6xl mx-auto"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-[2.5rem] blur-2xl opacity-20" />
                <div className="relative glass rounded-[2.5rem] overflow-hidden">
                  <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="text-[10px] font-black tracking-widest uppercase text-white/30">lib/features/auth/controller.dart</div>
                    <div className="w-20" />
                  </div>
                  <div className="p-12 text-left md:text-xl font-mono leading-relaxed overflow-x-auto text-white/80">
                    <pre>
                      <code>
                        <span className="text-purple-400">class</span> <span className="text-emerald-400">LoginController</span> <span className="text-purple-400">extends</span> <span className="text-emerald-400">FluxController</span> &#123;<br />
                        &nbsp;&nbsp;<span className="text-blue-400">final</span> user = <span className="text-orange-400">flux</span>&lt;User?&gt;(<span className="text-blue-400">null</span>);<br /><br />
                        &nbsp;&nbsp;<span className="text-blue-400">@override</span><br />
                        &nbsp;&nbsp;<span className="text-blue-400">void</span> <span className="text-orange-400">onInit</span>() &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// Native Fluxy Networking</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">Fx</span>.http.<span className="text-orange-400">get</span>(<span className="text-emerald-400">&apos;/auth/me&apos;</span>).<span className="text-orange-400">then</span>((v) =&gt; user.value = v);<br />
                        &nbsp;&nbsp;&#125;<br />
                        &#125;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bento Feature Grid */}
        <section className="py-40 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
            <BentoCard
              className="md:col-span-8 md:row-span-2"
              icon={<Zap className="text-primary" size={40} />}
              title="Flux State System"
              description="Enterprise reactive engine with fluxSelector and fluxWorker. Background isolate execution for zero-jank UI."
              variant="featured"
            />
            <BentoCard
              className="md:col-span-4"
              icon={<Cpu className="text-blue-400" size={32} />}
              title="FluxyHttp"
              description="Zero-dependency HTTP engine built on native dart:io."
            />
            <BentoCard
              className="md:col-span-4"
              icon={<Terminal className="text-orange-400" size={32} />}
              title="Blueprints"
              description="CLI-driven architectural scaffolding for scalable apps."
            />
            <BentoCard
              className="md:col-span-4"
              icon={<Layers className="text-purple-400" size={32} />}
              title="Architecture"
              description="Formalized patterns with FluxController & Repository."
            />
            <BentoCard
              className="md:col-span-8"
              icon={<Code2 className="text-emerald-400" size={32} />}
              title="Atomic Styling DSL"
              description="Chainable modifiers that reduce nesting by over 80%. Build beautiful UIs with speed and precision."
              variant="wide"
            />
          </div>
        </section>

        {/* Comparison: The Future of Flutter */}
        <section className="py-48 bg-white/5 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
          <div className="container mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto mb-32">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">EFFORTLESS <br /><span className="text-gradient">COMPOSITION.</span></h2>
              <p className="text-xl text-slate-400 font-medium">Why struggle with the widget tree when you can flow through it?</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto items-center">
              <div className="space-y-10 group opacity-50 hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center gap-2 text-red-500 font-black tracking-widest text-[10px] uppercase bg-red-500/10 px-3 py-1 rounded-full">The Widget Mess</div>
                <div className="glass p-10 rounded-[2.5rem] border-white/5 grayscale">
                  <pre className="text-base font-mono leading-relaxed opacity-40">
                    <code>
                      Padding(<br />
                      &nbsp;&nbsp;padding: EdgeInsets.all(16),<br />
                      &nbsp;&nbsp;child: Center(<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;child: Container(<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;decoration: BoxDecoration(<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: Colors.blue,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;child: Text(&quot;Count: $c&quot;),<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;),<br />
                      &nbsp;&nbsp;),<br />
                      )
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 text-emerald-500 font-black tracking-widest text-[10px] uppercase bg-emerald-500/10 px-3 py-1 rounded-full">Reactive Flow</div>
                <div className="glass p-10 rounded-[2.5rem] border-primary/20 shadow-[0_0_80px_-20px_rgba(var(--primary),0.3)] animate-float">
                  <pre className="text-base md:text-xl font-mono leading-relaxed text-primary/90">
                    <code>
                      Fx.center()<br />
                      &nbsp;&nbsp;.child(<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Fx.text(&quot;Count: $&#123;c.value&#125;&quot;)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.p(16)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.bg.blue500<br />
                      &nbsp;&nbsp;)<br />
                      &nbsp;&nbsp;.render();
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-60 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-6"
          >
            <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-16 leading-[0.8] text-gradient">
              STOP PORTING. <br /> START DESIGNING.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <Link
                href="/docs" 
                className="px-16 py-8 bg-white text-black rounded-3xl text-3xl font-black hover:scale-110 hover:-rotate-1 transition-all shadow-[0_20px_80px_-15px_rgba(255,255,255,0.3)] active:scale-95"
              >
                Go Documentation
              </Link>
              <Link
                href="https://pub.dev/packages/fluxy" 
                className="px-16 py-8 border-4 border-white/10 text-white rounded-3xl text-3xl font-black hover:bg-white/5 transition-all active:scale-95"
              >
                Get the Package
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 relative z-10 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-20">
            <div className="max-w-sm space-y-8">
              <div className="flex items-center gap-3">
                <FluxyLogo className="w-12 h-12" />
                <span className="text-3xl font-black tracking-tighter">Fluxy</span>
              </div>
              <p className="text-slate-400 font-bold leading-relaxed">
                The high-performance application platform for Flutter. Built for scale, designed for speed. Optimized for the next decade of development.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
              <FooterColumn title="Docs" links={[
                { label: 'Quick Start', href: '/docs/quick-start' },
                { label: 'Blueprints', href: '/docs/cli' },
                { label: 'Flux System', href: '/docs/state-management' },
                { label: 'Showcase', href: '/docs/examples' }
              ]} />
              <FooterColumn title="Community" links={[
                { label: 'GitHub', href: 'https://github.com/swaingithub/fluxy' },
                { label: 'Pub.dev', href: 'https://pub.dev/packages/fluxy' },
                { label: 'Release Notes', href: '/docs/migration/' }
              ]} />
              <div className="flex flex-col gap-6 lg:col-span-1 col-span-2">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">Operational</span>
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-black text-xs w-fit">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  INFRASTRUCTURE ONLINE
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-black tracking-[0.3em] uppercase text-white/20">
            <span>© 2024 SWAINGITHUB. ALL RIGHTS RESERVED.</span>
            <span>DEVELOPED WITH PRECISION IN FLUTTER.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-left">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="text-[9px] font-black tracking-widest text-white/30 uppercase">{label}</div>
    </div>
  );
}

function BentoCard({ className, icon, title, description, variant }: {
  className?: string,
  icon: React.ReactNode,
  title: string,
  description: string,
  variant?: 'featured' | 'wide'
}) {
  return (
    <div className={`p-10 rounded-[3rem] glass hover:border-white/20 transition-all duration-500 group flex flex-col justify-end gap-6 overflow-hidden relative ${className}`}>
      {variant === 'featured' && (
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
      )}
      <div className={`w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/5 flex items-center justify-center mb-auto group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500`}>
        {icon}
      </div>
      <div className="space-y-4">
        <h3 className={`font-black tracking-tight ${variant === 'featured' ? 'text-4xl' : 'text-2xl'}`}>{title}</h3>
        <p className={`text-slate-400 font-bold leading-relaxed ${variant === 'featured' ? 'text-xl' : 'text-sm'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string, links: { label: string, href: string }[] }) {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">{title}</span>
      <div className="flex flex-col gap-4">
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}


