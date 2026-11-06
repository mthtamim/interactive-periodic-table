import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { PeriodicElement } from '../types';
import { PERIODIC_TABLE_ELEMENTS as elementsEN } from '../constants';
import { PERIODIC_TABLE_ELEMENTS as elementsBN } from '../constants.bn';

const LANGUAGE_STORAGE_KEY = 'periodicTableLanguage';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, replacements?: { [key: string]: string }) => string;
  elements: PeriodicElement[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Function to merge translated fields into the base English data.
// This ensures that all properties are present, with translations overwriting where available.
const mergeElementData = (baseElements: PeriodicElement[], translatedElements: PeriodicElement[]): PeriodicElement[] => {
    const translatedMap = new Map(translatedElements.map(el => [el.number, el]));
    return baseElements.map(baseEl => {
        const translatedEl = translatedMap.get(baseEl.number);
        // If a translated version exists, merge its translated fields.
        // Fallback to the base version's fields if a translation is missing for a specific field.
        if (translatedEl) {
            return {
                ...baseEl,
                name: translatedEl.name || baseEl.name,
                summary: translatedEl.summary || baseEl.summary,
                history: translatedEl.history || baseEl.history,
            };
        }
        // Otherwise, return the base English element.
        return baseEl;
    });
};

const mergedBnElements = mergeElementData(elementsEN, elementsBN);

const fullElementData: { [key: string]: PeriodicElement[] } = {
    en: elementsEN,
    bn: mergedBnElements,
};


export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en';
  });
  
  const [translations, setTranslations] = useState<{ [key: string]: { [key: string]: string } } | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
        try {
            const [enResponse, bnResponse] = await Promise.all([
                fetch('./locales/en.json'),
                fetch('./locales/bn.json')
            ]);
            if (!enResponse.ok || !bnResponse.ok) {
                throw new Error('Failed to fetch translation files');
            }
            const enData = await enResponse.json();
            const bnData = await bnResponse.json();
            setTranslations({ en: enData, bn: bnData });
        } catch (error) {
            console.error("Failed to load translations:", error);
            // Fallback to empty to prevent crash.
            setTranslations({ en: {}, bn: {} });
        }
    };
    fetchTranslations();
  }, []);

  const setLanguage = (lang: string) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    setLanguageState(lang);
  };
  
  const t = (key: string, replacements?: { [key: string]: string }): string => {
    if (!translations) {
        return key; // Return key as fallback during loading
    }
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;
    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
        });
    }
    return translation;
  };

  const elements = fullElementData[language] || fullElementData['en'];
  
  if (!translations) {
      return null; // Don't render app until translations are loaded
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, elements }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
