'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setContactSubmitted(true);
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
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
              <p className="text-neutral-400 text-xs font-mono">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5">Email</label>
                  <input 
                    name="email"
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
                  name="message"
                  rows={4}
                  required
                  placeholder="Project details or inquiry..."
                  className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white transition"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-white hover:bg-neutral-200 text-black rounded-lg font-mono text-xs font-bold transition flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}