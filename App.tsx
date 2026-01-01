import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Tools } from './components/Tools';
import { AISection } from './components/AISection';
import { Pricing } from './components/Pricing';
import { PrivacyTrust } from './components/PrivacyTrust';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { ShoutoutWall } from './components/ShoutoutWall';
import { ProfileGenerator } from './components/ProfileGenerator';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'generator'>('landing');

  if (view === 'generator') {
    return <ProfileGenerator onBack={() => setView('landing')} />;
  }

  return (
    <div className="bg-kairo-bg min-h-screen text-kairo-text font-sans antialiased selection:bg-kairo-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Tools onOpenGenerator={() => setView('generator')} />
        <AISection />
        <ShoutoutWall />
        <Pricing />
        <PrivacyTrust />
        <Waitlist />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;