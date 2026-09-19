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

  const { personal, skills, experience, projects, education } = portfolioData;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-indigo-500/30">
              {personal.name.charAt(0)}
            </div>
            <span className="font-bold text-lg tracking-tight">{personal.name}.dev</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume"
              target="_blank"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-medium border border-slate-700 transition flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/20 transition"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/resume"
                target="_blank"
                className="w-full py-2.5 bg-slate-800 text-center rounded-xl text-sm font-medium border border-slate-700 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View / Print Resume PDF</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software Engineer & Systems Specialist</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{personal.name}</span>. I build robust mobile systems & scalable apps.
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
              {personal.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/resume"
                target="_blank"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl font-semibold transition flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Technical Expertise</h2>
            <p className="text-slate-400">Core technologies, developer environments, and hardware systems I work with daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Mobile & Frontend</h3>
              <p className="text-sm text-slate-400">{skills.mobileAndFrontend}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Systems & Tools</h3>
              <p className="text-sm text-slate-400">{skills.systemsAndTools}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Hardware & Diagnostics</h3>
              <p className="text-sm text-slate-400">{skills.hardwareAndDiagnostics}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Backend & Workflow</h3>
              <p className="text-sm text-slate-400">{skills.backendAndWorkflow}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Professional Experience</h2>
            <p className="text-slate-400">My engineering career path and milestones.</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
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
      <section id="projects" className="py-20 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400">Production-ready apps and systems developed with modern frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                onClick={() => setSelectedProject(project)}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-indigo-500/50 transition cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                      {project.name.charAt(0)}
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition">{project.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="flex items-center text-sm font-semibold text-indigo-400 gap-1">
                  <span>View Project Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400">Have an engineering project in mind or want to collaborate? Send me a message.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            {contactSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-400 text-sm">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`https://${personal.github}`} target="_blank" className="hover:text-indigo-400 transition flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href={`https://${personal.linkedin}`} target="_blank" className="hover:text-indigo-400 transition flex items-center gap-1.5">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${personal.email}`} className="hover:text-indigo-400 transition flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.name}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedProject.description}</p>
            <div className="flex gap-4">
              <a
                href="/resume"
                target="_blank"
                className="flex-1 py-2.5 bg-indigo-600 text-center text-white rounded-xl text-sm font-semibold hover:bg-indigo-500 transition"
              >
                View in Resume
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-700 transition"
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