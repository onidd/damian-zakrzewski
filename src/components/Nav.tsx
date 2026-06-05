import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Blokowanie scrollowania strony, gdy menu mobilne jest otwarte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    // Zmieniamy na relative z-50, żeby navbar był zawsze na wierzchu
    <nav className="flex items-center justify-between py-12 mb-8 relative z-50">
      
      {/* Animowane imię i nazwisko - zawsze widoczne */}
      <a href="/" className="font-['Cormorant_Garamond'] italic font-bold text-2xl text-slate-900 tracking-wide relative z-50" aria-label="Damian Zakrzewski Home">
        <span className="animate-typewriter">
          Damian Zakrzewski
        </span>
      </a>
      
      {/* ========================================= */}
      {/* NAWIGACJA DESKTOPOWA (ukryta na telefonach) */}
      {/* ========================================= */}
      <div className="hidden md:flex gap-4 text-slate-500">
        
        <a href="/" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="About">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            About
          </span>
        </a>
        
        <a href="/research/" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="Research">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 3h15" />
            <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
            <path d="M6 14h12" />
          </svg>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            Research
          </span>
        </a>
        
        <a href="/publications/" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="Publications">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M6 6h10" />
            <path d="M6 10h10" />
          </svg>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            Publications
          </span>
        </a>
        
        <a href="/contact/" className="group relative p-2 hover:text-slate-900 transition-colors" aria-label="Contact">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] uppercase tracking-widest font-bold text-slate-900 pointer-events-none whitespace-nowrap">
            Contact
          </span>
        </a>
        
      </div>

      {/* ========================================= */}
      {/* PRZYCISK HAMBURGERA (widoczny tylko na tel) */}
      {/* ========================================= */}
      <button 
        className="md:hidden relative z-50 p-2 text-slate-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-3.5 flex flex-col justify-between items-end">
          {/* Górna linia */}
          <span className={`block h-[1.5px] bg-current transition-transform duration-300 ease-in-out ${isOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`}></span>
          {/* Dolna linia (krótsza, ale wydłuża się do 'X' przy otwarciu) */}
          <span className={`block h-[1.5px] bg-current transition-all duration-300 ease-in-out ${isOpen ? 'w-6 -rotate-45 -translate-y-[6.5px]' : 'w-4'}`}></span>
        </div>
      </button>

      {/* ========================================= */}
      {/* PEŁNOEKRANOWE MENU MOBILNE */}
      {/* ========================================= */}
      <div 
        className={`fixed inset-0 bg-[#fcfbf8] z-40 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-10 text-4xl font-['Cormorant_Garamond'] italic text-slate-900">
          <a href="/" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">About</a>
          <a href="/research/" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">Research</a>
          <a href="/publications/" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">Publications</a>
          <a href="/contact/" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </div>

    </nav>
  );
}
