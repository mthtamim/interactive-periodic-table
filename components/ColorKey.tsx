import React from 'react';
import { ElementCategory } from '../types';
import { CATEGORY_NAMES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface ColorKeyProps {
    paletteColors: Record<ElementCategory, string>;
}

const ColorKey: React.FC<ColorKeyProps> = ({ paletteColors }) => {
    const { t } = useLanguage();

    return (
        <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800/50 rounded-lg shadow-inner">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                {Object.entries(CATEGORY_NAMES).map(([categoryKey, categoryName]) => {
                    const typedCategoryKey = categoryKey as ElementCategory;
                    // Extract only the background color class for the swatch.
                    const colorClass = paletteColors[typedCategoryKey].split(' ').find(c => c.startsWith('bg-')) || 'bg-gray-200';
                    
                    return (
                        <div key={typedCategoryKey} className="flex items-center gap-2 text-xs sm:text-sm">
                            <span className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm block border border-black/10 ${colorClass}`}></span>
                            <span className="text-gray-700 dark:text-gray-300">{t(`category_${typedCategoryKey}`)}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorKey;