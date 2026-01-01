import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';

const Step = ({ number, title, description, items }: { number: string, title: string, description: string, items?: string[] }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Line connector for mobile */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden ml-3.5"></div>
    
    <div className="mb-4">
      <span className="inline-block px-3 py-1 bg-kairo-surface border border-kairo-red/30 text-kairo-red font-mono text-sm font-bold rounded-sm mb-3">
        {number}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-kairo-muted mb-4 h-12">{description}</p>
    </div>
    {items && (
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-kairo-muted flex items-start gap-2">
             <span className="text-white/20 mt-1.5 w-1 h-1 bg-white rounded-full"></span>
             {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-kairo-bg relative">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How KAIRO works</h2>
          <p className="text-kairo-muted">Zero configuration required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <Step 
            number="01" 
            title="Scan the project" 
            description="KAIRO inspects your repo structure and dependencies."
            items={[
              "Dependency analysis",
              "Folder depth checks",
              "Config file parsing"
            ]}
          />
          
          <Step 
            number="02" 
            title="Understand the stack" 
            description="Frameworks, tools, scripts, and environment variables — automatically detected."
            items={[
              "Stack detection",
              "Script mapping",
              "Asset identification"
            ]}
          />
          
          <Step 
            number="03" 
            title="Generate the README" 
            description="A clean, structured README with setup steps, tech stack, features, and project structure."
            items={[
              "Setup instructions",
              "Tech stack listing",
              "Project structure tree"
            ]}
          />
        </div>
      </Container>
    </Section>
  );
};