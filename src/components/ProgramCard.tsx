import React, { useState } from 'react';
import { Copy, Check, ChevronRight } from 'lucide-react';
import type { PracticalProgram } from '../types';

interface ProgramCardProps {
  program: PracticalProgram;
  onSelect: (program: PracticalProgram) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onSelect }) => {
  const [copied, setCopied] = useState(false);

  const handleQuickCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(program.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  // Preview first 3 non-empty lines of code
  const codePreview = program.code
    .split('\n')
    .slice(0, 3)
    .join('\n');

  const paddedChit = program.chitNumber < 10 ? `Chit 0${program.chitNumber}` : `Chit ${program.chitNumber}`;

  return (
    <article
      className="program-card"
      onClick={() => onSelect(program)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(program);
        }
      }}
      aria-label={`${paddedChit}: ${program.title}`}
    >
      <div className="card-header">
        <span className="chit-badge">{paddedChit}</span>
        <span className="category-tag">{program.category}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{program.title}</h3>

        <pre className="card-preview-code">
          <code>{codePreview}</code>
        </pre>

        <div className="card-meta-notes" title="Viva Concept Reminder">
          <strong>Viva: </strong>
          {program.vivaNote}
        </div>

        <div className="card-actions">
          <button
            type="button"
            className={`card-btn ${copied ? 'copied' : ''}`}
            onClick={handleQuickCopy}
            title="Quick copy C++ code"
            aria-label={`Copy code for Chit ${program.chitNumber}`}
          >
            {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            className="card-btn card-btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(program);
            }}
            title="View complete source code, output and viva details"
            aria-label={`View Chit ${program.chitNumber} details`}
          >
            <span>View Chit</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
};
