import React from 'react';
import { Container } from './ui/Container';

export const SocialProof: React.FC = () => {
  const techs = ["VS Code", "GitHub", "Next.js", "Node.js"];
  
  return (
    <div className="py-10 border-y border-white/5 bg-kairo-surface/50">
      <Container>
         <div className="text-center mb-6">
            <span className="text-xs font-mono text-kairo-muted/60 uppercase tracking-widest">Used by developers who care about</span>
            <div className="flex justify-center gap-4 mt-2 text-xs font-mono text-kairo-muted">
                <span>Clean repos</span>
                <span className="text-kairo-red">•</span>
                <span>Clear docs</span>
                <span className="text-kairo-red">•</span>
                <span>Shipped work</span>
            </div>
         </div>
         <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {techs.map((tech) => (
              <span key={tech} className="text-sm font-mono font-bold text-kairo-muted hover:text-white transition-colors cursor-default">
                {tech.toUpperCase()}
              </span>
            ))}
         </div>
      </Container>
    </div>
  );
};