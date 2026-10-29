import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import type { PracticalProgram } from '../types';
import { CodeBlock } from './CodeBlock';

interface ProgramDetailProps {
  program: PracticalProgram;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  totalPrograms: number;
}

export const ProgramDetail: React.FC<ProgramDetailProps> = ({
  program,
  onBack,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  totalPrograms
}) => {
  useEffect(() => {
    // Scroll to top when opening a chit
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      } else if (e.key === '[' || (e.altKey && e.key === 'ArrowLeft')) {
        if (hasPrev && onPrev) onPrev();
      } else if (e.key === ']' || (e.altKey && e.key === 'ArrowRight')) {
        if (hasNext && onNext) onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack, onPrev, onNext, hasPrev, hasNext, program.id]);

  const paddedChit = program.chitNumber < 10 ? `Chit 0${program.chitNumber}` : `Chit ${program.chitNumber}`;

  return (
    <div className="detail-view">
      <nav className="detail-nav-bar" aria-label="Program navigation">
        <button
          type="button"
          className="back-btn"
          onClick={onBack}
          title="Return to questions list (Esc)"
          aria-label="Back to all questions"
        >
          <ArrowLeft size={16} />
          <span>Back to list</span>
        </button>

        <div className="prev-next-group">
          <button
            type="button"
            className="nav-arrow-btn"
            onClick={onPrev}
            disabled={!hasPrev}
            title="Previous question (Hotkey: [ )"
            aria-label="Previous question"
          >
            <ChevronLeft size={16} />
            <span>Prev Chit</span>
          </button>

          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', padding: '0 0.25rem' }}>
            {program.chitNumber} / {totalPrograms}
          </span>

          <button
            type="button"
            className="nav-arrow-btn"
            onClick={onNext}
            disabled={!hasNext}
            title="Next question (Hotkey: ] )"
            aria-label="Next question"
          >
            <span>Next Chit</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      <header className="detail-header">
        <div className="detail-tags">
          <span className="chit-badge">{paddedChit}</span>
          <span className="category-tag">{program.category}</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            SPPU 2024 Pattern DSA Practical
          </span>
        </div>

        <h1 className="detail-title">{program.title}</h1>

        {program.note && (
          <div className="detail-note-callout">
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>{program.note}</div>
          </div>
        )}
      </header>

      <section aria-label="C++ Source Code">
        <CodeBlock code={program.code} filename={program.filename} />
      </section>

      <div className="detail-extra-grid">
        <section className="info-box" aria-label="Sample Result">
          <div className="info-box-header">
            <Terminal size={15} color="#10B981" />
            <span>Sample Result</span>
          </div>
          <div className="info-box-content">
            <pre className="output-code">{program.sampleResult}</pre>
          </div>
        </section>

        <section className="info-box" aria-label="Viva and Concept Notes">
          <div className="info-box-header viva">
            <Sparkles size={15} color="#8B5CF6" />
            <span>Viva / Concept Reminder</span>
          </div>
          <div className="info-box-content">
            <p style={{ fontWeight: 500 }}>{program.vivaNote}</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Check edge cases independently (e.g. empty list/data, single element, boundaries, overflow/underflow).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
