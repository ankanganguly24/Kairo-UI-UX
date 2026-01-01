import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Sparkles, Sliders, Edit3, Files } from 'lucide-react';

export const AISection: React.FC = () => {
  return (
    <Section className="bg-kairo-bg border-t border-white/5">
      <Container>
        <div className="bg-gradient-to-r from-kairo-surface to-[#0F0F12] border border-white/5 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-kairo-red/5 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-kairo-accent" />
                <span className="text-xs font-mono text-kairo-accent uppercase tracking-wider">Optional Module</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">AI — when you want it.</h2>
              <p className="text-kairo-muted mb-6">
                KAIRO works perfectly without AI. But when enabled, it helps polish your documentation without taking control away from you.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: Edit3, text: "Rewrite sections more clearly" },
                  { icon: Sliders, text: "Adjust tone (beginner vs recruiter)" },
                  { icon: Files, text: "Create multiple README versions" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-kairo-muted">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-kairo-muted">
                      <item.icon size={14} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/50 border border-white/5 rounded p-6 font-mono text-sm">
               <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                 <span className="text-xs text-kairo-muted uppercase">Tone Adjustment</span>
                 <div className="flex gap-2">
                   <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                   <span className="w-2 h-2 rounded-full bg-white/20"></span>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="opacity-50">
                   <div className="text-xs text-kairo-red mb-1">Raw Input</div>
                   <p className="text-kairo-muted">"App runs on port 3000. Use npm start."</p>
                 </div>
                 
                 <div>
                   <div className="text-xs text-green-400 mb-1">Polished Output</div>
                   <p className="text-white">
                     "The application listens on <code className="bg-white/10 px-1 rounded">port 3000</code>. To launch the development server, execute:"
                   </p>
                   <div className="mt-2 bg-black p-2 rounded border border-white/10 text-xs text-kairo-muted">
                     $ npm start
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};