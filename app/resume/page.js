"use client";

import React from 'react';
import { portfolioData } from '../data';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const { personal, skills, experience, projects, education } = portfolioData;

  // Helper to format skill groups neatly
  const formatSkillsList = (skillCategory) => {
    if (!skillCategory || !Array.isArray(skillCategory)) return "";
    return skillCategory.map(group => `${group.title}: ${group.list.join(", ")}`).join(" — ");
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans py-12 px-6 print:py-0 print:px-0">
      
      {/* Action Bar - Hidden during printing */}
      <div className="max-w-3xl mx-auto mb-8 flex justify-between items-center print:hidden border-b border-neutral-200 pb-4">
        <a 
          href="/"
          className="font-mono text-xs text-neutral-600 hover:text-black transition flex items-center gap-1.5"
        >
          ← Back to Portfolio
        </a>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-black text-white hover:bg-neutral-800 transition font-mono text-xs font-medium rounded-md shadow-sm flex items-center gap-2"
        >
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Vercel-Style Minimalist Resume Sheet */}
      <div className="max-w-3xl mx-auto space-y-10 print:space-y-6">
        
        {/* Header */}
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-black">{personal.name}</h1>
          <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">{personal.title}</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-1 pt-2 font-mono text-xs text-neutral-500">
            <span>{personal.location}</span>
            <span>{personal.email}</span>
            <a href={`https://${personal.github}`} target="_blank" rel="noreferrer" className="hover:text-black underline underline-offset-4">{personal.github}</a>
            <a href={`https://${personal.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-black underline underline-offset-4">{personal.linkedin}</a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">// Summary</h2>
          <p className="text-sm leading-relaxed text-neutral-800 font-light">
            {personal.summary}
          </p>
        </section>

        {/* Technical Expertise */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">// Technical Expertise</h2>
          <div className="space-y-2 text-xs text-neutral-700 font-light">
            <div className="leading-relaxed"><strong className="text-black font-medium">Mobile & Frontend:</strong> {formatSkillsList(skills.mobileAndFrontend)}</div>
            <div className="leading-relaxed"><strong className="text-black font-medium">Systems & Tools:</strong> {formatSkillsList(skills.systemsAndTools)}</div>
            <div className="leading-relaxed"><strong className="text-black font-medium">Hardware & Diagnostics:</strong> {formatSkillsList(skills.hardwareAndDiagnostics)}</div>
            <div className="leading-relaxed"><strong className="text-black font-medium">Backend & Workflow:</strong> {formatSkillsList(skills.backendAndWorkflow)}</div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">// Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="space-y-2 border-l border-neutral-200 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="font-semibold text-black text-sm">{exp.role}</h3>
                  <span className="font-mono text-[11px] text-neutral-500">{exp.period}</span>
                </div>
                
                <div className="font-mono text-[11px] text-neutral-600 flex flex-wrap items-center gap-x-3 gap-y-0.5">
                  <span className="text-black font-medium">{exp.company}</span>
                  {exp.location && <span>• {exp.location}</span>}
                  {exp.employmentType && <span>({exp.employmentType})</span>}
                  {exp.ctc && <span>• CTC: {exp.ctc}</span>}
                </div>

                <ul className="space-y-1.5 pt-1 text-xs text-neutral-700 font-light">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">›</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">// Key Projects</h2>
          
          <div className="space-y-5">
            {projects.map((proj, index) => (
              <div key={index} className="space-y-1.5 border-l border-neutral-200 pl-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-black text-sm">{proj.name}</h3>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">{proj.status}</span>
                </div>
                <p className="text-xs text-neutral-700 font-light leading-relaxed">{proj.description}</p>
                <div className="font-mono text-[11px] text-neutral-500 pt-0.5">
                  <span className="text-black font-medium">Stack:</span> {proj.techStack.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6 pb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400">// Education</h2>
          
          <div className="space-y-5">
            {education.map((edu, index) => (
              <div key={index} className="space-y-1 border-l border-neutral-200 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-semibold text-black text-sm">{edu.degree}</h3>
                  <span className="font-mono text-[11px] text-neutral-500">{edu.period}</span>
                </div>
                <div className="font-mono text-[11px] text-neutral-600">
                  {edu.institution} {edu.grade ? `• ${edu.grade}` : ''}
                </div>
                <p className="text-xs text-neutral-600 font-light leading-relaxed pt-0.5">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}