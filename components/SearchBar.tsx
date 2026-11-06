
import React, { useState, useEffect, useRef } from 'react';
import { PeriodicElement } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SearchBarProps {
  onElementSelect: (element: PeriodicElement) => void;
  elements: PeriodicElement[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onElementSelect, elements }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PeriodicElement[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const resultsListRef = useRef<HTMLUListElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // If the query is empty, clear results and don't search.
    if (query.trim() === '') {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    // Debounce mechanism: Wait for 300ms after the user stops typing to start filtering.
    // This prevents heavy filtering on every keystroke.
    const debounceTimer = setTimeout(() => {
      const filtered = elements.filter(
        (element) =>
          element.name.toLowerCase().includes(query.toLowerCase()) ||
          element.symbol.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10); // Limit to top 10 results for performance

      setResults(filtered);
      setActiveIndex(-1); // Reset active index on new results
      setIsLoading(false);
    }, 300); // Debounce delay

    // Cleanup function: This is crucial for debouncing. It clears the previous
    // timeout timer if the user types again within the 300ms window.
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [query, elements]);
  
  // Effect to handle clicks outside the search bar to close the results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Effect to scroll the active item into view
  useEffect(() => {
    if (activeIndex >= 0 && resultsListRef.current) {
        const activeItem = resultsListRef.current.children[activeIndex] as HTMLLIElement;
        if (activeItem) {
            activeItem.scrollIntoView({
                block: 'nearest',
            });
        }
    }
  }, [activeIndex]);

  const handleSelect = (element: PeriodicElement) => {
    onElementSelect(element);
    setQuery('');
    setResults([]);
    setIsFocused(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsFocused(false);
      return;
    }

    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        handleSelect(results[activeIndex]);
      }
    }
  };

  return (
    <div className="relative max-w-lg mx-auto mb-8" ref={searchContainerRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={t('searchPlaceholder')}
          className="w-full py-2 pl-4 pr-10 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
          aria-label="Search for an element"
          aria-autocomplete="list"
          aria-expanded={isFocused && (results.length > 0 || (!isLoading && query.trim() !== '' && results.length === 0))}
        />
         <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5">
            {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            )}
        </div>
      </div>

      {isFocused && results.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto" ref={resultsListRef} role="listbox">
          {results.map((element, index) => (
            <li
              key={element.number}
              onClick={() => handleSelect(element)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`px-4 py-2 cursor-pointer flex items-center gap-4 ${
                index === activeIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              role="option"
              aria-selected={index === activeIndex}
            >
              <span className="font-bold text-cyan-500 dark:text-cyan-400 w-8 text-center">{element.symbol}</span>
              <span>{element.name}</span>
              <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">#{element.number}</span>
            </li>
          ))}
        </ul>
      )}
      {isFocused && !isLoading && query.trim() !== '' && results.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 text-center text-gray-500 dark:text-gray-400">
          {t('noResultsFound')}
        </div>
      )}
    </div>
  );
};

export default SearchBar;