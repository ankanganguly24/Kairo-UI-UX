import React, { useState } from 'react';
import { Button } from './ui/Button';
import { 
  Terminal, Copy, Check, ChevronRight, Github, Twitter, 
  Globe, Linkedin, ArrowLeft, Sun, Moon, Briefcase, Zap, 
  GitPullRequest, Star, Cpu, Layout, AlignLeft, AlignCenter, FileText
} from 'lucide-react';

interface ProfileGeneratorProps {
  onBack: () => void;
}

// Mock Sponsor Data
const SPONSOR = {
  name: 'Railway',
  handle: 'railway',
  desc: 'Instant Deployments',
  url: 'https://railway.app',
  image: 'https://railway.app/brand/logo-light.png'
};

const POPULAR_TECH = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
  "Rust", "Go", "Docker", "AWS", "PostgreSQL", "MongoDB", "Tailwind", 
  "GraphQL", "Svelte", "Vue", "Flutter", "Kubernetes"
];

const OPPORTUNITIES = [
  "Full-time roles", "Freelance", "Open Source", "Co-founding"
];

const PHILOSOPHIES = [
  "Ship small, iterate fast.",
  "Clarity over cleverness.",
  "Make it work, make it right, make it fast.",
  "Always bet on JavaScript.",
  "User experience first."
];

type LayoutType = 'classic' | 'modern' | 'zen';

