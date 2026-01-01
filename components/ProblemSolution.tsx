import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <Section className="bg-kairo-surface/30 border-y border-white/5">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Problem */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Let's be honest.<br/>Most READMEs...
            </h2>
            
            <ul className="space-y-4 mb-8">
              {[
                "Are written at 2am",
                "Copied from another repo",
                "Outdated after the first commit",
                "Or straight-up missing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-kairo-muted/80">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center border border-red-900/30">
                    <X size={12} className="text-red-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-kairo-muted mb-4 font-bold">
              And the worst part? <br/>
              Your project might be good — but nobody understands it.
            </p>
            <p className="text-sm text-kairo-muted/60">
              That hurts open source adoption, recruiters, indie launches, and even your future self.
            </p>
          </div>

          {/* Solution */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-kairo-red/5 to-transparent rounded-lg blur-lg"></div>
             <div className="relative bg-kairo-bg border border-kairo-red/20 p-8 rounded-sm shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-2 h-2 rounded-full bg-kairo-red"></div>
                   <h3 className="text-lg font-mono font-bold text-white">Documentation, grounded in reality.</h3>
                </div>
                
                <p className="text-kairo-text mb-8 text-lg">
                  KAIRO doesn't "imagine" your project. <br/>
                  <span className="font-bold text-white">It reads it.</span>
                </p>

                <p className="text-sm text-kairo-muted mb-8">
                   By analyzing your folder structure, package.json, and scripts, KAIRO generates a README that actually reflects how your project works.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
                     <Check size={16} className="text-kairo-red" />
                     <span className="text-sm text-white">No hallucinations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
                     <Check size={16} className="text-kairo-red" />
                     <span className="text-sm text-white">No fluff</span>
                  </div>
                   <div className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
                     <Check size={16} className="text-kairo-red" />
                     <span className="text-sm text-white">Just facts — written clearly</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};