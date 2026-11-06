
import React from 'react';
import { PeriodicElement } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonViewProps {
  elements: PeriodicElement[];
  onRemove: (element: PeriodicElement) => void;
  paletteColors: Record<string, string>;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ elements, onRemove, paletteColors }) => {
  const { t } = useLanguage();

  const propertyGroups = {
    [t('atomicProperties')]: [
      { label: t('atomicMass'), key: "atomic_mass", format: (v: number) => `${v.toFixed(4)} u` },
      { label: t('electronShells'), key: "shells", format: (v: number[]) => v.join(', ') },
      { label: t('neutrons'), key: "neutrons" },
      { label: t('block'), key: "block", format: (v: string | null) => v ? v.toUpperCase() : 'N/A' },
      { label: t('electronegativity'), key: "electronegativity_pauling" },
      { label: t('ionizationEnergy'), key: "ionization_energy" },
      { label: t('atomicRadius'), key: "atomic_radius", format: (v: number) => `${v} pm` },
    ],
    [t('physicalProperties')]: [
      { label: t('phase'), key: "phase" },
      { label: t('density'), key: "density", format: (v: number) => `${v} g/cm³` },
      { label: t('meltingPoint'), key: "melting_point" },
      { label: t('boilingPoint'), key: "boiling_point" },
      { label: t('molarVolume'), key: "molar_volume", format: (v: number) => `${v} cm³/mol` },
    ],
    [t('thermalProperties')]: [
      { label: t('specificHeat'), key: "specific_heat", format: (v: number) => `${v} J/(g·K)` },
      { label: t('heatOfFusion'), key: "heat_of_fusion", format: (v: number) => `${v} kJ/mol` },
      { label: t('heatOfVaporization'), key: "heat_of_vaporization", format: (v: number) => `${v} kJ/mol` },
      { label: t('thermalConductivity'), key: "thermal_conductivity", format: (v: number) => `${v} W/(m·K)` },
    ],
    [t('discoveryInformation')]: [
      { label: t('discoveryYear'), key: "discovery_year" },
      { label: t('radioactive'), key: "is_radioactive", format: (v: boolean) => v ? 'Yes' : 'No' },
    ]
  };

  if (elements.length === 0) {
    return null;
  }

  const el1 = elements[0];
  const el2 = elements.length > 1 ? elements[1] : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-2xl transition-colors duration-300">
      <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4 text-center">{t('comparisonViewTitle')}</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        {([el1, el2] as (PeriodicElement | null)[]).map((el, index) => (
          <div key={el?.number || index} className={`p-2 rounded-md ${el ? paletteColors[el.category] : 'bg-gray-200 dark:bg-gray-700'}`}>
            {el ? (
                <div className="flex justify-between items-center text-black">
                    <div className="font-bold">{el.name} ({el.symbol})</div>
                    <button onClick={() => onRemove(el)} className="p-1 rounded-full hover:bg-black/20" aria-label={`Remove ${el.name} from comparison`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 font-semibold h-full flex items-center justify-center">{t('selectAnotherElement')}</div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {Object.entries(propertyGroups).map(([groupName, properties]) => (
            <div key={groupName}>
                <h3 className="text-md font-semibold text-cyan-500 dark:text-cyan-300 my-2">{groupName}</h3>
                <div className="text-xs space-y-1">
                    {properties.map(({ label, key, format }) => {
                        const val1 = el1?.[key as keyof PeriodicElement];
                        const val2 = el2?.[key as keyof PeriodicElement];
                        
                        const displayVal1 = val1 !== null && typeof val1 !== 'undefined' ? (format ? format(val1 as any) : String(val1)) : 'N/A';
                        const displayVal2 = val2 !== null && typeof val2 !== 'undefined' ? (format ? format(val2 as any) : String(val2)) : 'N/A';

                        return (
                            <div key={key} className="grid grid-cols-[1fr_auto] items-center gap-2 py-1 border-b border-gray-200 dark:border-gray-700/50">
                                <div className="text-gray-600 dark:text-gray-400 truncate">{label}</div>
                                <div className="grid grid-cols-2 gap-4 text-right font-mono w-48">
                                    <div className="truncate" title={displayVal1}>{displayVal1}</div>
                                    <div className="truncate" title={displayVal2}>{displayVal2}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;