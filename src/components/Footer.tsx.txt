import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-12 flex items-center justify-between text-slate-500">
      
      {/* Copyright */}
      <div className="text-[10px] uppercase tracking-widest font-bold">
        &copy; {currentYear} Damian Zakrzewski. All rights reserved.
      </div>

      {/* Icons as pure SVG */}
      <div className="flex gap-4">
        
        {/* ORCID */}
        <a href="https://orcid.org/0009-0002-3630-4180" target="_blank" rel="noreferrer" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="ORCID">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 15V9"/>
            <path d="M16 12a3 3 0 0 0-3-3h-2v6h2a3 3 0 0 0 3-3z"/>
          </svg>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            ORCID
          </span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/damian-zakrzewski2004/" target="_blank" rel="noreferrer" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            LinkedIn
          </span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/onidd" target="_blank" rel="noreferrer" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="GitHub">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            GitHub
          </span>
        </a>

      </div>
    </footer>
  );
}
