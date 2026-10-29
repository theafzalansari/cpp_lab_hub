import React from 'react';
import type { Category, PracticalProgram } from '../types';
import { CATEGORIES } from '../data/programs';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  programs: PracticalProgram[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  programs
}) => {
  const getCategoryCount = (cat: Category): number => {
    if (cat === 'All') return programs.length;
    return programs.filter((p) => p.category === cat).length;
  };

  return (
    <div className="category-filter-container" role="tablist" aria-label="Filter by program category">
      {CATEGORIES.map((cat) => {
        const count = getCategoryCount(cat);
        const isActive = selectedCategory === cat;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            className={`category-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            <span>{cat}</span>
            <span className="category-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
};
