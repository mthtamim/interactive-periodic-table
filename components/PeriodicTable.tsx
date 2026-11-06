
import React from 'react';
import { PeriodicElement, ElementCategory } from '../types';
import ElementTile from './ElementTile';
import { useLanguage } from '../context/LanguageContext';

interface PeriodicTableProps {
    elements: PeriodicElement[];
    onSelectElement: (element: PeriodicElement) => void;
    selectedElement: PeriodicElement | null;
    activeCategory: ElementCategory | null;
    activeBlock: string | null;
    paletteColors: Record<ElementCategory, string>;
    onElementHover: (element: PeriodicElement, event: React.MouseEvent) => void;
    onElementLeave: () => void;
}

const PlaceholderTile: React.FC<{ gridColumn: number; gridRow: number; range: string; name: string }> = ({ gridColumn, gridRow, name, range }) => (
    <div 
        className="p-1 flex flex-col items-center justify-center text-center bg-gray-200/80 dark:bg-gray-700/50 rounded-md text-xs text-gray-600 dark:text-gray-300"
        style={{ gridColumn, gridRow }}
    >
        <div className="font-bold">{range}</div>
        <div>{name}</div>
    </div>
);

const PeriodicTable: React.FC<PeriodicTableProps> = ({ elements, onSelectElement, selectedElement, activeCategory, activeBlock, paletteColors, onElementHover, onElementLeave }) => {
    const { t } = useLanguage();
    return (
        <div>
            <div 
                className="grid gap-1 mx-auto"
                style={{
                    gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
                    gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
                    maxWidth: '1200px',
                }}
            >
                {elements.map(element => (
                    <ElementTile 
                        key={element.number} 
                        element={element} 
                        onSelect={onSelectElement}
                        isSelected={selectedElement?.number === element.number}
                        activeCategory={activeCategory}
                        activeBlock={activeBlock}
                        paletteColors={paletteColors}
                        onHover={onElementHover}
                        onLeave={onElementLeave}
                    />
                ))}
                <PlaceholderTile gridColumn={3} gridRow={6} range="57-71" name={t('lanthanides')} />
                <PlaceholderTile gridColumn={3} gridRow={7} range="89-103" name={t('actinides')} />
            </div>
        </div>
    );
};

export default PeriodicTable;
