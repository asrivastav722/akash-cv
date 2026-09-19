"use client";

import React from 'react';
import { portfolioData } from '../data';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const { personal, skills, experience, projects, education } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 print:bg-white print:py-0 print:px-0">
      {/* Action Bar - Hidden during printing */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <a 
          href="/"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
        >
          ← Back to Portfolio
        </a>
        <button
          onClick={handlePrint}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow-md hover:bg-indigo-500 transition flex items-center gap-2"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* Printable Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-12 print:shadow-none print:rounded-none print:p-0 text-gray-800">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{personal.name}</h1>
          <p className="text-lg font-medium text-indigo-600 mt-1">{personal.title}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
            <span>📍 {personal.location}</span>
            <span>✉️ {personal.email}</span>
            <span>🔗 {personal.github}</span>
            <span>💼 {personal.linkedin}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-2">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {personal.summary}
          </p>
        </div>

        {/* Technical Expertise */}
        <div className="mb-6">
          <h2 className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-2">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong>Mobile & Frontend:</strong> {skills.mobileAndFrontend}</div>
            <div><strong>Systems & Tools:</strong> {skills.systemsAndTools}</div>
            <div><strong>Hardware & Diagnostics:</strong> {skills.hardwareAndDiagnostics}</div>
            <div><strong>Backend & Workflow:</strong> {skills.backendAndWorkflow}</div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-6">
          <h2 className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-3">Professional Experience</h2>
          
          {experience.map((exp, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">{exp.role}</h3>
                <span className="text-xs text-gray-500 font-medium">{exp.period}</span>
              </div>
              <p className="text-xs font-semibold text-indigo-600 mb-1">{exp.company}</p>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Projects & Education */}
        <div>
          <h2 className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-2">Key Projects & Education</h2>
          <div className="text-xs space-y-2 text-gray-700">
            {projects.map((proj, index) => (
              <div key={index}>
                <strong>{proj.name}:</strong> {proj.description}
              </div>
            ))}
            {education.map((edu, index) => (
              <div key={index}>
                <strong>{edu.degree}</strong> — {edu.details}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}