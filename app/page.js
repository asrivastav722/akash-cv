"use client";

import React, { useState } from 'react';
import { 
  Terminal, Code2, Smartphone, Cpu, Wrench, GitBranch, 
  Layers, Mail, Github, Linkedin, ExternalLink, Sparkles, 
  FileText, Download, Menu, X, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { portfolioData } from './data';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const { personal, skills, experience, projects } = portfolioData;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased">
      
      {/* Background Subtle Vercel Grid/Glow Accent */}
      <div className="fixed inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* Vercel Glass Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-mono font-bold text-sm tracking-tighter">
              {personal.name.charAt(0)}
            </div>
            <span className="font-mono text-sm tracking-tight text-neutral-200 capitalize">{personal.name.toLowerCase()}</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume"
              target="_blank"
              className="px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-md text-xs font-mono font-medium border border-white/10 transition flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              <span>Resume.pdf</span>
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 bg-white hover:bg-neutral-200 text-black rounded-md text-xs font-mono font-semibold transition shadow-md"
            >
              Deploy Idea ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-b border-white/10 px-6 py-4 space-y-3 font-mono text-sm">
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-neutral-400 hover:text-white">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-neutral-400 hover:text-white">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-neutral-400 hover:text-white">Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-neutral-400 hover:text-white">Contact</a>
            <div className="pt-2">
              <a href="/resume" target="_blank" className="w-full py-2 bg-neutral-900 text-center rounded-md text-xs text-neutral-200 border border-white/10 block">
                View Resume PDF
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Headline & Bio */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Engineering Roles</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Building high-performance <span className="text-neutral-400">mobile systems</span> & apps.
              </h1>
              <p className="text-base sm:text-lg text-neutral-400 mb-8 leading-relaxed font-light">
                {personal.summary}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-md font-mono text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-white/5"
                >
                  <span>Explore Work</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/resume"
                  target="_blank"
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/10 rounded-md font-mono text-xs font-medium transition flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Right: Avatar Image with opacity-50 glow background */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Opacity-50 background ambient spotlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-neutral-500/20 opacity-50 blur-2xl transform scale-105 pointer-events-none" />
                
                {/* Image Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
                  <img 
                    src={personal.avatar || "/avatar.jpg"} 
                    alt={personal.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-white/10 bg-neutral-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">// Tech Stack & Metrics</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Technical Expertise & Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Category Card Generator */}
            {[
              { key: 'mobileAndFrontend', title: 'Mobile & Frontend', icon: Smartphone, items: skills.mobileAndFrontend },
              { key: 'systemsAndTools', title: 'Systems & Tools', icon: Terminal, items: skills.systemsAndTools },
              { key: 'hardwareAndDiagnostics', title: 'Hardware & Diagnostics', icon: Wrench, items: skills.hardwareAndDiagnostics },
              { key: 'backendAndWorkflow', title: 'Backend & Workflow', icon: Cpu, items: skills.backendAndWorkflow },
            ].map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="bg-black border border-white/10 rounded-xl p-6 sm:p-8 hover:border-white/30 transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-white text-lg tracking-tight">{cat.title}</h4>
                    </div>

                    <div className="space-y-6">
                      {cat.items.map((sub, i) => (
                        <div key={i} className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <div className="space-y-1">
                            <span className="font-semibold text-xs text-white block">{sub.title}</span>
                            <p className="text-[11px] text-neutral-400 font-light">{sub.list.join(", ")}</p>
                          </div>
                          
                          {/* Exact Vercel-style Circular Progress Ring */}
                          <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-neutral-900"
                                strokeWidth="3.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-white transition-all duration-1000 ease-out"
                                strokeDasharray={`${sub.percentage}, 100`}
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute font-mono text-[10px] font-bold text-white">
                              {sub.percentage}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">// Career Path</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Professional Experience</h3>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-neutral-950/50 border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-neutral-400 font-mono text-xs mt-0.5">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded text-neutral-300 w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-neutral-300 text-xs sm:text-sm font-light">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-neutral-500 font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-white/10 bg-neutral-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">// Shipped Work</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Featured Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-black border border-white/10 rounded-xl p-6 sm:p-8 hover:border-white/30 transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Index Number & Project Logo */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white font-mono flex items-center justify-center text-xs font-bold">
                        0{index + 1}
                      </div>
                      
                    </div>

                    {/* Multiple Links Bar */}
                      <div className="flex items-center gap-2">
                        {project.links && project.links.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 bg-white/5 hover:bg-white/15 border border-white/10 rounded font-mono text-[10px] text-neutral-300 hover:text-white transition flex items-center gap-1"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3 text-neutral-400" />
                          </a>
                        ))}
                      </div>
                      
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                    <div className='space-y-1' >
                      
                      <h4 
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold text-white group-hover:text-neutral-200 transition cursor-pointer"
                      >
                        {project.name}
                      </h4>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light line-clamp-2">
                      {project.description}
                    </p>

                    </div>
                    {project.logoUrl && (
                        <div className="w-16 h-16 overflow-hidden rounded-xl flex items-center justify-center p-1.5 flex-shrink-0">
                          <img 
                            src={project.logoUrl} 
                            alt={project.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>


                  {/* Tech Stack Badges */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 bg-neutral-900 border border-white/10 rounded font-mono text-[10px] text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className='flex h-fit w-full justify-between items-center border-t border-white/5 pt-4'>  
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center font-mono text-xs text-neutral-400 gap-1 group-hover:text-white transition cursor-pointer  "
                  >
                    <span>View Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <span className='font-mono text-xs text-neutral-500 '>Status: {project?.status}</span>
                </div>
              
              
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section id="education" className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">// Academic Background</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Education & Credentials</h3>
          </div>

          <div className="space-y-6">
            {portfolioData?.education.map((edu, index) => (
              <div key={index} className="bg-neutral-950/50 border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-neutral-200 transition">{edu.degree}</h4>
                    <p className="text-neutral-400 font-mono text-xs mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {edu?.grade && <span className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded text-neutral-300 w-fit">
                      {edu.grade}
                    </span>}
                    <span className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded text-neutral-400 w-fit">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/10 bg-neutral-950/50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">// Connect</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Get In Touch</h3>
            <p className="text-neutral-400 text-sm font-light">Have an engineering project or role in mind? Send a dispatch.</p>
          </div>

          <div className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">
            {contactSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto border border-white/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base">Transmission Successful</h4>
                <p className="text-neutral-400 text-xs font-mono">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Project details or inquiry..."
                    className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-white hover:bg-neutral-200 text-black rounded-lg font-mono text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`https://${personal.github}`} target="_blank" className="hover:text-white transition flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href={`https://${personal.linkedin}`} target="_blank" className="hover:text-white transition flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${personal.email}`} className="hover:text-white transition flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-black border border-white/15 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-xl font-bold text-white mb-2">{selectedProject.name}</h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">{selectedProject.description}</p>
            <div className="flex gap-3">
              <a
                href="/resume"
                target="_blank"
                className="flex-1 py-2.5 bg-white text-center text-black rounded-lg font-mono text-xs font-bold hover:bg-neutral-200 transition"
              >
                View in Resume
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 bg-neutral-900 text-neutral-300 rounded-lg font-mono text-xs hover:bg-neutral-800 transition border border-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}