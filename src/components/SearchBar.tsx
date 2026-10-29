import React, { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus on '/' if not typing in an input/textarea
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} />
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search by chit #, title, function, or C++ snippet... (Press / to focus)"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search practical programs"
        />
        {query ? (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            title="Clear search"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        ) : (
          <kbd className="search-kbd">/</kbd>
        )}
      </div>
    </div>
  );
};
