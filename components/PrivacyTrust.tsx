import React from 'react';
import { Container } from './ui/Container';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export const PrivacyTrust: React.FC = () => {
  return (
    <div className="py-24 bg-[#0B0B0D] border-t border-white/5">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Privacy & Trust</h2>
            <p className="text-kairo-muted mb-8 text-lg">
              Documentation should earn trust — not break it.
            </p>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center shrink-0">
                     <Lock size={20} className="text-kairo-muted" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Local by default</h4>
                    <p className="text-sm text-kairo-muted/70">Your code stays on your machine. We don't upload your source code to any servers.</p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center shrink-0">
                     <EyeOff size={20} className="text-kairo-muted" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">No dark patterns</h4>
                    <p className="text-sm text-kairo-muted/70">We don't track your personal projects. AI features are strictly opt-in.</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="border border-white/5 bg-kairo-surface/30 p-8 rounded-sm">
             <div className="font-mono text-xs text-kairo-muted mb-4 uppercase tracking-widest">Trust Model</div>
             <div className="space-y-3">
               <div className="flex justify-between items-center p-3 bg-black/40 border border-green-500/20 rounded">
                 <span className="text-sm text-white">Local Parsing</span>
                 <ShieldCheck size={16} className="text-green-500" />
               </div>
                <div className="flex justify-between items-center p-3 bg-black/40 border border-white/10 rounded opacity-60">
                 <span className="text-sm text-white">Cloud Storage</span>
                 <span className="text-xs px-2 py-0.5 bg-white/10 rounded">User Opt-in</span>
               </div>
                <div className="flex justify-between items-center p-3 bg-black/40 border border-white/10 rounded opacity-60">
                 <span className="text-sm text-white">AI Processing</span>
                 <span className="text-xs px-2 py-0.5 bg-white/10 rounded">Explicit Request</span>
               </div>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
};