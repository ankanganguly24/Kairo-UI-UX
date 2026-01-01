import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Github, FileText, Activity, Briefcase } from 'lucide-react';

interface ToolCardProps {
  icon: any;
  title: string;
  price: string;
  type: 'free' | 'paid';
  description: string;
  features: string[];
  cta: string;
  primary?: boolean;
  onClick?: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, price, type, description, features, cta, primary, onClick }) => (
  <div className={`flex flex-col p-6 rounded-sm border transition-all duration-300 ${primary ? 'bg-kairo-surface/80 border-kairo-red/30 shadow-[0_0_30px_-10px_rgba(123,15,22,0.15)]' : 'bg-transparent border-white/5 hover:border-white/10'}`}>
    <div className="mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-sm ${primary ? 'bg-kairo-red text-white' : 'bg-white/5 text-kairo-muted'}`}>
          <Icon size={20} />
        </div>
        <div className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded border ${type === 'free' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'border-purple-500/30 text-purple-400 bg-purple-500/10'}`}>
           {type === 'free' ? 'Free' : 'Paid'}
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-xs text-kairo-muted/60 font-mono mb-4">{price}</p>
      <p className="text-sm text-kairo-muted leading-relaxed">{description}</p>
    </div>

    <ul className="space-y-2 mb-8 flex-1">
      {features.map((feature, i) => (
        <li key={i} className="text-xs text-kairo-muted/80 flex items-start gap-2">
           <span className={`mt-1 w-1 h-1 rounded-full ${primary ? 'bg-kairo-red' : 'bg-white/20'}`}></span>
           {feature}
        </li>
      ))}
    </ul>

    <Button variant={primary ? 'primary' : 'secondary'} size="sm" className="w-full" onClick={onClick}>
      {cta}
    </Button>
  </div>
);

interface ToolsProps {
  onOpenGenerator?: () => void;
}

export const Tools: React.FC<ToolsProps> = ({ onOpenGenerator }) => {
  const scrollToWaitlist = () => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'});

  const tools = [
    {
      icon: Github,
      title: "GitHub Profile README",
      price: "No sign-in required",
      type: "free" as const,
      description: "Your GitHub profile is your public face. We help you make it clean, readable, and professional.",
      features: ["Tech stack highlights", "Featured projects", "Clean layout (no cringe)"],
      cta: "Launch Generator",
      primary: true,
      onClick: onOpenGenerator
    },
    {
      icon: FileText,
      title: "Project README Gen",
      price: "Sign-in required",
      type: "free" as const,
      description: "Generate a full project README straight from your codebase. Save versions and improve accuracy.",
      features: ["Save your READMEs", "Improve accuracy", "Prevent misuse"],
      cta: "Sign in with GitHub",
      primary: false,
      onClick: scrollToWaitlist
    },
    {
      icon: Activity,
      title: "KAIRO Signal",
      price: "Sign-in required",
      type: "free" as const,
      description: "Analyzes your public repos and READMEs to create a shareable developer signal.",
      features: ["README clarity score", "Project consistency", "Think: Strava for devs"],
      cta: "Generate Signal",
      primary: false,
      onClick: scrollToWaitlist
    },
    {
      icon: Briefcase,
      title: "KAIRO Job Match",
      price: "Paid • Waitlist",
      type: "paid" as const,
      description: "Not a job board. A shortcut. Matches you with teams based on what you've actually shipped.",
      features: ["Match with Web3/OSS teams", "Based on shipped work", "No resume spam"],
      cta: "Join Job Waitlist",
      primary: false,
      onClick: scrollToWaitlist
    }
  ];

  return (
    <Section id="tools" className="bg-[#0F0F12]">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools by KAIRO</h2>
          <p className="text-kairo-muted">More than just READMEs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {tools.map((t, i) => (
             <ToolCard key={i} {...t} />
           ))}
        </div>
      </Container>
    </Section>
  );
};