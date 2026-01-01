import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  cta: string;
  variant: 'default' | 'highlight' | 'disabled';
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, cta, variant }) => {
  const isHighlight = variant === 'highlight';
  const isDisabled = variant === 'disabled';
  
  return (
    <div className={`p-8 border rounded-sm flex flex-col h-full ${isHighlight ? 'bg-kairo-surface border-kairo-red/40 relative' : 'bg-transparent border-white/5'} ${isDisabled ? 'opacity-60 grayscale' : ''}`}>
      {isHighlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-kairo-red text-white text-[10px] font-mono uppercase px-3 py-1 rounded-full tracking-wider">
          Best Value
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-2xl font-mono text-white">{price}</span>
        {price !== 'Free' && price !== 'Coming Soon' && <span className="text-sm text-kairo-muted"> / month</span>}
      </div>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-kairo-muted">
            <Check size={16} className={`mt-0.5 ${isHighlight ? 'text-kairo-red' : 'text-white/20'}`} />
            {f}
          </li>
        ))}
      </ul>
      
      <Button variant={isHighlight ? 'primary' : 'secondary'} className="w-full" disabled={isDisabled}>
        {cta}
      </Button>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-kairo-bg">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-kairo-muted">Free where it matters. Paid where it saves time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard
            title="Free"
            price="Free"
            variant="default"
            cta="Get Started"
            features={[
              "GitHub Profile README generator",
              "Project README generator",
              "KAIRO Signal",
              "Unlimited local README generation",
              "VS Code core features"
            ]}
          />
          <PricingCard
            title="Pro"
            price="₹499"
            variant="highlight"
            cta="Join Waitlist"
            features={[
              "AI-assisted README refinement",
              "README version history",
              "Multiple README variants",
              "Advanced merge logic",
              "Priority feature access"
            ]}
          />
           <PricingCard
            title="Teams"
            price="Coming Soon"
            variant="disabled"
            cta="Join Waitlist"
            features={[
              "Shared templates",
              "Documentation standards",
              "Repo-level analytics",
              "CI README checks"
            ]}
          />
        </div>
      </Container>
    </Section>
  );
};