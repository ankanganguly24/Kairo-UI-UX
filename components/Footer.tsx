import React from 'react';
import { Container } from './ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-kairo-red/20 border border-kairo-red/40 flex items-center justify-center rounded-sm">
               <span className="w-2 h-2 bg-kairo-red rounded-full"></span>
            </div>
            <span className="text-sm font-mono font-bold text-white tracking-widest">KAIRO</span>
          </div>
          
          <div className="flex gap-8 text-sm text-kairo-muted">
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
             <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          
          <div className="text-xs text-kairo-muted/50 font-mono">
             © 2026 KAIRO. Built for developers who ship.
          </div>
        </div>
      </Container>
    </footer>
  );
};