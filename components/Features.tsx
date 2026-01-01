import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { FolderSearch, Package, Terminal, Shield, Eye, RefreshCw } from 'lucide-react';

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group p-6 bg-kairo-surface border border-white/5 hover:border-kairo-red/30 transition-all duration-300 rounded-sm">
    <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm mb-4 border border-white/5 group-hover:border-kairo-red/20">
      <Icon className="text-kairo-muted group-hover:text-kairo-red transition-colors" size={24} />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-kairo-muted leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: FolderSearch,
      title: "Folder structure analysis",
      description: "Reads your directory tree to understand component hierarchy and module organization."
    },
    {
      icon: Package,
      title: "Stack detection",
      description: "Parses package.json to identify frameworks, libraries, and tools automatically."
    },
    {
      icon: Terminal,
      title: "Command generation",
      description: "Extracts run, build, and test scripts directly from your configuration files."
    },
    {
      icon: Shield,
      title: "Env variable safety",
      description: "Detects .env.example usage to document required keys without leaking secrets."
    },
    {
      icon: Eye,
      title: "Live Markdown preview",
      description: "See your README update in real-time as you code or refactor structure."
    },
    {
      icon: RefreshCw,
      title: "Intelligent merge",
      description: "Regenerate sections without overwriting your manual custom edits."
    }
  ];

  return (
    <Section id="features" className="bg-kairo-bg">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Features</h2>
          <div className="h-1 w-20 bg-kairo-red"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        <div className="flex justify-center">
           <div className="inline-flex items-center gap-8 text-sm font-mono text-kairo-muted/50 border border-white/5 px-6 py-3 rounded-full bg-black/20">
              <span>Works locally</span>
              <span className="w-1 h-1 bg-kairo-red rounded-full"></span>
              <span>Fast</span>
              <span className="w-1 h-1 bg-kairo-red rounded-full"></span>
              <span>Explainable</span>
           </div>
        </div>
      </Container>
    </Section>
  );
};