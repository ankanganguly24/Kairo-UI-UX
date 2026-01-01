import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ArrowRight, Code2, FileJson, FolderTree } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kairo-red/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kairo-surface border border-white/5 text-xs font-mono text-kairo-muted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-kairo-red animate-pulse"></span>
            v0.1.0 — Public Beta soon
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight"
          >
            Your code already knows the README. <br/>
            <span className="text-kairo-red selection:text-white">KAIRO just writes it.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-kairo-muted max-w-2xl mb-10 leading-relaxed"
          >
            Turn your folder structure and package.json into a clean, accurate README — directly from VS Code.
            <br className="hidden md:block"/> No templates. No guessing. No cringe documentation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto group" onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}>
              Join the waitlist 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              View on Marketplace
            </Button>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="mt-6 text-xs text-kairo-muted/60 font-mono"
          >
            VS Code extension • Free to start
          </motion.p>
        </div>

        {/* Abstract Code Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-kairo-red/20 to-transparent rounded-lg blur opacity-20"></div>
          <div className="relative bg-[#0F0F12] border border-white/5 rounded-lg shadow-2xl overflow-hidden">
            {/* Fake Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#121216]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-kairo-muted/50">kairo-preview.md</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 h-[300px] md:h-[400px]">
              {/* Sidebar Visualization */}
              <div className="hidden md:block col-span-4 border-r border-white/5 p-6 space-y-4">
                 <div className="text-xs font-mono text-kairo-red mb-4">SCANNING PROJECT...</div>
                 <div className="flex items-center gap-3 text-sm text-kairo-text opacity-50">
                   <FolderTree size={16} /> src/
                 </div>
                 <div className="flex items-center gap-3 text-sm text-kairo-text opacity-75 pl-4 border-l border-kairo-red/20">
                   <Code2 size={16} /> components/
                 </div>
                 <div className="flex items-center gap-3 text-sm text-kairo-text opacity-50 pl-4 border-l border-white/5">
                   <Code2 size={16} /> utils/
                 </div>
                 <div className="flex items-center gap-3 text-sm text-kairo-text opacity-90">
                   <FileJson size={16} /> package.json
                 </div>
              </div>
              
              {/* Output Visualization */}
              <div className="col-span-12 md:col-span-8 p-6 md:p-8 font-mono text-sm overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-4">
                    <div className="bg-kairo-red/10 text-kairo-red text-xs px-2 py-1 rounded">Generating...</div>
                 </div>
                 <div className="space-y-2 opacity-50">
                   <div className="h-2 w-16 bg-white/10 rounded"></div>
                 </div>
                 <div className="mt-6 space-y-4">
                    <h3 className="text-xl font-bold text-white"># Project KAIRO</h3>
                    <p className="text-kairo-muted">An automated documentation tool for modern developer workflows.</p>
                    
                    <div className="mt-8 space-y-2">
                      <h4 className="font-bold text-white">## Installation</h4>
                      <div className="bg-black/50 p-3 rounded border border-white/5 text-kairo-muted">
                        $ npm install kairo-cli
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <h4 className="font-bold text-white">## Architecture</h4>
                      <div className="flex gap-2">
                         <span className="px-2 py-1 bg-blue-900/20 text-blue-400 text-xs rounded border border-blue-900/30">React</span>
                         <span className="px-2 py-1 bg-yellow-900/20 text-yellow-400 text-xs rounded border border-yellow-900/30">TypeScript</span>
                         <span className="px-2 py-1 bg-green-900/20 text-green-400 text-xs rounded border border-green-900/30">Node.js</span>
                      </div>
                    </div>
                 </div>
                 
                 {/* Fade out bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F12] to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};