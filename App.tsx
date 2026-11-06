
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { PeriodicElement, ElementCategory, PaletteName } from './types';
import PeriodicTable from './components/PeriodicTable';
import ElementDetail from './components/ElementDetail';
import Chatbot from './components/Chatbot';
import SearchBar from './components/SearchBar';
import ComparisonView from './components/ComparisonView';
import ColorKey from './components/ColorKey';
import Tooltip from './components/Tooltip';
import { PALETTES } from './constants';
import { useLanguage } from './context/LanguageContext';

const COMPARISON_STORAGE_KEY = 'periodicTableComparisonList';
const THEME_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

// Custom hook for managing state with undo/redo capabilities.
// This encapsulates the history logic, making the main component cleaner.
const useHistoryState = <T,>(initialState: T) => {
    const [history, setHistory] = useState<T[]>([initialState]);
    const [index, setIndex] = useState(0);

    const setState = useCallback((newState: T) => {
        // Prevent adding duplicate consecutive states to the history
        if (newState === history[index]) {
            return;
        }
        // If we are "back in time" and set a new state,
        // the future history is cleared.
        const newHistory = history.slice(0, index + 1);
        setHistory([...newHistory, newState]);
        setIndex(newHistory.length);
    }, [history, index]);

    const undo = useCallback(() => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }, [index]);

    const redo = useCallback(() => {
        if (index < history.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
        }
    }, [index, history.length]);

    return {
        state: history[index],
        setState,
        undo,
        redo,
        canUndo: index > 0,
        canRedo: index < history.length - 1,
    };
};