export const ProfileGenerator: React.FC<ProfileGeneratorProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>('identity');
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark'>('dark');
  const [layout, setLayout] = useState<LayoutType>('classic');
  
  const [data, setData] = useState({
    username: '',
    intro: {
      text: "I'm a full-stack developer passionate about building scalable web applications.",
      role: 'Frontend Engineer',
      location: 'San Francisco, CA'
    },
    stack: {
      selected: [] as string[],
      explanation: '' 
    },
    stats: {
      github: true,
      topLangs: true,
      visitors: true
    },
    social: {
      twitter: '',
      linkedin: '',
      website: '',
    },
    signal: {
      quote: false,
      spotlight: { enabled: false, repo: '', desc: '' },
      focus: { enabled: false, text: '' },
      opportunity: [] as string[],
      learning: '',
      philosophy: '',
      oss: 'explorer' as 'explorer' | 'contributor' | 'maintainer',
      fun: { enabled: false, type: 'Fun Fact', value: '' }
    },
    footer: {
      attribution: true,
      sponsor: false
    }
  });

  const toggleSection = (id: string) => setActiveSection(activeSection === id ? null : id);

  const toggleTech = (tech: string) => {
    setData(prev => ({
      ...prev,
      stack: {
        ...prev.stack,
        selected: prev.stack.selected.includes(tech) 
          ? prev.stack.selected.filter(t => t !== tech)
          : [...prev.stack.selected, tech]
      }
    }));
  };

  const toggleOpportunity = (opp: string) => {
    setData(prev => ({
      ...prev,
      signal: {
        ...prev.signal,
        opportunity: prev.signal.opportunity.includes(opp)
          ? prev.signal.opportunity.filter(o => o !== opp)
          : [...prev.signal.opportunity, opp]
      }
    }));
  };

  const generateMarkdown = () => {
    let md = ``;
    const isModern = layout === 'modern';
    const isZen = layout === 'zen';
    
    // Wrapper for Modern Layout
    if (isModern) md += `<div align="center">\n\n`;

    // Header
    md += `# Hi, I'm ${data.username || 'Ankan'} 👋\n\n`;

    // Quote
    if (data.signal.quote) {
      if (isModern) md += `> "Simplicity is the soul of efficiency."\n\n`;
      else md += `> "Simplicity is the soul of efficiency."\n\n`;
    }
    
    // Intro
    if (data.intro.role) md += `🚀 **${data.intro.role}**`;
    if (data.intro.location) md += ` based in **${data.intro.location}**`;
    md += `\n\n`;
    if (data.intro.text) md += `${data.intro.text}\n\n`;

    // Modern Layout: Socials at top
    if (isModern) {
        const socials = [];
        if (data.social.twitter) socials.push(`[![Twitter](https://img.shields.io/badge/Twitter-${data.social.twitter}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${data.social.twitter})`);
        if (data.social.linkedin) socials.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-${data.social.linkedin}-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${data.social.linkedin})`);
        if (data.social.website) socials.push(`[![Website](https://img.shields.io/badge/Website-Portfolio-success?style=for-the-badge&logo=google-chrome&logoColor=white)](${data.social.website})`);
        if (socials.length > 0) md += socials.join(' ') + `\n\n`;
    }

    if (isModern) md += `</div>\n\n`; // End Center Wrapper for Top Section

    // --- Content Body ---

    // Build Philosophy & Learning (Signal)
    if (data.signal.philosophy || data.signal.learning) {
       if (data.signal.philosophy) md += `🔭 **Philosophy**: ${data.signal.philosophy}\n\n`;
       if (data.signal.learning) md += `🌱 **Learning**: ${data.signal.learning}\n\n`;
    }

    // Tech Stack
    if (data.stack.selected.length > 0) {
      if (isModern) md += `<div align="center">\n`;
      md += `## 🛠 Tech Stack\n\n`;
      
      if (data.stack.explanation) {
        md += `${data.stack.explanation}\n\n`;
      }

      // Zen uses text list for tech stack if desired, but badges are standard. 
      // Let's keep badges for all but style them differently if needed.
      const badgeStyle = isZen ? 'flat' : 'flat-square';

      md += data.stack.selected.map(s => 
        `![${s}](https://img.shields.io/badge/-${encodeURIComponent(s)}-black?style=${badgeStyle}&logo=${encodeURIComponent(s.toLowerCase())}&logoColor=white)`
      ).join(' ') + `\n\n`;
      if (isModern) md += `</div>\n\n`;
    }

    // Spotlight
    if (data.signal.spotlight.enabled && data.signal.spotlight.repo) {
      md += `## 🏆 Project Spotlight\n\n`;
      md += `### [${data.signal.spotlight.repo}](https://github.com/${data.username}/${data.signal.spotlight.repo})\n`;
      md += `${data.signal.spotlight.desc}\n\n`;
    }

    // Opportunities & Focus
    if (data.signal.opportunity.length > 0 || data.signal.focus.enabled) {
      md += `## ⚡ Status\n\n`;
      if (data.signal.focus.enabled) md += `- **Current Focus**: ${data.signal.focus.text}\n`;
      if (data.signal.opportunity.length > 0) md += `- **Open to**: ${data.signal.opportunity.join(', ')}\n`;
      md += `\n`;
    }

    // OSS Signal
    if (data.signal.oss !== 'explorer') {
       md += `## 🤝 Open Source\n\n`;
       if (data.signal.oss === 'maintainer') md += `I maintain open source projects. Check my pinned repos!\n\n`;
       if (data.signal.oss === 'contributor') md += `Active contributor to the ecosystem.\n\n`;
    }

    // Fun Extra
    if (data.signal.fun.enabled) {
      md += `**${data.signal.fun.type}**: ${data.signal.fun.value}\n\n`;
    }

    // Stats (Skipped in Zen)
    if (!isZen && (data.stats.github || data.stats.topLangs)) {
      md += `## 📊 Stats\n\n`;
      md += `<div align="center">\n`;
      const theme = previewTheme === 'dark' ? 'dark' : 'default'; 
      if (data.stats.github) md += `  <img src="https://github-readme-stats.vercel.app/api?username=${data.username}&show_icons=true&theme=${theme}&hide_border=true" height="150" alt="stats graph" />\n`;
      if (data.stats.topLangs) md += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username}&layout=compact&theme=${theme}&hide_border=true" height="150" alt="languages graph" />\n`;
      md += `</div>\n\n`;
    }

    // Socials (Bottom for Classic/Zen)
    if (!isModern) {
        const socials = [];
        if (data.social.twitter) socials.push(`[![Twitter](https://img.shields.io/badge/Twitter-${data.social.twitter}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${data.social.twitter})`);
        if (data.social.linkedin) socials.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-${data.social.linkedin}-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${data.social.linkedin})`);
        if (data.social.website) socials.push(`[![Website](https://img.shields.io/badge/Website-Portfolio-success?style=for-the-badge&logo=google-chrome&logoColor=white)](${data.social.website})`);
        
        if (socials.length > 0) {
        md += `## 🔗 Connect\n\n`;
        md += socials.join(' ') + `\n\n`;
        }
    }

    if (data.stats.visitors) {
        if(isModern) md += `<div align="center">`;
        md += `![Visitors](https://visitor-badge.laobi.icu/badge?page_id=${data.username}.${data.username})\n\n`;
        if(isModern) md += `</div>`;
    }

    // Footer
    if (data.footer.attribution || data.footer.sponsor) {
      md += `\n---\n`;
      md += `<div align="center">\n`;
      if (data.footer.attribution) md += `  <p>Built with <a href="https://kairo.dev">KAIRO</a> · Developer-first README tools</p>\n`;
      if (data.footer.sponsor) md += `  <p>Sponsored by <a href="${SPONSOR.url}">@${SPONSOR.handle}</a> — ${SPONSOR.desc}</p>\n`;
      md += `</div>\n`;
    }

    return md;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLayoutIcon = (l: LayoutType) => {
    switch(l) {
        case 'classic': return <AlignLeft size={14} />;
        case 'modern': return <AlignCenter size={14} />;
        case 'zen': return <FileText size={14} />;
    }
  }

  const isLight = previewTheme === 'light';

  return (
    <div className="flex flex-col h-screen bg-kairo-bg text-kairo-text overflow-hidden">
      {/* Header */}
      <header className="h-16 flex-shrink-0 border-b border-white/5 bg-kairo-bg flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-3">
           <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <ArrowLeft size={18} />
           </button>
           <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-kairo-red/20 border border-kairo-red/40 flex items-center justify-center rounded-sm">
                 <Terminal size={12} className="text-kairo-red" />
              </div>
              <span className="font-bold tracking-tight text-white">KAIRO</span>
              <span className="text-xs text-kairo-muted/50 border-l border-white/10 pl-2 ml-2">Profile Generator</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <Button size="sm" onClick={copyToClipboard} className={copied ? "bg-green-600 border-green-500" : ""}>
             {copied ? <Check size={14} className="mr-2" /> : <Copy size={14} className="mr-2" />}
             {copied ? "Copied" : "Copy Markdown"}
           </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* LEFT PANEL: INPUTS */}
        <div className="w-full lg:w-[500px] flex flex-col border-r border-white/5 bg-[#0B0B0D]">
           <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
              
              {/* SPONSOR SPOT */}
              <div className="relative border border-kairo-red/20 rounded-sm bg-gradient-to-br from-[#1a0505] to-[#0B0B0D] p-5">
                 <div className="absolute top-3 right-3 flex gap-2">
                   <span className="text-[9px] font-mono uppercase bg-kairo-red text-white px-2 py-0.5 rounded-sm">Community Sponsor</span>
                 </div>
                 
                 <div className="flex items-center gap-4 mb-3 mt-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">R</div>
                    <div>
                       <div className="text-white text-base font-bold">Railway</div>
                       <div className="text-xs text-kairo-muted">@railway</div>
                    </div>
                 </div>
                 <p className="text-xs text-kairo-muted/80 leading-relaxed mb-4">
                   "Instant deployments for every project. The best way to ship code."
                 </p>
                 <div className="flex gap-2">
                    <button onClick={() => setData(prev => ({...prev, footer: {...prev.footer, sponsor: !prev.footer.sponsor}}))} className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${data.footer.sponsor ? 'bg-kairo-red text-white border-kairo-red' : 'bg-transparent border-white/10 text-kairo-muted hover:text-white'}`}>
                       {data.footer.sponsor ? 'Enabled in Footer' : 'Add to Footer'}
                    </button>
                    <button className="text-xs text-kairo-muted hover:text-white underline decoration-white/20 underline-offset-4 px-2">
                       Sponsor KAIRO ($150)
                    </button>
                 </div>
              </div>

              {/* Identity Input */}
              <div className="bg-[#121216] border border-white/5 p-4 rounded-sm">
                <label className="block text-xs font-bold text-white mb-2 uppercase tracking-wide">GitHub Username <span className="text-kairo-red">*</span></label>
                <div className="relative">
                    <Github size={16} className="absolute left-3 top-3 text-kairo-muted" />
                    <input 
                      type="text" 
                      value={data.username}
                      onChange={(e) => setData({...data, username: e.target.value})}
                      placeholder="yourusername"
                      className="w-full bg-black border border-white/10 pl-10 pr-4 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-kairo-red transition-colors"
                    />
                </div>
              </div>

              {/* Accordion Sections */}
              {[
                { id: 'intro', label: 'Identity & Intro', icon: Terminal },
                { id: 'stack', label: 'Tech Stack', icon: Cpu },
                { id: 'signal', label: 'Personality & Signal', icon: Zap },
                { id: 'social', label: 'Social & Stats', icon: Globe },
              ].map((section) => (
                 <div key={section.id} className="border border-white/5 rounded-sm bg-[#121216] overflow-hidden">
                    <button 
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                    >
                       <span className="flex items-center gap-3 text-sm font-bold text-white">
                          <div className={`w-1.5 h-1.5 rounded-full ${activeSection === section.id ? 'bg-kairo-red' : 'bg-white/20'}`}></div>
                          {section.label}
                       </span>
                       <ChevronRight size={16} className={`text-kairo-muted transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                    </button>

                    {activeSection === section.id && (
                       <div className="p-4 pt-0 border-t border-white/5 animate-in slide-in-from-top-1 duration-200">
                          <div className="pt-4 space-y-4">
                             
                             {/* INTRO SECTION */}
                             {section.id === 'intro' && (
                                <>
                                  <div className="grid grid-cols-2 gap-3">
                                    <input type="text" placeholder="Role (e.g. Frontend Dev)" className="bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none" 
                                      value={data.intro.role} onChange={e => setData({...data, intro: {...data.intro, role: e.target.value}})} />
                                    <input type="text" placeholder="Location" className="bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none" 
                                      value={data.intro.location} onChange={e => setData({...data, intro: {...data.intro, location: e.target.value}})} />
                                  </div>
                                  <textarea placeholder="Short bio..." className="w-full bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none min-h-[80px]" 
                                    value={data.intro.text} onChange={e => setData({...data, intro: {...data.intro, text: e.target.value}})} />
                                </>
                             )}

                             {/* TECH STACK SECTION */}
                             {section.id === 'stack' && (
                                <div className="space-y-4">
                                   <div className="flex flex-wrap gap-2">
                                      {POPULAR_TECH.map(tech => (
                                        <button
                                          key={tech}
                                          onClick={() => toggleTech(tech)}
                                          className={`text-xs px-2.5 py-1.5 rounded border transition-all ${
                                            data.stack.selected.includes(tech) 
                                              ? 'bg-kairo-red border-kairo-red text-white' 
                                              : 'bg-black border-white/10 text-kairo-muted hover:border-white/30'
                                          }`}
                                        >
                                          {tech}
                                        </button>
                                      ))}
                                   </div>
                                   <div>
                                      <label className="text-xs text-kairo-muted mb-2 block">Plain English Explanation</label>
                                      <textarea 
                                        placeholder="E.g. I use React for UI, Node for APIs, and Rust when performance matters." 
                                        className="w-full bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none min-h-[60px]"
                                        value={data.stack.explanation} 
                                        onChange={e => setData({...data, stack: {...data.stack, explanation: e.target.value}})}
                                      />
                                   </div>
                                </div>
                             )}

                             {/* SIGNAL SECTION */}
                             {section.id === 'signal' && (
                                <div className="space-y-6">
                                   
                                   {/* OSS Signal */}
                                   <div>
                                      <label className="text-xs text-kairo-muted mb-2 block flex items-center gap-2"><GitPullRequest size={12}/> Open Source Signal</label>
                                      <div className="grid grid-cols-3 gap-1 bg-black p-1 rounded-sm border border-white/10">
                                         {(['explorer', 'contributor', 'maintainer'] as const).map(type => (
                                           <button 
                                             key={type}
                                             onClick={() => setData(d => ({...d, signal: {...d.signal, oss: type}}))}
                                             className={`text-[10px] py-1.5 rounded-sm capitalize transition-colors ${data.signal.oss === type ? 'bg-white/10 text-white' : 'text-kairo-muted'}`}
                                           >
                                              {type}
                                           </button>
                                         ))}
                                      </div>
                                   </div>

                                   {/* Philosophy */}
                                   <div>
                                      <label className="text-xs text-kairo-muted mb-2 block">Build Philosophy</label>
                                      <input 
                                        list="philosophies"
                                        placeholder="Select or type your own..."
                                        className="w-full bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none"
                                        value={data.signal.philosophy}
                                        onChange={(e) => setData(d => ({...d, signal: {...d.signal, philosophy: e.target.value}}))}
                                      />
                                      <datalist id="philosophies">
                                          {PHILOSOPHIES.map(p => <option key={p} value={p} />)}
                                      </datalist>
                                   </div>

                                   {/* Currently Learning */}
                                   <div>
                                      <label className="text-xs text-kairo-muted mb-2 block flex items-center gap-2"><Briefcase size={12}/> Currently Learning</label>
                                      <input type="text" placeholder="e.g. System Design & Web3" className="w-full bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none" 
                                        value={data.signal.learning} onChange={e => setData(d => ({...d, signal: {...d.signal, learning: e.target.value}}))} />
                                   </div>

                                   {/* Opportunities */}
                                   <div>
                                      <label className="text-xs text-kairo-muted mb-2 block">Open To</label>
                                      <div className="flex flex-wrap gap-2">
                                         {OPPORTUNITIES.map(opp => (
                                           <button
                                             key={opp}
                                             onClick={() => toggleOpportunity(opp)}
                                             className={`text-[10px] px-2 py-1 rounded border transition-colors ${data.signal.opportunity.includes(opp) ? 'bg-green-900/30 border-green-500/50 text-green-400' : 'bg-black border-white/10 text-kairo-muted'}`}
                                           >
                                              {opp}
                                           </button>
                                         ))}
                                      </div>
                                   </div>

                                    {/* Project Spotlight */}
                                   <div className="border border-white/10 p-3 rounded-sm bg-black/20">
                                      <label className="flex items-center gap-2 mb-3 cursor-pointer">
                                        <input type="checkbox" className="accent-kairo-red" checked={data.signal.spotlight.enabled} onChange={e => setData(d => ({...d, signal: {...d.signal, spotlight: {...d.signal.spotlight, enabled: e.target.checked}}}))} />
                                        <span className="text-xs font-bold text-white flex items-center gap-2"><Star size={12}/> Project Spotlight</span>
                                      </label>
                                      {data.signal.spotlight.enabled && (
                                        <div className="space-y-2 animate-in fade-in">
                                          <input type="text" placeholder="Repo Name" className="w-full bg-black border border-white/10 px-2 py-1.5 rounded-sm text-xs text-white" 
                                            value={data.signal.spotlight.repo} onChange={e => setData(d => ({...d, signal: {...d.signal, spotlight: {...d.signal.spotlight, repo: e.target.value}}}))} />
                                          <input type="text" placeholder="One line description" className="w-full bg-black border border-white/10 px-2 py-1.5 rounded-sm text-xs text-white" 
                                            value={data.signal.spotlight.desc} onChange={e => setData(d => ({...d, signal: {...d.signal, spotlight: {...d.signal.spotlight, desc: e.target.value}}}))} />
                                        </div>
                                      )}
                                   </div>

                                   {/* Quote */}
                                   <label className="flex items-center gap-2 p-3 bg-black/30 border border-white/5 rounded-sm cursor-pointer hover:border-white/20">
                                      <input type="checkbox" className="accent-kairo-red" checked={data.signal.quote} onChange={e => setData(d => ({...d, signal: {...d.signal, quote: e.target.checked}}))} />
                                      <span className="text-xs text-white">Add "Simplicity" Quote</span>
                                   </label>
                                   
                                   {/* Fun Fact */}
                                   <label className="flex items-center gap-2 p-3 bg-black/30 border border-white/5 rounded-sm cursor-pointer hover:border-white/20">
                                      <input type="checkbox" className="accent-kairo-red" checked={data.signal.fun.enabled} onChange={e => setData(d => ({...d, signal: {...d.signal, fun: {...d.signal.fun, enabled: e.target.checked}}}))} />
                                      <span className="text-xs text-white">Add Fun Fact</span>
                                   </label>
                                   {data.signal.fun.enabled && (
                                     <input type="text" placeholder="e.g. I code in Dvorak layout." className="w-full bg-black border border-white/10 px-3 py-2 rounded-sm text-sm text-white focus:border-kairo-red outline-none" 
                                        value={data.signal.fun.value} onChange={e => setData(d => ({...d, signal: {...d.signal, fun: {...d.signal.fun, value: e.target.value}}}))} />
                                   )}
                                </div>
                             )}

                             {/* SOCIAL & STATS SECTION */}
                             {section.id === 'social' && (
                                <div className="space-y-4">
                                   <div className="space-y-3">
                                     <div className="relative">
                                        <Twitter size={14} className="absolute left-3 top-3 text-kairo-muted" />
                                        <input type="text" placeholder="Twitter Username" className="w-full bg-black border border-white/10 pl-9 pr-3 py-2 rounded-sm text-sm text-white" 
                                         value={data.social.twitter} onChange={e => setData({...data, social: {...data.social, twitter: e.target.value}})} />
                                     </div>
                                     <div className="relative">
                                        <Linkedin size={14} className="absolute left-3 top-3 text-kairo-muted" />
                                        <input type="text" placeholder="LinkedIn Username" className="w-full bg-black border border-white/10 pl-9 pr-3 py-2 rounded-sm text-sm text-white" 
                                         value={data.social.linkedin} onChange={e => setData({...data, social: {...data.social, linkedin: e.target.value}})} />
                                     </div>
                                     <div className="relative">
                                        <Globe size={14} className="absolute left-3 top-3 text-kairo-muted" />
                                        <input type="text" placeholder="Portfolio URL" className="w-full bg-black border border-white/10 pl-9 pr-3 py-2 rounded-sm text-sm text-white" 
                                         value={data.social.website} onChange={e => setData({...data, social: {...data.social, website: e.target.value}})} />
                                     </div>
                                   </div>
                                   
                                   <div className="pt-4 border-t border-white/5">
                                      <p className="text-xs text-kairo-muted mb-3 uppercase font-bold">Stats Visibility</p>
                                      <div className="grid grid-cols-2 gap-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <input type="checkbox" className="accent-kairo-red" checked={data.stats.github} onChange={e => setData({...data, stats: {...data.stats, github: e.target.checked}})} />
                                          <span className="text-xs text-white">GitHub Graph</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <input type="checkbox" className="accent-kairo-red" checked={data.stats.topLangs} onChange={e => setData({...data, stats: {...data.stats, topLangs: e.target.checked}})} />
                                          <span className="text-xs text-white">Top Langs</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <input type="checkbox" className="accent-kairo-red" checked={data.stats.visitors} onChange={e => setData({...data, stats: {...data.stats, visitors: e.target.checked}})} />
                                          <span className="text-xs text-white">Visitor Count</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <input type="checkbox" className="accent-kairo-red" checked={data.footer.attribution} onChange={e => setData({...data, footer: {...data.footer, attribution: e.target.checked}})} />
                                          <span className="text-xs text-white">Built with KAIRO</span>
                                        </label>
                                      </div>
                                   </div>
                                </div>
                             )}
                          </div>
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>

        {/* RIGHT PANEL: LIVE PREVIEW */}
        <div className={`hidden lg:flex flex-1 flex-col overflow-hidden border-l ${isLight ? 'bg-white border-gray-200' : 'bg-[#0d1117] border-[#30363d]'}`}>
           
           {/* Preview Toolbar */}
           <div className={`flex-shrink-0 h-10 border-b flex items-center px-4 justify-between ${isLight ? 'bg-[#f6f8fa] border-gray-200' : 'bg-[#161b22] border-[#30363d]'}`}>
              <div className="flex gap-4 items-center">
                 <span className={`text-xs font-mono font-bold ${isLight ? 'text-gray-600' : 'text-[#8b949e]'}`}>README.md</span>
                 <div className={`h-4 w-px ${isLight ? 'bg-gray-300' : 'bg-[#30363d]'}`}></div>
                 
                 {/* Layout Selector */}
                 <div className="flex items-center bg-gray-500/10 rounded-lg p-0.5">
                    {(['classic', 'modern', 'zen'] as LayoutType[]).map(l => (
                        <button 
                            key={l}
                            onClick={() => setLayout(l)}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium transition-all ${
                                layout === l 
                                ? (isLight ? 'bg-white shadow text-black' : 'bg-[#30363d] shadow text-white') 
                                : (isLight ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white')
                            }`}
                        >
                            {getLayoutIcon(l)}
                            <span className="capitalize">{l}</span>
                        </button>
                    ))}
                 </div>
              </div>
              
              <div className="flex items-center bg-gray-500/10 rounded-full p-0.5">
                 <button onClick={() => setPreviewTheme('light')} className={`p-1 rounded-full transition-all ${isLight ? 'bg-white shadow text-yellow-600' : 'text-gray-400 hover:text-white'}`}>
                    <Sun size={12} />
                 </button>
                 <button onClick={() => setPreviewTheme('dark')} className={`p-1 rounded-full transition-all ${!isLight ? 'bg-[#30363d] shadow text-blue-400' : 'text-gray-500 hover:text-black'}`}>
                    <Moon size={12} />
                 </button>
              </div>
           </div>
           
           <div className={`flex-1 overflow-y-auto p-8 md:p-12 ${isLight ? 'bg-white text-[#24292f]' : 'bg-[#0d1117] text-[#c9d1d9]'}`}>
              {/* GitHub Markdown Simulation Wrapper */}
              <div className={`prose max-w-none text-base leading-7 font-sans
                 ${isLight 
                    ? 'prose-headings:text-[#24292f] prose-p:text-[#24292f] prose-a:text-[#0969da] prose-strong:text-[#24292f] prose-li:text-[#24292f] prose-blockquote:text-[#57606a] prose-code:text-[#24292f]' 
                    : 'prose-headings:text-[#c9d1d9] prose-p:text-[#c9d1d9] prose-a:text-[#58a6ff] prose-strong:text-[#c9d1d9] prose-li:text-[#c9d1d9] prose-blockquote:text-[#8b949e] prose-code:text-[#c9d1d9]'}
                 prose-headings:border-b ${isLight ? 'prose-headings:border-[#d0d7de]' : 'prose-headings:border-[#21262d]'} 
                 prose-headings:pb-2 prose-img:inline-block prose-a:no-underline hover:prose-a:underline
                 prose-blockquote:border-l-4 ${isLight ? 'prose-blockquote:border-[#d0d7de]' : 'prose-blockquote:border-[#30363d]'} prose-blockquote:pl-4 prose-blockquote:not-italic
                 prose-code:bg-black/10 prose-code:rounded-md prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none
                 `}
              >
                 
                 {/* Layout: Wrapper for styling */}
                 <div className={layout === 'modern' ? "text-center flex flex-col items-center" : ""}>

                   {/* Title & Intro */}
                   <h1 className="text-3xl font-bold mb-4">Hi, I'm {data.username || 'Ankan'} 👋</h1>

                   {data.signal.quote && (
                     <blockquote className="my-6">
                        "Simplicity is the soul of efficiency."
                     </blockquote>
                   )}

                   <p className="mb-6 text-lg">
                      {data.intro.role && <>🚀 <strong>{data.intro.role}</strong></>} 
                      {data.intro.location && <> based in <strong>{data.intro.location}</strong></>}
                      <br/><br/>
                      {data.intro.text}
                   </p>

                   {/* Modern: Socials at top */}
                   {layout === 'modern' && (data.social.twitter || data.social.linkedin || data.social.website) && (
                      <div className="flex flex-wrap gap-2 justify-center mb-8">
                         {data.social.twitter && <img src={`https://img.shields.io/badge/Twitter-${data.social.twitter}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white`} className="h-7" />}
                         {data.social.linkedin && <img src={`https://img.shields.io/badge/LinkedIn-${data.social.linkedin}-0077B5?style=for-the-badge&logo=linkedin&logoColor=white`} className="h-7" />}
                         {data.social.website && <img src={`https://img.shields.io/badge/Website-Portfolio-success?style=for-the-badge&logo=google-chrome&logoColor=white`} className="h-7" />}
                      </div>
                   )}

                   {/* Body Content */}
                   {(data.signal.philosophy || data.signal.learning) && (
                     <ul className="list-disc pl-5 mb-8 space-y-2">
                        {data.signal.philosophy && <li>🔭 <strong>Philosophy</strong>: {data.signal.philosophy}</li>}
                        {data.signal.learning && <li>🌱 <strong>Learning</strong>: {data.signal.learning}</li>}
                     </ul>
                   )}

                   {data.stack.selected.length > 0 && (
                     <div className={`mb-8 ${layout === 'modern' ? 'text-center' : ''}`}>
                       <h2 className="text-2xl font-bold mb-4 mt-8">🛠 Tech Stack</h2>
                       {data.stack.explanation && <p className="mb-4">{data.stack.explanation}</p>}
                       <div className={`flex flex-wrap gap-2 ${layout === 'modern' ? 'justify-center' : ''}`}>
                          {data.stack.selected.map((s, i) => (
                            <img key={i} src={`https://img.shields.io/badge/-${encodeURIComponent(s.trim())}-black?style=${layout === 'zen' ? 'flat' : 'flat-square'}&logo=${encodeURIComponent(s.trim().toLowerCase())}&logoColor=white`} alt={s} className="h-7" />
                          ))}
                       </div>
                     </div>
                   )}

                   {data.signal.spotlight.enabled && data.signal.spotlight.repo && (
                     <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 mt-8">🏆 Project Spotlight</h2>
                        <h3 className="text-xl font-bold mt-2">
                          <a href="#">{data.signal.spotlight.repo}</a>
                        </h3>
                        <p>{data.signal.spotlight.desc}</p>
                     </div>
                   )}

                   {(data.signal.opportunity.length > 0 || data.signal.focus.enabled) && (
                      <div className="mb-8">
                         <h2 className="text-2xl font-bold mb-4 mt-8">⚡ Status</h2>
                         <ul className="list-disc pl-5 space-y-2">
                            {data.signal.focus.enabled && <li><strong>Current Focus</strong>: {data.signal.focus.text}</li>}
                            {data.signal.opportunity.length > 0 && <li><strong>Open to</strong>: {data.signal.opportunity.join(', ')}</li>}
                         </ul>
                      </div>
                   )}

                   {data.signal.oss !== 'explorer' && (
                      <div className="mb-8">
                         <h2 className="text-2xl font-bold mb-4 mt-8">🤝 Open Source</h2>
                         <p>
                           {data.signal.oss === 'maintainer' ? 'I maintain open source projects. Check my pinned repos!' : 'Active contributor to the ecosystem.'}
                         </p>
                      </div>
                   )}
                   
                   {data.signal.fun.enabled && (
                      <p className="mb-8">
                        <strong>{data.signal.fun.type}</strong>: {data.signal.fun.value}
                      </p>
                   )}

                   {/* Stats - Hidden in Zen */}
                   {layout !== 'zen' && (data.stats.github || data.stats.topLangs) && (
                     <div className="mb-8">
                        <h2 className={`text-2xl font-bold mb-4 mt-8 ${layout === 'modern' ? 'text-center' : ''}`}>📊 Stats</h2>
                        <div className="flex flex-col gap-4 justify-center items-center">
                           {data.stats.github && (
                             <div className={`h-[150px] w-full max-w-2xl flex items-center justify-center text-xs p-4 border rounded ${isLight ? 'bg-white border-gray-200 text-gray-400' : 'bg-[#0B0B0D] border-[#30363d] text-[#8b949e]'}`}>
                                [ GitHub Stats Graph ]
                             </div>
                           )}
                           {data.stats.topLangs && (
                             <div className={`h-[150px] w-full max-w-2xl flex items-center justify-center text-xs p-4 border rounded ${isLight ? 'bg-white border-gray-200 text-gray-400' : 'bg-[#0B0B0D] border-[#30363d] text-[#8b949e]'}`}>
                                [ Top Languages ]
                             </div>
                           )}
                        </div>
                     </div>
                   )}

                   {/* Connect - Only shown at bottom for Classic/Zen */}
                   {layout !== 'modern' && (data.social.twitter || data.social.linkedin || data.social.website) && (
                      <div className="mb-8">
                         <h2 className="text-2xl font-bold mb-4 mt-8">🔗 Connect</h2>
                         <div className="flex flex-wrap gap-2">
                            {data.social.twitter && <img src={`https://img.shields.io/badge/Twitter-${data.social.twitter}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white`} className="h-7" />}
                            {data.social.linkedin && <img src={`https://img.shields.io/badge/LinkedIn-${data.social.linkedin}-0077B5?style=for-the-badge&logo=linkedin&logoColor=white`} className="h-7" />}
                            {data.social.website && <img src={`https://img.shields.io/badge/Website-Portfolio-success?style=for-the-badge&logo=google-chrome&logoColor=white`} className="h-7" />}
                         </div>
                      </div>
                   )}

                   {(data.footer.attribution || data.footer.sponsor) && (
                     <div className={`mt-16 pt-8 border-t text-sm text-center ${isLight ? 'border-gray-200 text-gray-500' : 'border-[#21262d] text-[#8b949e]'}`}>
                        {data.footer.attribution && (
                          <p className="mb-2">Built with <a href="https://kairo.dev">KAIRO</a> · Developer-first README tools</p>
                        )}
                        {data.footer.sponsor && (
                          <p>Sponsored by <a href={SPONSOR.url}>@{SPONSOR.handle}</a> — {SPONSOR.desc}</p>
                        )}
                     </div>
                   )}
                 
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};