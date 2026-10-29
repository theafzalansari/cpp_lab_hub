import React from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onHomeClick, totalCount }) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="brand" onClick={onHomeClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onHomeClick(); }}>
          <div className="brand-icon">
            <Terminal size={20} />
          </div>
          <div className="brand-title-wrap">
            <div className="brand-title">
              DSA Vault
              <span className="brand-badge">SPPU 2024</span>
            </div>
            <div className="brand-subtitle">
              Data Structures & Algorithms Practical Exam Chits 1–24
            </div>
          </div>
        </div>

        <div className="navbar-actions">
          <div className="badge-pill" title="All programs available offline">
            <span className="badge-dot" />
            <span>{totalCount} Chits • Offline Ready</span>
          </div>
          <div className="badge-pill" title="Preserved from official practical notes" style={{ display: 'none' }}>
            <ShieldCheck size={14} color="#8B5CF6" />
            <span>Verified Code</span>
          </div>
        </div>
      </div>
    </header>
  );
};
