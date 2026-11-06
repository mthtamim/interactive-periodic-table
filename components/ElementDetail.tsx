
import React from 'react';
import { PeriodicElement } from '../types';
import QuantumModel from './QuantumModel';
import { ISOTOPE_DATA } from '../isotopes';
import { useLanguage } from '../context/LanguageContext';

interface ElementDetailProps {
    element: PeriodicElement | null;
    elements: PeriodicElement[];
    onSelectElement: (element: PeriodicElement) => void;
    paletteColors: Record<string, string>;
    paletteSvgColors: Record<string, string>;
}

const DetailRow: React.FC<{ label: string; value?: string | number | null | boolean }> = ({ label, value }) => {
    if (value === null || typeof value === 'undefined' || value === '' || (Array.isArray(value) && value.length === 0)) {
        return null;
    }
    
    let displayValue = value;
    if (typeof value === 'boolean') {
        displayValue = value ? 'Yes' : 'No';
    }

    return (
        <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">{label}</span>
            <span className="font-semibold text-right">{String(displayValue)}</span>
        </div>
    );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const childArray = React.Children.toArray(children).filter(child => child !== null);
    if (childArray.length === 0) {
        return null;
    }
    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{title}</h3>
            <div className="space-y-2 text-sm">
                {childArray}
            </div>
        </div>
    );
};

