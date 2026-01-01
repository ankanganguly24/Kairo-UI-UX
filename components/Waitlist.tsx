import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <Section id="waitlist" className="bg-[#0F0F12] border-t border-white/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build better READMEs.<br/>Get noticed for the right reasons.</h2>
          <p className="text-kairo-muted mb-8 leading-relaxed max-w-xl mx-auto">
            We’re building KAIRO carefully: <br/>
            <span className="text-white">Performance-first • Accuracy-first • Developer-first</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-sm text-kairo-muted/80 max-w-2xl mx-auto">
             <div className="p-3 bg-white/5 rounded border border-white/5">Get early access</div>
             <div className="p-3 bg-white/5 rounded border border-white/5">Shape the roadmap</div>
             <div className="p-3 bg-white/5 rounded border border-white/5">Lock in free features</div>
          </div>

          {status === 'success' ? (
             <div className="bg-green-900/20 border border-green-500/30 p-4 rounded text-green-400 font-mono text-sm max-w-md mx-auto">
                You're in. We'll be in touch soon.
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="developer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-kairo-red transition-colors font-mono text-sm placeholder:text-white/20"
                required
              />
              <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          )}
          
          <p className="mt-6 text-xs text-kairo-muted/40 font-mono">
            No spam. Ever.
          </p>
        </div>
      </Container>
    </Section>
  );
};