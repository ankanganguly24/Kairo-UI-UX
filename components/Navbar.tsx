import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-kairo-bg/80 backdrop-blur-md border-kairo-surface' : 'bg-transparent border-transparent'}`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-kairo-red/20 border border-kairo-red/40 flex items-center justify-center rounded-sm">
              <Terminal size={16} className="text-kairo-red" />
            </div>
            <span className="text-lg font-mono font-bold tracking-tight text-white">KAIRO</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-kairo-muted hover:text-white transition-colors">How it works</a>
            <a href="#features" className="text-sm text-kairo-muted hover:text-white transition-colors">Features</a>
            <a href="#tools" className="text-sm text-kairo-muted hover:text-white transition-colors">Tools</a>
            <a href="#pricing" className="text-sm text-kairo-muted hover:text-white transition-colors">Waitlist</a>
          </nav>

          <div className="flex items-center gap-4">
             <Button size="sm" onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}>
              Get Access
             </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};