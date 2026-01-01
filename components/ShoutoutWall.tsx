import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Github, ExternalLink } from 'lucide-react';

interface ShoutoutCardProps {
  user: string;
  handle: string;
  quote: string;
  vibe: string;
}

const ShoutoutCard: React.FC<ShoutoutCardProps> = ({ user, handle, quote, vibe }) => (
  <div className="group relative bg-[#121216] border border-white/5 p-6 rounded-sm hover:border-kairo-red/30 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kairo-surface to-black border border-white/10 flex items-center justify-center font-mono font-bold text-kairo-muted">
           {user.charAt(0)}
        </div>
        <div>
          <h4 className="text-white text-sm font-bold">{user}</h4>
          <span className="text-xs text-kairo-muted/50 font-mono">@{handle}</span>
        </div>
      </div>
      <a href={`https://github.com/${handle}`} target="_blank" rel="noreferrer" className="text-kairo-muted/20 group-hover:text-white transition-colors">
        <Github size={16} />
      </a>
    </div>
    
    <p className="text-kairo-muted text-sm italic mb-4">"{quote}"</p>
    
    <div className="flex items-center justify-between mt-auto">
      <span className="text-[10px] uppercase tracking-wider font-mono text-kairo-red bg-kairo-red/5 px-2 py-1 rounded border border-kairo-red/10">
        {vibe}
      </span>
      <span className="text-xs text-kairo-muted/40 group-hover:text-white transition-colors flex items-center gap-1">
        View Profile <ExternalLink size={10} />
      </span>
    </div>
  </div>
);

export const ShoutoutWall: React.FC = () => {
  const shoutouts = [
    {
      user: "Alex C.",
      handle: "alexc_dev",
      quote: "Finally a profile generator that doesn't look like a 2015 Myspace page.",
      vibe: "The Shipper"
    },
    {
      user: "Sarah Jenkins",
      handle: "sarahj_rs",
      quote: "Full-stack indie hacker turning caffeine into SaaS. KAIRO nailed my stack.",
      vibe: "The Hustler"
    },
    {
      user: "Davide M.",
      handle: "d_vid3",
      quote: "ML engineer obsessed with edge inference. The mastery tree is sick.",
      vibe: "The Specialist"
    },
    {
      user: "Jordan Lee",
      handle: "jlee_web3",
      quote: "Cleanest README tool I've used. No fluff, just accurate signals.",
      vibe: "The Shipper"
    }
  ];

  return (
    <Section className="bg-[#0B0B0D] border-t border-white/5">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-kairo-muted uppercase tracking-wider mb-4">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
             Live from the community
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built with KAIRO 🔥</h2>
          <p className="text-kairo-muted max-w-2xl mx-auto">
            Real developers. Real code. No auto-generated spam — we curate the elite profiles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {shoutouts.map((s, i) => (
             <ShoutoutCard key={i} {...s} />
           ))}
        </div>
      </Container>
    </Section>
  );
};