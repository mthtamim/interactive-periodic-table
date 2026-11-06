
import React from 'react';
import { PeriodicElement, ElementCategory } from '../types';

interface ElementTileProps {
    element: PeriodicElement;
    onSelect: (element: PeriodicElement) => void;
    isSelected: boolean;
    activeCategory: ElementCategory | null;
    activeBlock: string | null;
    paletteColors: Record<ElementCategory, string>;
    onHover: (element: PeriodicElement, event: React.MouseEvent) => void;
    onLeave: () => void;
}

const ElementTile: React.FC<ElementTileProps> = ({ element, onSelect, isSelected, activeCategory, activeBlock, paletteColors, onHover, onLeave }) => {
    // Explicit filtering logic:
    // 1. If activeCategory is set, element.category must match it.
    // 2. If activeBlock is set, element.block must match it.
    // 3. If either condition fails, the element is filtered out.
    const matchesCategory = !activeCategory || element.category === activeCategory;
    const matchesBlock = !activeBlock || element.block === activeBlock;
    const isFilteredOut = !matchesCategory || !matchesBlock;

    const colorClass = paletteColors[element.category];
    const borderClass = isSelected ? 'border-4 border-cyan-400' : 'border-2 border-transparent';

    return (
        <div
            onClick={() => !isFilteredOut && onSelect(element)}
            onMouseEnter={(e) => !isFilteredOut && onHover(element, e)}
            onMouseLeave={() => !isFilteredOut && onLeave()}
            className={`p-1 text-center transition-all duration-300 relative ${colorClass} rounded-md shadow-md ${borderClass} ${isFilteredOut ? 'opacity-10 grayscale pointer-events-none' : 'cursor-pointer transform hover:scale-110 hover:z-10'}`}
            style={{ 
                gridColumn: element.xpos, 
                gridRow: element.ypos,
                minHeight: '60px'
            }}
            aria-hidden={isFilteredOut}
            aria-label={element.name}
        >
            <div className="text-xs text-left text-black/70 font-bold">{element.number}</div>
            <div className="text-lg sm:text-xl font-bold text-black">{element.symbol}</div>
            <div className="text-xs truncate text-black/80">{element.name}</div>
        </div>
    );
};

export default ElementTile;
