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
  Sparkles
} from 'lucide-react';
import { FluxyLogo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <FluxyLogo className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold tracking-tight">Fluxy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="/docs/core-concepts" className="hover:text-primary transition-colors">Core Concepts</Link>
            <Link href="/docs/examples" className="hover:text-primary transition-colors">Examples</Link>
            <Link href="https://github.com/swaingithub/fluxy" className="flex items-center gap-1 hover:text-primary transition-colors">
              GitHub <ExternalLink size={14} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/docs" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
              <Sparkles size={14} />
              <span>ALPHA RELEASE OUT NOW</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Reactive UI + State <br />
              <span className="text-primary">Fluent DSL for Flutter</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Fluxy simplifies UI building, reduces boilerplate, and provides atomic reactivity. Build high-performance Flutter apps with a modern developer experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/docs" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                Start Building <Zap size={20} />
              </Link>
              <Link 
                href="https://github.com/swaingithub/fluxy" 
                className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-xl text-lg font-bold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2 border border-border"
              >
                <Github size={20} /> View on GitHub
              </Link>
            </div>
          </motion.div>

          {/* Code Preview Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 max-w-4xl mx-auto rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-xs text-muted-foreground font-mono">counter_app.dart</div>
              <div className="w-12" />
            </div>
            <div className="p-6 text-left overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-muted-foreground">
                  <span className="text-blue-400">final</span> count = <span className="text-purple-400">Signal</span>(<span className="text-orange-400">0</span>);<br /><br />
                  <span className="text-blue-400">Widget</span> build(<span className="text-blue-400">BuildContext</span> context) &#123;<br />
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-purple-400">Fx</span>.column()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-emerald-400">children</span>([<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.text(<span className="text-orange-400">&quot;Count: $&#123;count.value&#125;&quot;</span>).<span className="text-emerald-400">size</span>(<span className="text-orange-400">24</span>).<span className="text-emerald-400">bold</span>().<span className="text-emerald-400">render</span>(),<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Fx</span>.button(<span className="text-orange-400">&quot;Increment&quot;</span>)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-emerald-400">onPressed</span>(() =&gt; count.value++)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-emerald-400">padding</span>(<span className="text-orange-400">16</span>)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-emerald-400">render</span>(),<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;])<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-emerald-400">center</span>()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-emerald-400">render</span>();<br />
                  &#125;
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why developers love Fluxy</h2>
            <p className="text-muted-foreground">Everything you need to build scalable, reactive Flutter apps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-primary" />}
              title="Atomic Reactivity"
              description="Only specific elements rebuild when state changes, ensuring lightning-fast performance."
            />
            <FeatureCard 
              icon={<Code2 className="text-primary" />}
              title="Fluent DSL"
              description="Build UIs using a chainable, intuitive API that reduces widget nesting significantly."
            />
            <FeatureCard 
              icon={<Layers className="text-primary" />}
              title="Integrated State"
              description="Simple signals-based state management that works seamlessly with your UI components."
            />
            <FeatureCard 
              icon={<Cpu className="text-primary" />}
              title="Native Performance"
              description="Built on top of Flutter's core rendering engine with zero overhead and maximum efficiency."
            />
            <FeatureCard 
              icon={<Smartphone className="text-primary" />}
              title="Responsive Built-in"
              description="Tailwind-like utility engine for creating responsive layouts with ease."
            />
            <FeatureCard 
              icon={<ExternalLink className="text-primary" />}
              title="Pub.dev Ready"
              description="Fully documented and easy to integrate into any existing Flutter project."
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Fluxy vs. Standard Flutter</h2>
            <p className="text-xl text-muted-foreground">Stop fighting the widget tree. Start building with flow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-sm font-bold">X</div>
                Traditional Way
              </h3>
              <div className="p-6 rounded-2xl bg-muted/50 border space-y-4">
                <pre className="text-sm font-mono opacity-60">
                  <code>
                    Column(<br />
                    &nbsp;&nbsp;mainAxisAlignment: ...<br />
                    &nbsp;&nbsp;children: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Padding(<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: EdgeInsets.all(16),<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;child: Text(&quot;Deep Nesting&quot;),<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;),<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// Rebuilds entire tree<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;setState(() &#123; ... &#125;)<br />
                    &nbsp;&nbsp;],<br />
                    )
                  </code>
                </pre>
                <p className="text-sm text-muted-foreground italic">Deep nesting, verbose syntax, and inefficient rebuilds.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-bold">✓</div>
                The Fluxy Way
              </h3>
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">Recommended</div>
                <pre className="text-sm font-mono text-primary/80">
                  <code>
                    Fx.column()<br />
                    &nbsp;&nbsp;.center()<br />
                    &nbsp;&nbsp;.children([<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Fx.text(&quot;Fluent Flow&quot;).p(16).render(),<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// Atomic rebuild<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;count.value++<br />
                    &nbsp;&nbsp;])<br />
                    &nbsp;&nbsp;.render();
                  </code>
                </pre>
                <p className="text-sm text-primary/70 italic">Clean, chainable, and optimized for performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to revolutionize your Flutter dev?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/docs" 
              className="px-10 py-5 bg-background text-foreground rounded-2xl text-xl font-bold hover:scale-105 transition-transform"
            >
              Get Started for Free
            </Link>
            <Link 
              href="https://pub.dev/packages/fluxy" 
              className="px-10 py-5 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-2xl text-xl font-bold hover:bg-primary-foreground/20 transition-colors"
            >
              Package on Pub.dev
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FluxyLogo className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-70" />
            <span className="font-bold">Fluxy</span>
            <span className="text-sm">© 2024. Built for Flutter developers.</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="https://github.com/swaingithub/fluxy" className="hover:text-primary">GitHub</Link>
            <Link href="https://pub.dev/packages/fluxy" className="hover:text-primary">Pub.dev</Link>
            <Link href="/docs/roadmap" className="hover:text-primary">Roadmap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-shadow flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