const ElementDetail: React.FC<ElementDetailProps> = ({ element, elements, onSelectElement, paletteColors, paletteSvgColors }) => {
    const { t } = useLanguage();
    
    if (!element) {
        return (
            <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 min-h-[400px] lg:min-h-0">
                <p className="text-gray-500 dark:text-gray-400 text-lg">{t('selectElementPrompt')}</p>
            </div>
        );
    }

    const colorClass = paletteColors[element.category];
    const categoryName = t(`category_${element.category}`);
    
    const similarElements = elements.filter(
        e => e.xpos === element.xpos && e.number !== element.number
    );

    const knownIsotopes = ISOTOPE_DATA[element.number];
    
    const radioactiveIsotopesWithDecay = knownIsotopes?.filter(
        iso => iso.half_life !== "Stable" && iso.daughter_nuclide
    );


    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-2xl relative transition-colors duration-300">
            <div className={`flex items-center justify-between p-4 rounded-t-lg ${colorClass}`}>
                <div className="text-5xl font-bold text-black">{element.symbol}</div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-black">{element.name}</div>
                    <div className="text-md text-black/80">{categoryName}</div>
                </div>
                <div className="text-3xl font-bold text-black/70">{element.number}</div>
            </div>
            
            <QuantumModel element={element} paletteSvgColors={paletteSvgColors} />
            
            <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{element.summary}</p>
            </div>

            <Section title={t('atomicProperties')}>
                <DetailRow label={t('atomicMass')} value={`${element.atomic_mass.toFixed(4)} u`} />
                <DetailRow label={t('electronShells')} value={element.shells.join(', ')} />
                <DetailRow label={t('electronConfiguration')} value={element.electron_configuration} />
                <DetailRow label={t('neutrons')} value={element.neutrons} />
                <DetailRow label={t('block')} value={element.block?.toUpperCase()} />
                <DetailRow label={t('electronegativity')} value={element.electronegativity_pauling} />
                <DetailRow label={t('ionizationEnergy')} value={element.ionization_energy} />
                <DetailRow label={t('atomicRadius')} value={element.atomic_radius ? `${element.atomic_radius} pm` : null} />
            </Section>

            <Section title={t('physicalProperties')}>
                <DetailRow label={t('phase')} value={element.phase} />
                <DetailRow label={t('density')} value={element.density ? `${element.density} g/cm³` : null} />
                <DetailRow label={t('crystalStructure')} value={element.crystal_structure} />
                <DetailRow label={t('meltingPoint')} value={element.melting_point} />
                <DetailRow label={t('boilingPoint')} value={element.boiling_point} />
                <DetailRow label={t('magneticOrdering')} value={element.magnetic_ordering} />
                <DetailRow label={t('molarVolume')} value={element.molar_volume ? `${element.molar_volume} cm³/mol` : null} />
            </Section>

            <Section title={t('thermalProperties')}>
                <DetailRow label={t('specificHeat')} value={element.specific_heat ? `${element.specific_heat} J/(g·K)` : null} />
                <DetailRow label={t('heatOfFusion')} value={element.heat_of_fusion ? `${element.heat_of_fusion} kJ/mol` : null} />
                <DetailRow label={t('heatOfVaporization')} value={element.heat_of_vaporization ? `${element.heat_of_vaporization} kJ/mol` : null} />
                <DetailRow label={t('thermalConductivity')} value={element.thermal_conductivity ? `${element.thermal_conductivity} W/(m·K)` : null} />
            </Section>

            <Section title={t('chemistryAndAbundance')}>
                <DetailRow label={t('allotropes')} value={element.allotropes?.join(', ')} />
                <DetailRow label={t('commonCompounds')} value={element.common_compounds?.join(', ')} />
                <DetailRow label={t('crustalAbundance')} value={element.abundance_crust} />
                <DetailRow label={t('solarSystemAbundance')} value={element.abundance_solar} />
            </Section>
            
            <Section title={t('knownIsotopes')}>
                {knownIsotopes && knownIsotopes.length > 0 ? (
                    <div className="overflow-x-auto -mx-2 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700/50">
                                <tr>
                                    <th scope="col" className="px-4 py-2">{t('massNumber')}</th>
                                    <th scope="col" className="px-4 py-2">{t('halfLife')}</th>
                                    <th scope="col" className="px-4 py-2">{t('decayModes')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {knownIsotopes.map(isotope => (
                                <tr key={isotope.mass_number} className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2 font-medium">{isotope.mass_number}</td>
                                    <td className="px-4 py-2">{isotope.half_life}</td>
                                    <td className="px-4 py-2">{isotope.decay_modes.join(', ') || 'N/A'}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{t('noIsotopeData')}</p>
                )}
            </Section>
            
             <Section title={t('radioactiveDecayChains')}>
                {radioactiveIsotopesWithDecay && radioactiveIsotopesWithDecay.length > 0 ? (
                    radioactiveIsotopesWithDecay.map(isotope => {
                        const daughterElement = elements.find(
                            e => e.symbol === isotope.daughter_nuclide!.symbol
                        );
                        if (!daughterElement) return null;

                        return (
                            <div key={isotope.mass_number} className="flex items-center justify-between py-1.5 text-sm border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                <div className="font-mono text-left">
                                    <sup>{isotope.mass_number}</sup>{element.symbol}
                                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({isotope.half_life})</span>
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                   <span className="mx-2 text-lg">→</span>
                                   <span className="text-xs mr-1">({isotope.decay_modes[0] || 'decay'})</span>
                                </div>
                                <button
                                    onClick={() => onSelectElement(daughterElement)}
                                    className="font-mono text-right text-cyan-600 dark:text-cyan-400 hover:underline"
                                    title={`View details for ${daughterElement.name}`}
                                >
                                    <sup>{isotope.daughter_nuclide!.mass_number}</sup>{isotope.daughter_nuclide!.symbol}
                                </button>
                            </div>
                        );
                    })
                ) : (
                    element.is_radioactive && <p className="text-gray-500 dark:text-gray-400 text-sm">{t('noDecayChainData')}</p>
                )}
            </Section>

            {element.history && (
                <Section title={t('history')}>
                    <div className="max-h-48 overflow-y-auto p-3 bg-gray-50 dark:bg-gray-900/50 rounded-md border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{element.history}</p>
                    </div>
                </Section>
            )}
            
            <Section title={t('discoveryInformation')}>
                <DetailRow label={t('discoveredBy')} value={element.discovered_by} />
                <DetailRow label={t('discoveryYear')} value={element.discovery_year} />
                <DetailRow label={t('namedBy')} value={element.named_by} />
                <DetailRow label={t('radioactive')} value={element.is_radioactive} />
                <DetailRow label={t('casNumber')} value={element.cas_number} />
            </Section>

             <Section title={t('similarElements')}>
                {similarElements.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {similarElements.map(similarEl => (
                            <button
                                key={similarEl.number}
                                onClick={() => onSelectElement(similarEl)}
                                className={`px-3 py-1 rounded-md text-xs font-semibold transition-transform transform hover:scale-105 ${paletteColors[similarEl.category]} text-black`}
                                title={`View details for ${similarEl.name}`}
                            >
                                {similarEl.name} ({similarEl.symbol})
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{t('noSimilarElements')}</p>
                )}
            </Section>
            
        </div>
    );
};

export default ElementDetail;