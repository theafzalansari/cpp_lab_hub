import React, { useState, useEffect, useMemo } from 'react';
import type { PracticalProgram, Category } from './types';
import { PRACTICAL_PROGRAMS } from './data/programs';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ProgramCard } from './components/ProgramCard';
import { ProgramDetail } from './components/ProgramDetail';
import { Code, BookOpen, Layers, Sparkles, AlertCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedChitNumber, setSelectedChitNumber] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle URL hash routing (e.g. #chit-1) and browser history back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#chit-(\d+)$/i);
      if (match) {
        const chitNum = parseInt(match[1], 10);
        if (chitNum >= 1 && chitNum <= 24) {
          setSelectedChitNumber(chitNum);
          return;
        }
      }
      setSelectedChitNumber(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProgram = (program: PracticalProgram) => {
    setSelectedChitNumber(program.chitNumber);
    window.location.hash = `#chit-${program.chitNumber}`;
  };

  const handleBackToList = () => {
    setSelectedChitNumber(null);
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const selectedProgram = useMemo(() => {
    if (selectedChitNumber === null) return null;
    return PRACTICAL_PROGRAMS.find((p) => p.chitNumber === selectedChitNumber) || null;
  }, [selectedChitNumber]);

  // Navigate to previous/next chit in sequence 1..24
  const handlePrevChit = () => {
    if (selectedChitNumber && selectedChitNumber > 1) {
      const prevNum = selectedChitNumber - 1;
      setSelectedChitNumber(prevNum);
      window.location.hash = `#chit-${prevNum}`;
    }
  };

  const handleNextChit = () => {
    if (selectedChitNumber && selectedChitNumber < PRACTICAL_PROGRAMS.length) {
      const nextNum = selectedChitNumber + 1;
      setSelectedChitNumber(nextNum);
      window.location.hash = `#chit-${nextNum}`;
    }
  };

  // Filter programs based on category & search query
  const filteredPrograms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRACTICAL_PROGRAMS.filter((program) => {
      // Category check
      if (selectedCategory !== 'All' && program.category !== selectedCategory) {
        return false;
      }

      // If no query, include all in category
      if (!query) return true;

      // Check Chit number matching (e.g., "1", "01", "chit 1", "#1")
      const chitStr = program.chitNumber.toString();
      const paddedChitStr = program.chitNumber < 10 ? `0${program.chitNumber}` : chitStr;
      if (
        query === chitStr ||
        query === paddedChitStr ||
        query === `chit ${chitStr}` ||
        query === `chit ${paddedChitStr}` ||
        query === `#${chitStr}` ||
        query === `#${paddedChitStr}`
      ) {
        return true;
      }

      // Check title match
      if (program.title.toLowerCase().includes(query)) {
        return true;
      }

      // Check category match
      if (program.category.toLowerCase().includes(query)) {
        return true;
      }

      // Check code content match
      if (program.code.toLowerCase().includes(query)) {
        return true;
      }

      // Check viva notes match
      if (program.vivaNote.toLowerCase().includes(query)) {
        return true;
      }

      return false;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="app-layout">
      <Navbar onHomeClick={handleBackToList} totalCount={PRACTICAL_PROGRAMS.length} />

      <main className="main-content">
        {selectedProgram ? (
          <ProgramDetail
            program={selectedProgram}
            onBack={handleBackToList}
            onPrev={handlePrevChit}
            onNext={handleNextChit}
            hasPrev={selectedProgram.chitNumber > 1}
            hasNext={selectedProgram.chitNumber < PRACTICAL_PROGRAMS.length}
            totalPrograms={PRACTICAL_PROGRAMS.length}
          />
        ) : (
          <>
            <section className="hero-section">
              <div className="hero-header">
                <h1 className="hero-title">DSA Practical Exam Vault</h1>
                <p className="hero-desc">
                  Complete preparation repository for SPPU 2024 Pattern Data Structures and Algorithms practical exam.
                  Includes standalone C++ code, inline comments, sample outputs, and essential viva notes for all 24 chits.
                </p>
                <div className="stats-row">
                  <div className="stat-chip">
                    <Code size={14} color="#8B5CF6" />
                    <span><strong>24</strong> Standalone Programs</span>
                  </div>
                  <div className="stat-chip">
                    <Layers size={14} color="#8B5CF6" />
                    <span><strong>7</strong> Core Topics</span>
                  </div>
                  <div className="stat-chip">
                    <BookOpen size={14} color="#8B5CF6" />
                    <span><strong>SPPU 2024</strong> Pattern Compliant</span>
                  </div>
                  <div className="stat-chip">
                    <Sparkles size={14} color="#8B5CF6" />
                    <span><strong>100%</strong> Offline Ready</span>
                  </div>
                </div>
              </div>
            </section>

            <SearchBar query={searchQuery} onChange={setSearchQuery} />

            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              programs={PRACTICAL_PROGRAMS}
            />

            {(searchQuery || selectedCategory !== 'All') && (
              <div className="filter-summary">
                <span>
                  Showing {filteredPrograms.length} of {PRACTICAL_PROGRAMS.length} programs
                  {selectedCategory !== 'All' ? ` in "${selectedCategory}"` : ''}
                  {searchQuery ? ` matching "${searchQuery}"` : ''}
                </span>
                <button
                  type="button"
                  className="reset-filter-btn"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {filteredPrograms.length > 0 ? (
              <section className="cards-grid" aria-label="DSA Practical Programs List">
                {filteredPrograms.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    onSelect={handleSelectProgram}
                  />
                ))}
              </section>
            ) : (
              <div className="empty-state">
                <AlertCircle className="empty-icon" size={40} />
                <h2 className="empty-title">No matching programs found</h2>
                <p className="empty-desc">
                  Try searching with a chit number (e.g., 5 or Chit 05), a concept (like "bubble sort" or "queue"), or clear your filters.
                </p>
                <button
                  type="button"
                  className="action-btn"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset Search & Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <strong className="footer-highlight">DSA Vault</strong> • SPPU 2024 Pattern Practical Chits 1–24
          </div>
          <div>
            Practise typing & compiling independently. Check edge cases: empty list, single node, invalid positions, overflow & underflow.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