const CategoryFilter: React.FC<{
    activeCategory: ElementCategory | null;
    onCategoryFilter: (category: ElementCategory | null) => void;
    paletteColors: Record<ElementCategory, string>;
}> = ({ activeCategory, onCategoryFilter, paletteColors }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();
    const categories = Object.keys(paletteColors) as ElementCategory[];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (category: ElementCategory | null) => {
        onCategoryFilter(category);
        setIsOpen(false);
    };

    const currentFilterName = activeCategory ? t(`category_${activeCategory}`) : t('allGroups');

    return (
         <div className="flex items-center gap-3">
            <label id="filter-label" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('filterGroup')}</label>
            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-between items-center w-48 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-cyan-500"
                    id="options-menu" aria-haspopup="true" aria-expanded={isOpen}
                >
                    <span className="truncate">{currentFilterName}</span>
                    <svg className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none z-20 max-h-60 overflow-y-auto">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <button onClick={() => handleSelect(null)} className={`w-full text-left block px-4 py-2 text-sm ${!activeCategory ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`} role="menuitem">
                                {t('allGroups')}
                            </button>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => handleSelect(category)}
                                    className={`w-full text-left block px-4 py-2 text-sm ${activeCategory === category ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                                    role="menuitem"
                                >
                                    <div className="flex items-center">
                                        <span className={`h-2.5 w-2.5 rounded-full mr-3 ${paletteColors[category].split(' ').find(c => c.startsWith('bg-'))}`}></span>
                                        <span>{t(`category_${category}`)}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const BlockFilter: React.FC<{
    activeBlock: string | null;
    onBlockFilter: (block: string | null) => void;
}> = ({ activeBlock, onBlockFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();
    const blocks = ['s', 'p', 'd', 'f'];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (block: string | null) => {
        onBlockFilter(block);
        setIsOpen(false);
    };

    const currentFilterName = activeBlock ? t(`block_${activeBlock}`) : t('allBlocks');

    return (
         <div className="flex items-center gap-3">
            <label id="block-filter-label" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('filterBlock')}</label>
            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-between items-center w-32 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-cyan-500"
                    aria-haspopup="true" aria-expanded={isOpen}
                >
                    <span className="truncate">{currentFilterName}</span>
                    <svg className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="origin-top-left absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none z-20">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            <button onClick={() => handleSelect(null)} className={`w-full text-left block px-4 py-2 text-sm ${!activeBlock ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`} role="menuitem">
                                {t('allBlocks')}
                            </button>
                            {blocks.map(block => (
                                <button
                                    key={block}
                                    onClick={() => handleSelect(block)}
                                    className={`w-full text-left block px-4 py-2 text-sm ${activeBlock === block ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                                    role="menuitem"
                                >
                                    {t(`block_${block}`)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export const App: React.FC = () => {
    const { language, setLanguage, elements, t } = useLanguage();
    
    const {
      state: selectedElementNumber,
      setState: setSelectedElementNumber,
      undo,
      redo,
      canUndo,
      canRedo
    } = useHistoryState<number | null>(null);

    const selectedElement = useMemo(() => {
        if (selectedElementNumber === null) return null;
        return elements.find(e => e.number === selectedElementNumber) || null;
    }, [selectedElementNumber, elements]);

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [comparisonList, setComparisonList] = useState<PeriodicElement[]>([]);
    const [activeCategory, setActiveCategory] = useState<ElementCategory | null>(null);
    const [activeBlock, setActiveBlock] = useState<string | null>(null);
    const [notification, setNotification] = useState('');
    const [canLoad, setCanLoad] = useState(false);
    const [activePalette, setActivePalette] = useState<PaletteName>('Classic');
    const [tooltipData, setTooltipData] = useState<{ element: PeriodicElement; x: number; y: number } | null>(null);
    
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
        if (savedTheme) return savedTheme;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    });

    const currentPalette = PALETTES[activePalette];

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);
    
    useEffect(() => {
        const savedComparison = localStorage.getItem(COMPARISON_STORAGE_KEY);
        if (savedComparison) {
            setCanLoad(true);
        }
    }, []);
    
    useEffect(() => {
        // When language changes, update element objects in state to their new translated versions.
        // History is handled automatically by the useMemo for selectedElement.
        setComparisonList(prevList =>
            prevList.map(compEl => elements.find(e => e.number === compEl.number) || compEl)
        );
    }, [elements]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const showNotification = (message: string) => {
        setNotification(message);
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };
    
    const handleElementHover = useCallback((element: PeriodicElement, event: React.MouseEvent) => {
        setTooltipData({
            element,
            x: event.clientX,
            y: event.clientY,
        });
    }, []);

    const handleElementLeave = useCallback(() => {
        setTooltipData(null);
    }, []);

    const handleSelectElement = useCallback((element: PeriodicElement) => {
        // The useHistoryState hook handles the logic of not adding duplicates
        // and clearing the "redo" history.
        setSelectedElementNumber(element.number);
    }, [setSelectedElementNumber]);
    
    const handleToggleCompare = useCallback((element: PeriodicElement) => {
        setComparisonList(prev => {
            const isInCompare = prev.some(e => e.number === element.number);
            if (isInCompare) {
                return prev.filter(e => e.number !== element.number);
            }
            if (prev.length < 2) {
                return [...prev, element];
            }
            return prev;
        });
    }, []);

    const handleCategoryFilter = useCallback((category: ElementCategory | null) => {
        setActiveCategory(category);
    }, []);

    const handleBlockFilter = useCallback((block: string | null) => {
        setActiveBlock(block);
    }, []);
    
    const handleSaveComparison = useCallback(() => {
        if (comparisonList.length > 0) {
            localStorage.setItem(COMPARISON_STORAGE_KEY, JSON.stringify(comparisonList.map(e => ({ number: e.number, name: e.name }))));
            setCanLoad(true);
            showNotification(t('notificationSaved'));
        }
    }, [comparisonList, t]);

    const handleLoadComparison = useCallback(() => {
        const savedComparison = localStorage.getItem(COMPARISON_STORAGE_KEY);
        if (savedComparison) {
            try {
                const parsedList = JSON.parse(savedComparison) as { number: number }[];
                if (Array.isArray(parsedList) && parsedList.every(item => typeof item === 'object' && 'number' in item)) {
                    const loadedElements = parsedList
                        .map(item => elements.find(el => el.number === item.number))
                        .filter((el): el is PeriodicElement => el !== undefined);
                    setComparisonList(loadedElements);
                    showNotification(t('notificationLoaded'));
                } else {
                     showNotification(t('notificationInvalidData'));
                     localStorage.removeItem(COMPARISON_STORAGE_KEY);
                     setCanLoad(false);
                }
            } catch (e) {
                showNotification(t('notificationLoadError'));
                localStorage.removeItem(COMPARISON_STORAGE_KEY);
                setCanLoad(false);
            }
        }
    }, [t, elements]);
    
    const LanguageSwitcher: React.FC = () => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const handleSelect = (lang: string) => {
            setLanguage(lang);
            setIsOpen(false);
        };

        const languages = {
            en: 'English',
            bn: 'বাংলা (Bengali)',
        };

        return (
            <div className="flex items-center gap-3">
                <label id="language-label" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('language')}</label>
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex justify-between items-center w-40 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-cyan-500"
                        aria-haspopup="true" aria-expanded={isOpen}
                    >
                        <span className="truncate">{languages[language as keyof typeof languages]}</span>
                         <svg className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="origin-top-left absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none z-20">
                            <div className="py-1" role="menu" aria-orientation="vertical">
                                {Object.entries(languages).map(([code, name]) => (
                                    <button
                                        key={code}
                                        onClick={() => handleSelect(code)}
                                        className={`w-full text-left block px-4 py-2 text-sm ${language === code ? 'font-semibold bg-gray-100 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                                        role="menuitem"
                                    >
                                        {name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const isInCompare = useMemo(() => {
        if (!selectedElement) return false;
        return comparisonList.some(e => e.number === selectedElement.number);
    }, [selectedElement, comparisonList]);

    const isCompareDisabled = useMemo(() => {
        if (!selectedElement) return true;
        return !isInCompare && comparisonList.length >= 2;
    }, [selectedElement, isInCompare, comparisonList]);


    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans p-4 sm:p-6 lg:p-8 transition-colors duration-300">
             {notification && (
                <div className="fixed top-5 right-5 bg-cyan-600 text-white py-2 px-4 rounded-md shadow-lg z-50 animate-pulse">
                    {notification}
                </div>
            )}
            <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-cyan-500 dark:text-cyan-400 tracking-wider">{t('headerTitle')}</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{t('headerDescription')}</p>
            </header>

            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                <CategoryFilter
                    activeCategory={activeCategory}
                    onCategoryFilter={handleCategoryFilter}
                    paletteColors={currentPalette.colors}
                />
                <BlockFilter
                    activeBlock={activeBlock}
                    onBlockFilter={handleBlockFilter}
                />
                <div className="flex items-center gap-3">
                    <label id="palette-label" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('colorPalette')}</label>
                    <div role="group" aria-labelledby="palette-label" className="flex items-center gap-1 p-1 bg-gray-200 dark:bg-gray-900 rounded-lg">
                        {(Object.keys(PALETTES) as PaletteName[]).map(name => (
                            <button 
                                key={name}
                                onClick={() => setActivePalette(name)}
                                className={`px-3 py-1 text-xs rounded-md transition-colors font-semibold ${
                                    activePalette === name 
                                    ? 'bg-white dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 shadow' 
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-gray-700/60'
                                }`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <div className="flex items-center gap-2">
                        <label htmlFor="theme-toggle" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('theme')}</label>
                        <button id="theme-toggle" onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle dark mode">
                            {theme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <SearchBar onElementSelect={handleSelectElement} elements={elements} />

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ColorKey paletteColors={currentPalette.colors} />
                    <PeriodicTable
                        elements={elements}
                        onSelectElement={handleSelectElement}
                        selectedElement={selectedElement}
                        activeCategory={activeCategory}
                        activeBlock={activeBlock}
                        paletteColors={currentPalette.colors}
                        onElementHover={handleElementHover}
                        onElementLeave={handleElementLeave}
                    />
                </div>
                <aside className="lg:col-span-1 space-y-8">
                    <ElementDetail 
                        element={selectedElement} 
                        elements={elements}
                        onSelectElement={handleSelectElement}
                        paletteColors={currentPalette.colors}
                        paletteSvgColors={currentPalette.svgColors}
                    />
                    {comparisonList.length > 0 && (
                        <div>
                            <ComparisonView 
                                elements={comparisonList} 
                                onRemove={handleToggleCompare} 
                                paletteColors={currentPalette.colors}
                            />
                            <div className="flex gap-2 mt-4">
                                <button onClick={handleSaveComparison} className="flex-1 py-2 px-4 rounded-md bg-green-600 hover:bg-green-700 transition-colors font-semibold text-white">{t('saveComparison')}</button>
                                {canLoad && <button onClick={handleLoadComparison} className="flex-1 py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-white">{t('loadComparison')}</button>}
                            </div>
                        </div>
                    )}
                </aside>
            </main>
            
            <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-40">
                <button
                    onClick={undo}
                    disabled={!canUndo}
                    className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    aria-label={t('undoLabel')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </button>
                <button
                    onClick={redo}
                    disabled={!canRedo}
                    className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    aria-label={t('redoLabel')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                    </svg>
                </button>
            </div>

            {selectedElement && (
                <button
                    onClick={() => handleToggleCompare(selectedElement)}
                    disabled={isCompareDisabled}
                    className={`fixed bottom-24 right-8 w-12 h-12 rounded-full text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 z-40
                        ${isInCompare 
                            ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                        }
                        disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none`}
                    aria-label={isInCompare ? t('removeFromCompare') : t('addToCompare')}
                >
                    {isInCompare ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    )}
                </button>
            )}

            <button
                onClick={() => setIsChatOpen(true)}
                className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-indigo-500 z-40 animate-float"
                aria-label={t('openChatLabel')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
            </button>

            <Chatbot isVisible={isChatOpen} onClose={() => setIsChatOpen(false)} selectedElement={selectedElement} />
            <Tooltip data={tooltipData} />
        </div>
    );
};
