'use client';

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
  Sparkles
} from 'lucide-react';
import { FluxyLogo } from '@/components/logo';

export default function LandingPage() {
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
              v0.2.4
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
              <span className="text-white/80">Fluxy v0.2.4 is now stable</span>
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

        {/* Code Comparison */}
        <section className="container mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Stop writing <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400">Spaghetti Code.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Fluxy eliminates deeply nested widget trees. Chain your styles, bind your state, and let the engine handle the rest.
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
                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="ml-4 text-xs font-mono text-white/30">user_card.dart</div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 overflow-x-auto">
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
                </div>
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
      <footer className="relative z-10 border-t border-white/10 bg-black pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-2">
                <FluxyLogo className="w-8 h-8" />
                <span className="text-2xl font-bold">Fluxy</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                The modern application framework for Flutter. 
                Built by developers, for developers who value speed and aesthetics.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                <div className="space-y-4">
                    <h4 className="font-bold text-white">Resources</h4>
                    <FooterLink href="/docs">Documentation</FooterLink>
                    <FooterLink href="/docs/production">Guides</FooterLink>
                    <FooterLink href="/docs/fundamentals/fluxy-core">API Reference</FooterLink>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-white">Ecosystem</h4>
                    <FooterLink href="/docs/fundamentals/cli">Fluxy CLI</FooterLink>
                    <FooterLink href="/docs/ecosystem/networking">Networking</FooterLink>
                    <FooterLink href="/docs/fundamentals/state-management">Reactivity</FooterLink>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-white">Community</h4>
                    <FooterLink href="https://github.com/swaingithub/fluxy">GitHub</FooterLink>
                    <FooterLink href="https://pub.dev/packages/fluxy">Pub.dev</FooterLink>
                    <FooterLink href="https://twitter.com/swaingithub">Twitter</FooterLink>
                </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium">
             <span>© 2024 Swaingithub. MIT License.</span>
             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All Systems Operational</span>
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
    <Component href={href} {...props} className="block text-sm text-white/50 hover:text-indigo-400 transition-colors cursor-pointer">
      {children}
    </Component>
  );
}
