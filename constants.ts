import { ElementCategory, PeriodicElement } from './types';

// FIX: Added missing CATEGORY_NAMES export to resolve import errors in other components.
export const CATEGORY_NAMES: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: 'Alkali Metal',
  [ElementCategory.AlkalineEarthMetal]: 'Alkaline Earth Metal',
  [ElementCategory.Lanthanide]: 'Lanthanide',
  [ElementCategory.Actinide]: 'Actinide',
  [ElementCategory.TransitionMetal]: 'Transition Metal',
  [ElementCategory.PostTransitionMetal]: 'Post-Transition Metal',
  [ElementCategory.Metalloid]: 'Metalloid',
  [ElementCategory.ReactiveNonmetal]: 'Reactive Nonmetal',
  [ElementCategory.NobleGas]: 'Noble Gas',
  [ElementCategory.Unknown]: 'Unknown Properties',
};

// Palette: Classic (Original)
const CLASSIC_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: 'bg-red-400 hover:bg-red-300 text-black',
  [ElementCategory.AlkalineEarthMetal]: 'bg-orange-400 hover:bg-orange-300 text-black',
  [ElementCategory.Lanthanide]: 'bg-purple-300 hover:bg-purple-200 text-black',
  [ElementCategory.Actinide]: 'bg-purple-400 hover:bg-purple-300 text-black',
  [ElementCategory.TransitionMetal]: 'bg-yellow-400 hover:bg-yellow-300 text-black',
  [ElementCategory.PostTransitionMetal]: 'bg-green-400 hover:bg-green-300 text-black',
  [ElementCategory.Metalloid]: 'bg-teal-400 hover:bg-teal-300 text-black',
  [ElementCategory.ReactiveNonmetal]: 'bg-blue-400 hover:bg-blue-300 text-black',
  [ElementCategory.NobleGas]: 'bg-indigo-400 hover:bg-indigo-300 text-black',
  [ElementCategory.Unknown]: 'bg-gray-400 hover:bg-gray-300 text-black',
};

const CLASSIC_SVG_COLORS: Record<ElementCategory, string> = {
    [ElementCategory.AlkaliMetal]: '#f87171',
    [ElementCategory.AlkalineEarthMetal]: '#fb923c',
    [ElementCategory.Lanthanide]: '#c084fc',
    [ElementCategory.Actinide]: '#a78bfa',
    [ElementCategory.TransitionMetal]: '#facc15',
    [ElementCategory.PostTransitionMetal]: '#4ade80',
    [ElementCategory.Metalloid]: '#2dd4bf',
    [ElementCategory.ReactiveNonmetal]: '#60a5fa',
    [ElementCategory.NobleGas]: '#818cf8',
    [ElementCategory.Unknown]: '#a3a3a3',
};

// Palette: Vibrant
const VIBRANT_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: 'bg-rose-500 hover:bg-rose-400 text-white',
  [ElementCategory.AlkalineEarthMetal]: 'bg-amber-500 hover:bg-amber-400 text-white',
  [ElementCategory.Lanthanide]: 'bg-fuchsia-500 hover:bg-fuchsia-400 text-white',
  [ElementCategory.Actinide]: 'bg-purple-600 hover:bg-purple-500 text-white',
  [ElementCategory.TransitionMetal]: 'bg-lime-500 hover:bg-lime-400 text-white',
  [ElementCategory.PostTransitionMetal]: 'bg-sky-500 hover:bg-sky-400 text-white',
  [ElementCategory.Metalloid]: 'bg-teal-500 hover:bg-teal-400 text-white',
  [ElementCategory.ReactiveNonmetal]: 'bg-blue-600 hover:bg-blue-500 text-white',
  [ElementCategory.NobleGas]: 'bg-violet-500 hover:bg-violet-400 text-white',
  [ElementCategory.Unknown]: 'bg-slate-500 hover:bg-slate-400 text-white',
};
const VIBRANT_SVG_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: '#f43f5e',
  [ElementCategory.AlkalineEarthMetal]: '#f59e0b',
  [ElementCategory.Lanthanide]: '#d946ef',
  [ElementCategory.Actinide]: '#9333ea',
  [ElementCategory.TransitionMetal]: '#84cc16',
  [ElementCategory.PostTransitionMetal]: '#0ea5e9',
  [ElementCategory.Metalloid]: '#14b8a6',
  [ElementCategory.ReactiveNonmetal]: '#2563eb',
  [ElementCategory.NobleGas]: '#8b5cf6',
  [ElementCategory.Unknown]: '#64748b',
};

// Palette: Pastel
const PASTEL_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: 'bg-red-200 hover:bg-red-100 text-black',
  [ElementCategory.AlkalineEarthMetal]: 'bg-orange-200 hover:bg-orange-100 text-black',
  [ElementCategory.Lanthanide]: 'bg-violet-200 hover:bg-violet-100 text-black',
  [ElementCategory.Actinide]: 'bg-fuchsia-200 hover:bg-fuchsia-100 text-black',
  [ElementCategory.TransitionMetal]: 'bg-yellow-200 hover:bg-yellow-100 text-black',
  [ElementCategory.PostTransitionMetal]: 'bg-green-200 hover:bg-green-100 text-black',
  [ElementCategory.Metalloid]: 'bg-cyan-200 hover:bg-cyan-100 text-black',
  [ElementCategory.ReactiveNonmetal]: 'bg-sky-200 hover:bg-sky-100 text-black',
  [ElementCategory.NobleGas]: 'bg-indigo-200 hover:bg-indigo-100 text-black',
  [ElementCategory.Unknown]: 'bg-gray-300 hover:bg-gray-200 text-black',
};
const PASTEL_SVG_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: '#fecaca',
  [ElementCategory.AlkalineEarthMetal]: '#fed7aa',
  [ElementCategory.Lanthanide]: '#e9d5ff',
  [ElementCategory.Actinide]: '#f5d0fe',
  [ElementCategory.TransitionMetal]: '#fef08a',
  [ElementCategory.PostTransitionMetal]: '#bbf7d0',
  [ElementCategory.Metalloid]: '#a5f3fc',
  [ElementCategory.ReactiveNonmetal]: '#bae6fd',
  [ElementCategory.NobleGas]: '#c7d2fe',
  [ElementCategory.Unknown]: '#d1d5db',
};

// Palette: Monochrome
const MONOCHROME_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: 'bg-slate-300 hover:bg-slate-200 text-black',
  [ElementCategory.AlkalineEarthMetal]: 'bg-slate-400 hover:bg-slate-300 text-black',
  [ElementCategory.Lanthanide]: 'bg-zinc-300 hover:bg-zinc-200 text-black',
  [ElementCategory.Actinide]: 'bg-zinc-400 hover:bg-zinc-300 text-black',
  [ElementCategory.TransitionMetal]: 'bg-gray-500 hover:bg-gray-400 text-white',
  [ElementCategory.PostTransitionMetal]: 'bg-stone-500 hover:bg-stone-400 text-white',
  [ElementCategory.Metalloid]: 'bg-neutral-400 hover:bg-neutral-300 text-black',
  [ElementCategory.ReactiveNonmetal]: 'bg-slate-600 hover:bg-slate-500 text-white',
  [ElementCategory.NobleGas]: 'bg-gray-700 hover:bg-gray-600 text-white',
  [ElementCategory.Unknown]: 'bg-stone-800 hover:bg-stone-700 text-white',
};
const MONOCHROME_SVG_COLORS: Record<ElementCategory, string> = {
  [ElementCategory.AlkaliMetal]: '#cbd5e1',
  [ElementCategory.AlkalineEarthMetal]: '#94a3b8',
  [ElementCategory.Lanthanide]: '#d4d4d8',
  [ElementCategory.Actinide]: '#a1a1aa',
  [ElementCategory.TransitionMetal]: '#6b7280',
  [ElementCategory.PostTransitionMetal]: '#78716c',
  [ElementCategory.Metalloid]: '#a3a3a3',
  [ElementCategory.ReactiveNonmetal]: '#475569',
  [ElementCategory.NobleGas]: '#374151',
  [ElementCategory.Unknown]: '#292524',
};

export const PALETTES = {
  Classic: { colors: CLASSIC_COLORS, svgColors: CLASSIC_SVG_COLORS },
  Vibrant: { colors: VIBRANT_COLORS, svgColors: VIBRANT_SVG_COLORS },
  Pastel: { colors: PASTEL_COLORS, svgColors: PASTEL_SVG_COLORS },
  Monochrome: { colors: MONOCHROME_COLORS, svgColors: MONOCHROME_SVG_COLORS },
};

// FIX: Completed the periodic table data from element 38 onwards to fix syntax errors.
export const PERIODIC_TABLE_ELEMENTS: PeriodicElement[] = [
  {
    "number": 1, "symbol": "H", "name": "Hydrogen", "atomic_mass": 1.008, "category": ElementCategory.ReactiveNonmetal, "xpos": 1, "ypos": 1, "shells": [1],
    "electron_configuration": "1s¹", "summary": "Hydrogen is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    "discovered_by": "Henry Cavendish", "named_by": "Antoine Lavoisier", "phase": "Gas", "discovery_year": 1766, "density": 0.08988, "boiling_point": "20.271 K", "melting_point": "13.99 K", "block": "s",
    "electronegativity_pauling": 2.20, "ionization_energy": "1312.0 kJ/mol", "neutrons": 0, "atomic_radius": 37, "is_radioactive": false, "crystal_structure": "Hexagonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 0.117, "heat_of_vaporization": 0.904, "specific_heat": 14.304, "thermal_conductivity": 0.1815, "molar_volume": 11.42, "cas_number": "1333-74-0",
    "history": "Recognized as a distinct element by Henry Cavendish in 1766, who called it 'inflammable air'. It was later named Hydrogen by Antoine Lavoisier.", "common_compounds": ["Water (H₂O)", "Ammonia (NH₃)", "Methane (CH₄)"], "abundance_crust": "1400 ppm", "abundance_solar": "750,000,000 ppb (by number)", "allotropes": null
  },
  {
    "number": 2, "symbol": "He", "name": "Helium", "atomic_mass": 4.002602, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 1, "shells": [2],
    "electron_configuration": "1s²", "summary": "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements.",
    "discovered_by": "Pierre Janssen & Norman Lockyer", "named_by": null, "phase": "Gas", "discovery_year": 1868, "density": 0.1786, "boiling_point": "4.224 K", "melting_point": "0.95 K", "block": "s",
    "electronegativity_pauling": null, "ionization_energy": "2372.3 kJ/mol", "neutrons": 2, "atomic_radius": 31, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed / Body-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_vaporization": 0.0829, "thermal_conductivity": 0.152, "molar_volume": 31.8, "cas_number": "7440-59-7",
    "history": "Discovered in the sun's spectrum in 1868 by Pierre Janssen and Norman Lockyer, before it was found on Earth. It was first isolated from the mineral cleveite in 1895 by Sir William Ramsay.", "common_compounds": null, "abundance_crust": "0.008 ppm", "abundance_solar": "230,000,000 ppb (by number)", "allotropes": null
  },
  {
    "number": 3, "symbol": "Li", "name": "Lithium", "atomic_mass": 6.94, "category": ElementCategory.AlkaliMetal, "xpos": 1, "ypos": 2, "shells": [2, 1],
    "electron_configuration": "[He] 2s¹", "summary": "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the least dense solid element.",
    "discovered_by": "Johan August Arfwedson", "named_by": null, "phase": "Solid", "discovery_year": 1817, "density": 0.534, "boiling_point": "1615 K", "melting_point": "453.65 K", "block": "s",
    "electronegativity_pauling": 0.98, "ionization_energy": "520.2 kJ/mol", "neutrons": 4, "atomic_radius": 152, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 3.0, "heat_of_vaporization": 147.1, "specific_heat": 3.582, "thermal_conductivity": 84.8, "molar_volume": 13.1, "cas_number": "7439-93-2",
    "history": "Discovered by Johan August Arfwedson in 1817 in the mineral petalite. The metal itself was first isolated by William Thomas Brande and Sir Humphry Davy through the electrolysis of lithium oxide.", "common_compounds": ["Lithium chloride (LiCl)", "Lithium carbonate (Li₂CO₃)", "Lithium hydroxide (LiOH)"], "abundance_crust": "20 ppm", "abundance_solar": "60 ppb (by weight)", "allotropes": null
  },
  {
    "number": 4, "symbol": "Be", "name": "Beryllium", "atomic_mass": 9.0121831, "category": ElementCategory.AlkalineEarthMetal, "xpos": 2, "ypos": 2, "shells": [2, 2],
    "electron_configuration": "[He] 2s²", "summary": "Beryllium is a chemical element with symbol Be and atomic number 4. It is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays.",
    "discovered_by": "Louis Nicolas Vauquelin", "named_by": null, "phase": "Solid", "discovery_year": 1798, "density": 1.85, "boiling_point": "2742 K", "melting_point": "1560 K", "block": "s",
    "electronegativity_pauling": 1.57, "ionization_energy": "899.5 kJ/mol", "neutrons": 5, "atomic_radius": 112, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 7.895, "heat_of_vaporization": 297, "specific_heat": 1.825, "thermal_conductivity": 200, "molar_volume": 4.85, "cas_number": "7440-41-7",
    "history": "Recognized as a distinct substance by Louis-Nicolas Vauquelin in 1798 from beryl and emeralds. It was first isolated as a metal in 1828 by Friedrich Wöhler and Antoine Bussy independently.", "common_compounds": ["Beryllium oxide (BeO)", "Beryllium chloride (BeCl₂)", "Beryl (Be₃Al₂(SiO₃)₆)"], "abundance_crust": "2.8 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 5, "symbol": "B", "name": "Boron", "atomic_mass": 10.81, "category": ElementCategory.Metalloid, "xpos": 13, "ypos": 2, "shells": [2, 3],
    "electron_configuration": "[He] 2s² 2p¹", "summary": "Boron is a chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in the Solar system and in the Earth's crust.",
    "discovered_by": "Joseph Louis Gay-Lussac & Louis Jacques Thénard", "named_by": null, "phase": "Solid", "discovery_year": 1808, "density": 2.34, "boiling_point": "4200 K", "melting_point": "2349 K", "block": "p",
    "electronegativity_pauling": 2.04, "ionization_energy": "800.6 kJ/mol", "neutrons": 6, "atomic_radius": 85, "is_radioactive": false, "crystal_structure": "Rhombohedral", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 50.2, "heat_of_vaporization": 508, "specific_heat": 1.026, "thermal_conductivity": 27.4, "molar_volume": 4.6, "cas_number": "7440-42-8",
    "history": "Boron compounds were known for thousands of years, but the element was not isolated until 1808 by Sir Humphry Davy, Joseph Louis Gay-Lussac, and Louis Jacques Thénard.", "common_compounds": ["Boric acid (H₃BO₃)", "Borax (Na₂B₄O₇·10H₂O)", "Boron nitride (BN)"], "abundance_crust": "10 ppm", "abundance_solar": "2 ppb (by weight)", "allotropes": ["α-rhombohedral", "β-rhombohedral", "γ-orthorhombic", "T-rhombohedral"]
  },
  {
    "number": 6, "symbol": "C", "name": "Carbon", "atomic_mass": 12.011, "category": ElementCategory.ReactiveNonmetal, "xpos": 14, "ypos": 2, "shells": [2, 4],
    "electron_configuration": "[He] 2s² 2p²", "summary": "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 2.267, "melting_point": "3800 K", "boiling_point": "5100 K", "block": "p",
    "electronegativity_pauling": 2.55, "ionization_energy": "1086.5 kJ/mol", "neutrons": 6, "atomic_radius": 77, "is_radioactive": false, "crystal_structure": "Hexagonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 117, "heat_of_vaporization": 715, "specific_heat": 0.709, "thermal_conductivity": 140, "molar_volume": 5.29, "cas_number": "7440-44-0",
    "history": "Known since antiquity in the form of soot and charcoal. The diamond form was also known. Antoine Lavoisier proved it was an element in 1789.", "common_compounds": ["Carbon Dioxide (CO₂)", "Carbon Monoxide (CO)", "Calcium Carbonate (CaCO₃)"], "abundance_crust": "200 ppm", "abundance_solar": "3,500,000 ppb (by weight)", "allotropes": ["Diamond", "Graphite", "Graphene", "Fullerenes"]
  },
  {
    "number": 7, "symbol": "N", "name": "Nitrogen", "atomic_mass": 14.007, "category": ElementCategory.ReactiveNonmetal, "xpos": 15, "ypos": 2, "shells": [2, 5],
    "electron_configuration": "[He] 2s² 2p³", "summary": "Nitrogen is a chemical element with symbol N and atomic number 7. It was first discovered and isolated by Scottish physician Daniel Rutherford in 1772.",
    "discovered_by": "Daniel Rutherford", "named_by": "Jean-Antoine Chaptal", "phase": "Gas", "discovery_year": 1772, "density": 1.251, "boiling_point": "77.355 K", "melting_point": "63.15 K", "block": "p",
    "electronegativity_pauling": 3.04, "ionization_energy": "1402.3 kJ/mol", "neutrons": 7, "atomic_radius": 75, "is_radioactive": false, "crystal_structure": "Hexagonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 0.72, "heat_of_vaporization": 5.57, "specific_heat": 1.04, "thermal_conductivity": 0.02583, "molar_volume": 13.54, "cas_number": "7727-37-9",
    "history": "Discovered by Scottish physician Daniel Rutherford in 1772. He showed that air, after removing oxygen and carbon dioxide, contained a gas that did not support combustion or life.", "common_compounds": ["Ammonia (NH₃)", "Nitric acid (HNO₃)", "Nitrous oxide (N₂O)"], "abundance_crust": "19 ppm", "abundance_solar": "1,100,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 8, "symbol": "O", "name": "Oxygen", "atomic_mass": 15.999, "category": ElementCategory.ReactiveNonmetal, "xpos": 16, "ypos": 2, "shells": [2, 6],
    "electron_configuration": "[He] 2s² 2p⁴", "summary": "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds.",
    "discovered_by": "Carl Wilhelm Scheele & Joseph Priestley", "named_by": "Antoine Lavoisier", "phase": "Gas", "discovery_year": 1774, "density": 1.429, "boiling_point": "90.188 K", "melting_point": "54.36 K", "block": "p",
    "electronegativity_pauling": 3.44, "ionization_energy": "1313.9 kJ/mol", "neutrons": 8, "atomic_radius": 73, "is_radioactive": false, "crystal_structure": "Cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 0.444, "heat_of_vaporization": 6.82, "specific_heat": 0.918, "thermal_conductivity": 0.02658, "molar_volume": 14.0, "cas_number": "7782-44-7",
    "history": "Discovered independently by Carl Wilhelm Scheele and Joseph Priestley in the 1770s. Lavoisier later named it 'oxygen' meaning 'acid-former'.", "common_compounds": ["Water (H₂O)", "Silicon Dioxide (SiO₂)", "Carbon Dioxide (CO₂)"], "abundance_crust": "461,000 ppm (46.1%)", "abundance_solar": "9,600,000 ppb (by weight)", "allotropes": ["Diatomic oxygen (O₂)", "Ozone (O₃)"]
  },
  {
    "number": 9, "symbol": "F", "name": "Fluorine", "atomic_mass": 18.998403163, "category": ElementCategory.ReactiveNonmetal, "xpos": 17, "ypos": 2, "shells": [2, 7],
    "electron_configuration": "[He] 2s² 2p⁵", "summary": "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions.",
    "discovered_by": "Henri Moissan", "named_by": null, "phase": "Gas", "discovery_year": 1886, "density": 1.696, "boiling_point": "85.03 K", "melting_point": "53.48 K", "block": "p",
    "electronegativity_pauling": 3.98, "ionization_energy": "1681.0 kJ/mol", "neutrons": 10, "atomic_radius": 71, "is_radioactive": false, "crystal_structure": "Cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 0.51, "heat_of_vaporization": 6.62, "specific_heat": 0.824, "thermal_conductivity": 0.0279, "molar_volume": 11.2, "cas_number": "7782-41-4",
    "history": "Fluorine compounds were used for centuries, but the element itself was notoriously difficult and dangerous to isolate. It was finally isolated by Henri Moissan in 1886, a feat for which he won the Nobel Prize.", "common_compounds": ["Hydrogen fluoride (HF)", "Sodium fluoride (NaF)", "Sulfur hexafluoride (SF₆)"], "abundance_crust": "585 ppm", "abundance_solar": "400 ppb (by weight)", "allotropes": null
  },
  {
    "number": 10, "symbol": "Ne", "name": "Neon", "atomic_mass": 20.1797, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 2, "shells": [2, 8],
    "electron_configuration": "[He] 2s² 2p⁶", "summary": "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
    "discovered_by": "Morris Travers & William Ramsay", "named_by": null, "phase": "Gas", "discovery_year": 1898, "density": 0.9002, "boiling_point": "27.104 K", "melting_point": "24.56 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "2080.7 kJ/mol", "neutrons": 10, "atomic_radius": 71, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 0.335, "heat_of_vaporization": 1.71, "specific_heat": 1.03, "thermal_conductivity": 0.0491, "molar_volume": 16.8, "cas_number": "7440-01-9",
    "history": "Discovered by William Ramsay and Morris Travers in 1898 shortly after their discovery of krypton. It was found by liquefying air and separating the gases.", "common_compounds": null, "abundance_crust": "0.005 ppm", "abundance_solar": "1,200,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 11, "symbol": "Na", "name": "Sodium", "atomic_mass": 22.98976928, "category": ElementCategory.AlkaliMetal, "xpos": 1, "ypos": 3, "shells": [2, 8, 1],
    "electron_configuration": "[Ne] 3s¹", "summary": "Sodium is a chemical element with symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table.",
    "discovered_by": "Humphry Davy", "named_by": null, "phase": "Solid", "discovery_year": 1807, "density": 0.971, "boiling_point": "1156 K", "melting_point": "370.944 K", "block": "s",
    "electronegativity_pauling": 0.93, "ionization_energy": "495.8 kJ/mol", "neutrons": 12, "atomic_radius": 186, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 2.60, "heat_of_vaporization": 97.42, "specific_heat": 1.228, "thermal_conductivity": 142, "molar_volume": 23.7, "cas_number": "7440-23-5",
    "history": "Long recognized in compounds, sodium was first isolated by Humphry Davy in 1807 through the electrolysis of caustic soda (NaOH). Its symbol, Na, comes from its Latin name 'natrium'.", "common_compounds": ["Sodium chloride (NaCl)", "Sodium bicarbonate (NaHCO₃)", "Sodium hydroxide (NaOH)"], "abundance_crust": "23,600 ppm (2.36%)", "abundance_solar": "30,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 12, "symbol": "Mg", "name": "Magnesium", "atomic_mass": 24.305, "category": ElementCategory.AlkalineEarthMetal, "xpos": 2, "ypos": 3, "shells": [2, 8, 2],
    "electron_configuration": "[Ne] 3s²", "summary": "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (group 2, or alkaline earth metals) of the periodic table.",
    "discovered_by": "Joseph Black", "named_by": "Humphry Davy", "phase": "Solid", "discovery_year": 1755, "density": 1.738, "boiling_point": "1363 K", "melting_point": "923 K", "block": "s",
    "electronegativity_pauling": 1.31, "ionization_energy": "737.7 kJ/mol", "neutrons": 12, "atomic_radius": 160, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 8.48, "heat_of_vaporization": 128, "specific_heat": 1.023, "thermal_conductivity": 156, "molar_volume": 14.0, "cas_number": "7439-95-4",
    "history": "Recognized as an element by Joseph Black in 1755. The metal was first isolated by Sir Humphry Davy in 1808 by electrolysis of a mixture of magnesia and mercuric oxide.", "common_compounds": ["Magnesium oxide (MgO)", "Magnesium chloride (MgCl₂)", "Epsom salt (MgSO₄·7H₂O)"], "abundance_crust": "23,300 ppm (2.33%)", "abundance_solar": "700,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 13, "symbol": "Al", "name": "Aluminium", "atomic_mass": 26.9815385, "category": ElementCategory.PostTransitionMetal, "xpos": 13, "ypos": 3, "shells": [2, 8, 3],
    "electron_configuration": "[Ne] 3s² 3p¹", "summary": "Aluminium is a chemical element with symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group.",
    "discovered_by": "Hans Christian Ørsted", "named_by": null, "phase": "Solid", "discovery_year": 1825, "density": 2.7, "boiling_point": "2792 K", "melting_point": "933.47 K", "block": "p",
    "electronegativity_pauling": 1.61, "ionization_energy": "577.5 kJ/mol", "neutrons": 14, "atomic_radius": 143, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 10.71, "heat_of_vaporization": 294.0, "specific_heat": 0.897, "thermal_conductivity": 237, "molar_volume": 10.0, "cas_number": "7429-90-5",
    "history": "Although its compounds were used for centuries, pure aluminium was first produced in 1825 by Danish physicist Hans Christian Ørsted. Its refinement was difficult, making it more valuable than gold until the Hall-Héroult process was developed in 1886.", "common_compounds": ["Aluminium oxide (Al₂O₃)", "Aluminium hydroxide (Al(OH)₃)", "Aluminium sulfate (Al₂(SO₄)₃)"], "abundance_crust": "82,300 ppm (8.23%)", "abundance_solar": "60,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 14, "symbol": "Si", "name": "Silicon", "atomic_mass": 28.085, "category": ElementCategory.Metalloid, "xpos": 14, "ypos": 3, "shells": [2, 8, 4],
    "electron_configuration": "[Ne] 3s² 3p²", "summary": "Silicon is a chemical element with symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic lustre, and is a tetravalent metalloid and semiconductor.",
    "discovered_by": "Jöns Jacob Berzelius", "named_by": null, "phase": "Solid", "discovery_year": 1823, "density": 2.3296, "boiling_point": "3538 K", "melting_point": "1687 K", "block": "p",
    "electronegativity_pauling": 1.90, "ionization_energy": "786.5 kJ/mol", "neutrons": 14, "atomic_radius": 118, "is_radioactive": false, "crystal_structure": "Face-centered diamond-cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 50.21, "heat_of_vaporization": 383, "specific_heat": 0.705, "thermal_conductivity": 149, "molar_volume": 12.06, "cas_number": "7440-21-3",
    "history": "First prepared and described as an element in 1823 by Jöns Jacob Berzelius. Its name is derived from the Latin 'silex' or 'silicis', meaning flint.", "common_compounds": ["Silicon dioxide (SiO₂, silica)", "Silane (SiH₄)", "Silicon carbide (SiC)"], "abundance_crust": "282,000 ppm (28.2%)", "abundance_solar": "700,000 ppb (by weight)", "allotropes": ["Amorphous silicon", "Crystalline silicon"]
  },
  {
    "number": 15, "symbol": "P", "name": "Phosphorus", "atomic_mass": 30.973762, "category": ElementCategory.ReactiveNonmetal, "xpos": 15, "ypos": 3, "shells": [2, 8, 5],
    "electron_configuration": "[Ne] 3s² 3p³", "summary": "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms—white phosphorus and red phosphorus—but because it is highly reactive, phosphorus is never found as a free element on Earth.",
    "discovered_by": "Hennig Brand", "named_by": null, "phase": "Solid", "discovery_year": 1669, "density": 1.82, "boiling_point": "553.7 K", "melting_point": "317.3 K", "block": "p",
    "electronegativity_pauling": 2.19, "ionization_energy": "1011.8 kJ/mol", "neutrons": 16, "atomic_radius": 110, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 0.66, "heat_of_vaporization": 12.4, "specific_heat": 0.769, "thermal_conductivity": 0.236, "molar_volume": 17.0, "cas_number": "7723-14-0",
    "history": "Discovered by German alchemist Hennig Brand in 1669 while he was attempting to create the philosopher's stone from urine. He named it 'cold fire' because it glowed in the dark.", "common_compounds": ["Phosphoric acid (H₃PO₄)", "Calcium phosphate (Ca₃(PO₄)₂)", "Phosphine (PH₃)"], "abundance_crust": "1,050 ppm", "abundance_solar": "7,000 ppb (by weight)", "allotropes": ["White phosphorus", "Red phosphorus", "Black phosphorus", "Violet phosphorus"]
  },
  {
    "number": 16, "symbol": "S", "name": "Sulfur", "atomic_mass": 32.06, "category": ElementCategory.ReactiveNonmetal, "xpos": 16, "ypos": 3, "shells": [2, 8, 6],
    "electron_configuration": "[Ne] 3s² 3p⁴", "summary": "Sulfur is a chemical element with symbol S and atomic number 16. It is abundant, multivalent, and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S₈.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 2.07, "boiling_point": "717.8 K", "melting_point": "388.36 K", "block": "p",
    "electronegativity_pauling": 2.58, "ionization_energy": "999.6 kJ/mol", "neutrons": 16, "atomic_radius": 104, "is_radioactive": false, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 1.727, "heat_of_vaporization": 9.6, "specific_heat": 0.71, "thermal_conductivity": 0.205, "molar_volume": 15.5, "cas_number": "7704-34-9",
    "history": "Known since ancient times and is mentioned in the Bible as 'brimstone'. Antoine Lavoisier convinced the scientific community in 1777 that it was an element.", "common_compounds": ["Sulfuric acid (H₂SO₄)", "Hydrogen sulfide (H₂S)", "Sulfur dioxide (SO₂)"], "abundance_crust": "350 ppm", "abundance_solar": "400,000 ppb (by weight)", "allotropes": ["Rhombic sulfur (α-sulfur)", "Monoclinic sulfur (β-sulfur)", "Amorphous sulfur (plastic sulfur)"]
  },
  {
    "number": 17, "symbol": "Cl", "name": "Chlorine", "atomic_mass": 35.45, "category": ElementCategory.ReactiveNonmetal, "xpos": 17, "ypos": 3, "shells": [2, 8, 7],
    "electron_configuration": "[Ne] 3s² 3p⁵", "summary": "Chlorine is a chemical element with symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them.",
    "discovered_by": "Carl Wilhelm Scheele", "named_by": null, "phase": "Gas", "discovery_year": 1774, "density": 3.214, "boiling_point": "239.11 K", "melting_point": "171.6 K", "block": "p",
    "electronegativity_pauling": 3.16, "ionization_energy": "1251.2 kJ/mol", "neutrons": 18, "atomic_radius": 99, "is_radioactive": false, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 6.406, "heat_of_vaporization": 20.41, "specific_heat": 0.479, "thermal_conductivity": 0.0089, "molar_volume": 18.7, "cas_number": "7782-50-5",
    "history": "First prepared by Carl Wilhelm Scheele in 1774, who mistakenly thought it was an oxide. Humphry Davy proved it to be an element in 1810 and named it from the Greek 'chloros', meaning pale green.", "common_compounds": ["Sodium chloride (NaCl)", "Hydrogen chloride (HCl)", "Hypochlorous acid (HClO)"], "abundance_crust": "145 ppm", "abundance_solar": "8,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 18, "symbol": "Ar", "name": "Argon", "atomic_mass": 39.948, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 3, "shells": [2, 8, 8],
    "electron_configuration": "[Ne] 3s² 3p⁶", "summary": "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third-most abundant gas in the Earth's atmosphere, at 0.934% (9340 ppmv).",
    "discovered_by": "Lord Rayleigh & William Ramsay", "named_by": null, "phase": "Gas", "discovery_year": 1894, "density": 1.784, "boiling_point": "87.302 K", "melting_point": "83.81 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "1520.6 kJ/mol", "neutrons": 22, "atomic_radius": 98, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 1.18, "heat_of_vaporization": 6.53, "specific_heat": 0.520, "thermal_conductivity": 0.01772, "molar_volume": 24.2, "cas_number": "7440-37-1",
    "history": "Suspected to be present in air by Henry Cavendish in 1785 but was not isolated until 1894 by Lord Rayleigh and William Ramsay. Its name comes from the Greek 'argos' meaning lazy or inactive.", "common_compounds": ["Argon fluorohydride (HArF)"], "abundance_crust": "3.5 ppm", "abundance_solar": "70,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 19, "symbol": "K", "name": "Potassium", "atomic_mass": 39.0983, "category": ElementCategory.AlkaliMetal, "xpos": 1, "ypos": 4, "shells": [2, 8, 8, 1],
    "electron_configuration": "[Ar] 4s¹", "summary": "Potassium is a chemical element with symbol K and atomic number 19. It is a silvery-white metal that is soft enough to be cut with a knife with little force. Potassium metal reacts rapidly with atmospheric oxygen to form flaky white potassium peroxide in only seconds of exposure.",
    "discovered_by": "Humphry Davy", "named_by": null, "phase": "Solid", "discovery_year": 1807, "density": 0.862, "boiling_point": "1032 K", "melting_point": "336.7 K", "block": "s",
    "electronegativity_pauling": 0.82, "ionization_energy": "418.8 kJ/mol", "neutrons": 20, "atomic_radius": 227, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 2.33, "heat_of_vaporization": 76.90, "specific_heat": 0.757, "thermal_conductivity": 102.5, "molar_volume": 45.3, "cas_number": "7440-09-7",
    "history": "Isolated in 1807 by Humphry Davy from caustic potash (KOH) via electrolysis. It was the first metal to be isolated by electrolysis. Its symbol K comes from 'kalium', the Medieval Latin for potash.", "common_compounds": ["Potassium chloride (KCl)", "Potassium hydroxide (KOH)", "Potassium nitrate (KNO₃)"], "abundance_crust": "20,900 ppm (2.09%)", "abundance_solar": "3,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 20, "symbol": "Ca", "name": "Calcium", "atomic_mass": 40.078, "category": ElementCategory.AlkalineEarthMetal, "xpos": 2, "ypos": 4, "shells": [2, 8, 8, 2],
    "electron_configuration": "[Ar] 4s²", "summary": "Calcium is a chemical element with symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air.",
    "discovered_by": "Humphry Davy", "named_by": null, "phase": "Solid", "discovery_year": 1808, "density": 1.55, "boiling_point": "1757 K", "melting_point": "1115 K", "block": "s",
    "electronegativity_pauling": 1.00, "ionization_energy": "589.8 kJ/mol", "neutrons": 20, "atomic_radius": 197, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 8.54, "heat_of_vaporization": 154.7, "specific_heat": 0.647, "thermal_conductivity": 201, "molar_volume": 26.2, "cas_number": "7440-70-2",
    "history": "Known in its compound form (lime) since ancient times, calcium was first isolated in 1808 by Humphry Davy through electrolysis of a mixture of lime and mercuric oxide.", "common_compounds": ["Calcium carbonate (CaCO₃)", "Calcium oxide (CaO, lime)", "Calcium sulfate (CaSO₄, gypsum)"], "abundance_crust": "41,500 ppm (4.15%)", "abundance_solar": "60,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 21, "symbol": "Sc", "name": "Scandium", "atomic_mass": 44.955908, "category": ElementCategory.TransitionMetal, "xpos": 3, "ypos": 4, "shells": [2, 8, 9, 2],
    "electron_configuration": "[Ar] 3d¹ 4s²", "summary": "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare-earth element, along with yttrium and the lanthanides.",
    "discovered_by": "Lars Fredrik Nilson", "named_by": null, "phase": "Solid", "discovery_year": 1879, "density": 2.985, "boiling_point": "3109 K", "melting_point": "1814 K", "block": "d",
    "electronegativity_pauling": 1.36, "ionization_energy": "633.1 kJ/mol", "neutrons": 24, "atomic_radius": 162, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 14.1, "heat_of_vaporization": 332.7, "specific_heat": 0.568, "thermal_conductivity": 15.8, "molar_volume": 15.0, "cas_number": "7440-20-2",
    "history": "Its existence was predicted by Dmitri Mendeleev, who called it 'ekaboron'. It was discovered by Lars Fredrik Nilson in 1879 in the minerals euxenite and gadolinite from Scandinavia.", "common_compounds": ["Scandium(III) oxide (Sc₂O₃)", "Scandium(III) chloride (ScCl₃)"], "abundance_crust": "22 ppm", "abundance_solar": "30 ppb (by weight)", "allotropes": null
  },
  {
    "number": 22, "symbol": "Ti", "name": "Titanium", "atomic_mass": 47.867, "category": ElementCategory.TransitionMetal, "xpos": 4, "ypos": 4, "shells": [2, 8, 10, 2],
    "electron_configuration": "[Ar] 3d² 4s²", "summary": "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density, and high strength. Titanium is resistant to corrosion in sea water, aqua regia, and chlorine.",
    "discovered_by": "William Gregor", "named_by": "Martin Heinrich Klaproth", "phase": "Solid", "discovery_year": 1791, "density": 4.506, "boiling_point": "3560 K", "melting_point": "1941 K", "block": "d",
    "electronegativity_pauling": 1.54, "ionization_energy": "658.8 kJ/mol", "neutrons": 26, "atomic_radius": 147, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 14.15, "heat_of_vaporization": 425, "specific_heat": 0.523, "thermal_conductivity": 21.9, "molar_volume": 10.64, "cas_number": "7440-32-6",
    "history": "Discovered by William Gregor in 1791 in Cornwall, Great Britain. It was named by Martin Heinrich Klaproth after the Titans of Greek mythology.", "common_compounds": ["Titanium dioxide (TiO₂)", "Titanium tetrachloride (TiCl₄)"], "abundance_crust": "5,650 ppm", "abundance_solar": "3,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 23, "symbol": "V", "name": "Vanadium", "atomic_mass": 50.9415, "category": ElementCategory.TransitionMetal, "xpos": 5, "ypos": 4, "shells": [2, 8, 11, 2],
    "electron_configuration": "[Ar] 3d³ 4s²", "summary": "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery-grey, ductile, and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.",
    "discovered_by": "Andrés Manuel del Río", "named_by": "Nils Gabriel Sefström", "phase": "Solid", "discovery_year": 1801, "density": 6.11, "boiling_point": "3680 K", "melting_point": "2183 K", "block": "d",
    "electronegativity_pauling": 1.63, "ionization_energy": "650.9 kJ/mol", "neutrons": 28, "atomic_radius": 134, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 17.5, "heat_of_vaporization": 463, "specific_heat": 0.489, "thermal_conductivity": 30.7, "molar_volume": 8.32, "cas_number": "7440-62-2",
    "history": "Initially discovered by Andrés Manuel del Río in Mexico in 1801, who called it 'erythronium'. He was later convinced it was just chromium. It was rediscovered in 1830 by Nils Gabriel Sefström, who named it after Vanadís, the Scandinavian goddess of beauty.", "common_compounds": ["Vanadium pentoxide (V₂O₅)", "Vanadium(IV) chloride (VCl₄)"], "abundance_crust": "120 ppm", "abundance_solar": "300 ppb (by weight)", "allotropes": null
  },
  {
    "number": 24, "symbol": "Cr", "name": "Chromium", "atomic_mass": 51.9961, "category": ElementCategory.TransitionMetal, "xpos": 6, "ypos": 4, "shells": [2, 8, 13, 1],
    "electron_configuration": "[Ar] 3d⁵ 4s¹", "summary": "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle transition metal.",
    "discovered_by": "Louis Nicolas Vauquelin", "named_by": null, "phase": "Solid", "discovery_year": 1797, "density": 7.19, "boiling_point": "2944 K", "melting_point": "2180 K", "block": "d",
    "electronegativity_pauling": 1.66, "ionization_energy": "652.9 kJ/mol", "neutrons": 28, "atomic_radius": 128, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Antiferromagnetic", "heat_of_fusion": 21.0, "heat_of_vaporization": 347, "specific_heat": 0.449, "thermal_conductivity": 93.9, "molar_volume": 7.23, "cas_number": "7440-47-3",
    "history": "Discovered by Louis Nicolas Vauquelin in 1797, who produced the metal by heating chromium oxide with charcoal. He named it from the Greek 'chroma' meaning color, because of the many colored compounds it forms.", "common_compounds": ["Chromium(III) oxide (Cr₂O₃)", "Potassium dichromate (K₂Cr₂O₇)"], "abundance_crust": "102 ppm", "abundance_solar": "10,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 25, "symbol": "Mn", "name": "Manganese", "atomic_mass": 54.938044, "category": ElementCategory.TransitionMetal, "xpos": 7, "ypos": 4, "shells": [2, 8, 13, 2],
    "electron_configuration": "[Ar] 3d⁵ 4s²", "summary": "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in minerals in combination with iron. Manganese is a transition metal with a multifaceted array of industrial alloy uses, particularly in stainless steels.",
    "discovered_by": "Carl Wilhelm Scheele", "named_by": "Johan Gottlieb Gahn", "phase": "Solid", "discovery_year": 1774, "density": 7.21, "boiling_point": "2334 K", "melting_point": "1519 K", "block": "d",
    "electronegativity_pauling": 1.55, "ionization_energy": "717.3 kJ/mol", "neutrons": 30, "atomic_radius": 127, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 12.91, "heat_of_vaporization": 221, "specific_heat": 0.479, "thermal_conductivity": 7.81, "molar_volume": 7.35, "cas_number": "7439-96-5",
    "history": "Recognized by Carl Wilhelm Scheele in 1774 as an element and isolated by Johan Gottlieb Gahn in the same year by heating the mineral pyrolusite (manganese dioxide) with charcoal.", "common_compounds": ["Manganese(IV) oxide (MnO₂)", "Potassium permanganate (KMnO₄)"], "abundance_crust": "950 ppm", "abundance_solar": "7,000 ppb (by weight)", "allotropes": ["α-Mn", "β-Mn", "γ-Mn", "δ-Mn"]
  },
  {
    "number": 26, "symbol": "Fe", "name": "Iron", "atomic_mass": 55.845, "category": ElementCategory.TransitionMetal, "xpos": 8, "ypos": 4, "shells": [2, 8, 14, 2],
    "electron_configuration": "[Ar] 3d⁶ 4s²", "summary": "Iron is a chemical element with symbol Fe and atomic number 26. It is a metal that belongs to the first transition series and group 8 of the periodic table. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 7.874, "boiling_point": "3134 K", "melting_point": "1811 K", "block": "d",
    "electronegativity_pauling": 1.83, "ionization_energy": "762.5 kJ/mol", "neutrons": 30, "atomic_radius": 126, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Ferromagnetic", "heat_of_fusion": 13.81, "heat_of_vaporization": 340, "specific_heat": 0.449, "thermal_conductivity": 80.4, "molar_volume": 7.09, "cas_number": "7439-89-6",
    "history": "Used since ancient times, with the Iron Age marking a major step in human civilization. The element's symbol Fe comes from its Latin name 'ferrum'.", "common_compounds": ["Iron(II) oxide (FeO)", "Iron(III) oxide (Fe₂O₃ - rust)", "Iron Pyrite (FeS₂)"], "abundance_crust": "56,300 ppm (5.6%)", "abundance_solar": "1,100,000 ppb (by weight)", "allotropes": ["Ferrite (α-iron)", "Austenite (γ-iron)"]
  },
  {
    "number": 27, "symbol": "Co", "name": "Cobalt", "atomic_mass": 58.933194, "category": ElementCategory.TransitionMetal, "xpos": 9, "ypos": 4, "shells": [2, 8, 15, 2],
    "electron_configuration": "[Ar] 3d⁷ 4s²", "summary": "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt is found in the Earth's crust only in chemically combined form, save for small deposits found in alloys of natural meteoric iron.",
    "discovered_by": "Georg Brandt", "named_by": null, "phase": "Solid", "discovery_year": 1735, "density": 8.9, "boiling_point": "3200 K", "melting_point": "1768 K", "block": "d",
    "electronegativity_pauling": 1.88, "ionization_energy": "760.4 kJ/mol", "neutrons": 32, "atomic_radius": 125, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Ferromagnetic", "heat_of_fusion": 16.06, "heat_of_vaporization": 377, "specific_heat": 0.421, "thermal_conductivity": 100, "molar_volume": 6.67, "cas_number": "7440-48-4",
    "history": "Discovered by Georg Brandt around 1735, who showed that the blue color of certain minerals was due to a new element (cobalt), not bismuth as was thought.", "common_compounds": ["Cobalt(II) chloride (CoCl₂)", "Cobalt(II) oxide (CoO)"], "abundance_crust": "25 ppm", "abundance_solar": "3,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 28, "symbol": "Ni", "name": "Nickel", "atomic_mass": 58.6934, "category": ElementCategory.TransitionMetal, "xpos": 10, "ypos": 4, "shells": [2, 8, 16, 2],
    "electron_configuration": "[Ar] 3d⁸ 4s²", "summary": "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
    "discovered_by": "Axel Fredrik Cronstedt", "named_by": null, "phase": "Solid", "discovery_year": 1751, "density": 8.908, "boiling_point": "3186 K", "melting_point": "1728 K", "block": "d",
    "electronegativity_pauling": 1.91, "ionization_energy": "737.1 kJ/mol", "neutrons": 31, "atomic_radius": 124, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Ferromagnetic", "heat_of_fusion": 17.48, "heat_of_vaporization": 377.5, "specific_heat": 0.444, "thermal_conductivity": 90.9, "molar_volume": 6.59, "cas_number": "7440-02-0",
    "history": "Discovered by Axel Fredrik Cronstedt in 1751 in the mineral niccolite. Its name comes from the German 'Kupfernickel', meaning 'devil's copper', because miners couldn't extract copper from it.", "common_compounds": ["Nickel(II) oxide (NiO)", "Nickel(II) chloride (NiCl₂)"], "abundance_crust": "84 ppm", "abundance_solar": "60,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 29, "symbol": "Cu", "name": "Copper", "atomic_mass": 63.546, "category": ElementCategory.TransitionMetal, "xpos": 11, "ypos": 4, "shells": [2, 8, 18, 1],
    "electron_configuration": "[Ar] 3d¹⁰ 4s¹", "summary": "Copper is a chemical element with symbol Cu and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 8.96, "boiling_point": "2835 K", "melting_point": "1357.77 K", "block": "d",
    "electronegativity_pauling": 1.90, "ionization_energy": "745.5 kJ/mol", "neutrons": 35, "atomic_radius": 128, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 13.26, "heat_of_vaporization": 300.4, "specific_heat": 0.385, "thermal_conductivity": 401, "molar_volume": 7.1, "cas_number": "7440-50-8",
    "history": "One of the first metals used by humans, with artifacts dating back to 9000 BC. The symbol Cu comes from its Latin name 'cuprum', which originated from 'aes Cyprium' (metal of Cyprus).", "common_compounds": ["Copper(II) sulfate (CuSO₄)", "Copper(I) oxide (Cu₂O)", "Copper(II) oxide (CuO)"], "abundance_crust": "60 ppm", "abundance_solar": "200 ppb (by weight)", "allotropes": null
  },
  {
    "number": 30, "symbol": "Zn", "name": "Zinc", "atomic_mass": 65.38, "category": ElementCategory.TransitionMetal, "xpos": 12, "ypos": 4, "shells": [2, 8, 18, 2],
    "electron_configuration": "[Ar] 3d¹⁰ 4s²", "summary": "Zinc is a chemical element with symbol Zn and atomic number 30. Zinc is a slightly brittle metal at room temperature and has a blue-silvery appearance when oxidation is removed. It is the first element in group 12 of the periodic table.",
    "discovered_by": "Indian metallurgists", "named_by": null, "phase": "Solid", "discovery_year": 1300, "density": 7.14, "boiling_point": "1180 K", "melting_point": "692.68 K", "block": "d",
    "electronegativity_pauling": 1.65, "ionization_energy": "906.4 kJ/mol", "neutrons": 35, "atomic_radius": 134, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 7.32, "heat_of_vaporization": 115, "specific_heat": 0.388, "thermal_conductivity": 116, "molar_volume": 9.2, "cas_number": "7440-66-6",
    "history": "Zinc ores were used for making brass for millennia before the metal was identified. It was first recognized as a distinct metal in India around the 14th century and rediscovered in Europe in 1746 by Andreas Sigismund Marggraf.", "common_compounds": ["Zinc oxide (ZnO)", "Zinc sulfide (ZnS)", "Zinc chloride (ZnCl₂)"], "abundance_crust": "70 ppm", "abundance_solar": "1,000 ppb (by weight)", "allotropes": null
  },
  {
    "number": 31, "symbol": "Ga", "name": "Gallium", "atomic_mass": 69.723, "category": ElementCategory.PostTransitionMetal, "xpos": 13, "ypos": 4, "shells": [2, 8, 18, 3],
    "electron_configuration": "[Ar] 3d¹⁰ 4s² 4p¹", "summary": "Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium is a soft, silvery metal at standard temperature and pressure, a brittle solid at low temperatures, and a liquid at temperatures greater than 29.76 °C (85.57 °F) (slightly above room temperature).",
    "discovered_by": "Lecoq de Boisbaudran", "named_by": null, "phase": "Solid", "discovery_year": 1875, "density": 5.91, "boiling_point": "2477 K", "melting_point": "302.9146 K", "block": "p",
    "electronegativity_pauling": 1.81, "ionization_energy": "578.8 kJ/mol", "neutrons": 39, "atomic_radius": 135, "is_radioactive": false, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 5.59, "heat_of_vaporization": 254, "specific_heat": 0.371, "thermal_conductivity": 40.6, "molar_volume": 11.8, "cas_number": "7440-55-3",
    "history": "Its existence was predicted by Dmitri Mendeleev in 1871 (as eka-aluminium). It was discovered spectroscopically by French chemist Paul-Émile Lecoq de Boisbaudran in 1875.", "common_compounds": ["Gallium(III) oxide (Ga₂O₃)", "Gallium arsenide (GaAs)"], "abundance_crust": "19 ppm", "abundance_solar": "30 ppb (by weight)", "allotropes": null
  },
  {
    "number": 32, "symbol": "Ge", "name": "Germanium", "atomic_mass": 72.63, "category": ElementCategory.Metalloid, "xpos": 14, "ypos": 4, "shells": [2, 8, 18, 4],
    "electron_configuration": "[Ar] 3d¹⁰ 4s² 4p²", "summary": "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors silicon and tin.",
    "discovered_by": "Clemens Winkler", "named_by": null, "phase": "Solid", "discovery_year": 1886, "density": 5.323, "boiling_point": "3106 K", "melting_point": "1211.40 K", "block": "p",
    "electronegativity_pauling": 2.01, "ionization_energy": "762 kJ/mol", "neutrons": 41, "atomic_radius": 122, "is_radioactive": false, "crystal_structure": "Face-centered diamond-cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 36.94, "heat_of_vaporization": 334, "specific_heat": 0.32, "thermal_conductivity": 59.9, "molar_volume": 13.6, "cas_number": "7440-56-4",
    "history": "Its existence, properties, and location in the periodic table were predicted by Dmitri Mendeleev in 1869 (as eka-silicon). It was discovered by Clemens Winkler in 1886, who named it after his country, Germany.", "common_compounds": ["Germanium dioxide (GeO₂)", "Germane (GeH₄)"], "abundance_crust": "1.5 ppm", "abundance_solar": "200 ppb (by weight)", "allotropes": null
  },
  {
    "number": 33, "symbol": "As", "name": "Arsenic", "atomic_mass": 74.921595, "category": ElementCategory.Metalloid, "xpos": 15, "ypos": 4, "shells": [2, 8, 18, 5],
    "electron_configuration": "[Ar] 3d¹⁰ 4s² 4p³", "summary": "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in combination with sulfur and metals, but also as a pure elemental crystal. Arsenic is a metalloid.",
    "discovered_by": "Albertus Magnus", "named_by": null, "phase": "Solid", "discovery_year": 1250, "density": 5.727, "melting_point": "1090 K", "boiling_point": "887 K", "block": "p",
    "electronegativity_pauling": 2.18, "ionization_energy": "947.0 kJ/mol", "neutrons": 42, "atomic_radius": 121, "is_radioactive": false, "crystal_structure": "Rhombohedral", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 24.44, "heat_of_vaporization": 32.4, "specific_heat": 0.329, "thermal_conductivity": 50.2, "molar_volume": 12.95, "cas_number": "7440-38-2",
    "history": "Arsenic compounds have been known and used since ancient times. It is believed that Albertus Magnus was the first to isolate the element in 1250.", "common_compounds": ["Arsenic trioxide (As₂O₃)", "Arsine (AsH₃)", "Orpiment (As₂S₃)"], "abundance_crust": "1.8 ppm", "abundance_solar": "7 ppb (by weight)", "allotropes": ["Yellow arsenic", "Gray arsenic", "Black arsenic"]
  },
  {
    "number": 34, "symbol": "Se", "name": "Selenium", "atomic_mass": 78.971, "category": ElementCategory.ReactiveNonmetal, "xpos": 16, "ypos": 4, "shells": [2, 8, 18, 6],
    "electron_configuration": "[Ar] 3d¹⁰ 4s² 4p⁴", "summary": "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between the elements above and below in the periodic table, sulfur and tellurium, and also has similarities to arsenic.",
    "discovered_by": "Jöns Jacob Berzelius", "named_by": null, "phase": "Solid", "discovery_year": 1817, "density": 4.81, "boiling_point": "958 K", "melting_point": "494 K", "block": "p",
    "electronegativity_pauling": 2.55, "ionization_energy": "941.0 kJ/mol", "neutrons": 45, "atomic_radius": 117, "is_radioactive": false, "crystal_structure": "Hexagonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 6.69, "heat_of_vaporization": 95.48, "specific_heat": 0.321, "thermal_conductivity": 0.519, "molar_volume": 16.42, "cas_number": "7782-49-2",
    "history": "Discovered in 1817 by Jöns Jacob Berzelius and Johan Gottlieb Gahn. Berzelius found the element associated with tellurium, and named it after 'Selene', the Greek goddess of the moon.", "common_compounds": ["Hydrogen selenide (H₂Se)", "Selenium dioxide (SeO₂)"], "abundance_crust": "0.05 ppm", "abundance_solar": "80 ppb (by weight)", "allotropes": ["Red selenium", "Gray selenium", "Black selenium"]
  },
  {
    "number": 35, "symbol": "Br", "name": "Bromine", "atomic_mass": 79.904, "category": ElementCategory.ReactiveNonmetal, "xpos": 17, "ypos": 4, "shells": [2, 8, 18, 7],
    "electron_configuration": "[Ar] 3d¹⁰ 4s² 4p⁵", "summary": "Bromine is a chemical element with symbol Br and atomic number 35. It is the third-lightest halogen, and is a fuming red-brown liquid at room temperature that evaporates readily to form a similarly coloured gas.",
    "discovered_by": "Antoine Jérôme Balard & Carl Jacob Löwig", "named_by": null, "phase": "Liquid", "discovery_year": 1826, "density": 3.12, "boiling_point": "332 K", "melting_point": "265.8 K", "block": "p",
    "electronegativity_pauling": 2.96, "ionization_energy": "1139.9 kJ/mol", "neutrons": 45, "atomic_radius": 114, "is_radioactive": false, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 10.57, "heat_of_vaporization": 29.96, "specific_heat": 0.474, "thermal_conductivity": 0.122, "molar_volume": 23.5, "cas_number": "7726-95-6",
    "history": "Discovered independently by two chemists, Carl Jacob Löwig in 1825 and Antoine Balard in 1826. Balard published his findings first. Its name is derived from the Greek 'bromos', meaning stench.", "common_compounds": ["Hydrogen bromide (HBr)", "Sodium bromide (NaBr)"], "abundance_crust": "2.4 ppm", "abundance_solar": "10 ppb (by weight)", "allotropes": null
  },
  {
    "number": 36, "symbol": "Kr", "name": "Krypton", "atomic_mass": 83.798, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 4, "shells": [2, 8, 18, 8],
    "electron_configuration": "[Ar] 3d¹⁰ 4s² 4p⁶", "summary": "Krypton is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps.",
    "discovered_by": "Morris Travers & William Ramsay", "named_by": null, "phase": "Gas", "discovery_year": 1898, "density": 3.749, "boiling_point": "119.93 K", "melting_point": "115.78 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "1350.8 kJ/mol", "neutrons": 48, "atomic_radius": 112, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 1.64, "heat_of_vaporization": 9.08, "specific_heat": 0.248, "thermal_conductivity": 0.00943, "molar_volume": 27.9, "cas_number": "7439-90-9",
    "history": "Discovered in 1898 by William Ramsay and Morris Travers in residue left from evaporating nearly all components of liquid air. Its name comes from the Greek 'kryptos', meaning the hidden one.", "common_compounds": ["Krypton difluoride (KrF₂)"], "abundance_crust": "0.0001 ppm", "abundance_solar": "40 ppb (by weight)", "allotropes": null
  },
  {
    "number": 37, "symbol": "Rb", "name": "Rubidium", "atomic_mass": 85.4678, "category": ElementCategory.AlkaliMetal, "xpos": 1, "ypos": 5, "shells": [2, 8, 18, 8, 1],
    "electron_configuration": "[Kr] 5s¹", "summary": "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a very soft, silvery-white metal in the alkali metal group. Rubidium metal is similar to potassium metal and cesium metal in physical appearance, softness and conductivity.",
    "discovered_by": "Robert Bunsen & Gustav Kirchhoff", "named_by": null, "phase": "Solid", "discovery_year": 1861, "density": 1.532, "boiling_point": "961 K", "melting_point": "312.45 K", "block": "s",
    "electronegativity_pauling": 0.82, "ionization_energy": "403.0 kJ/mol", "neutrons": 48, "atomic_radius": 248, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 2.19, "heat_of_vaporization": 69, "specific_heat": 0.363, "thermal_conductivity": 58.2, "molar_volume": 55.9, "cas_number": "7440-17-7",
    "history": "Discovered in 1861 by Robert Bunsen and Gustav Kirchhoff using a spectroscope. They named it from the Latin 'rubidus', meaning deep red, after the two bright red lines in its emission spectrum.", "common_compounds": ["Rubidium chloride (RbCl)", "Rubidium oxide (Rb₂O)"], "abundance_crust": "90 ppm", "abundance_solar": "7 ppb (by weight)", "allotropes": null
  },
  {
    "number": 38, "symbol": "Sr", "name": "Strontium", "atomic_mass": 87.62, "category": ElementCategory.AlkalineEarthMetal, "xpos": 2, "ypos": 5, "shells": [2, 8, 18, 8, 2],
    "electron_configuration": "[Kr] 5s²", "summary": "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly reactive chemically. The metal forms a dark oxide layer when it is exposed to air.",
    "discovered_by": "Adair Crawford & William Cruickshank", "named_by": null, "phase": "Solid", "discovery_year": 1790, "density": 2.64, "boiling_point": "1655 K", "melting_point": "1050 K", "block": "s",
    "electronegativity_pauling": 0.95, "ionization_energy": "549.5 kJ/mol", "neutrons": 50, "atomic_radius": 215, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 7.43, "heat_of_vaporization": 141, "specific_heat": 0.301, "thermal_conductivity": 35.4, "molar_volume": 33.7, "cas_number": "7440-24-6",
    "history": "Named after the Scottish village of Strontian, where it was discovered in the ores of the mineral strontianite. It was first isolated as a metal in 1808 by Humphry Davy.", "common_compounds": ["Strontium carbonate (SrCO₃)", "Strontium nitrate (Sr(NO₃)₂)"], "abundance_crust": "370 ppm", "abundance_solar": "20 ppb (by weight)", "allotropes": null
  },
  {
    "number": 39, "symbol": "Y", "name": "Yttrium", "atomic_mass": 88.90584, "category": ElementCategory.TransitionMetal, "xpos": 3, "ypos": 5, "shells": [2, 8, 18, 9, 2],
    "electron_configuration": "[Kr] 4d¹ 5s²", "summary": "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a 'rare-earth element'.",
    "discovered_by": "Johan Gadolin", "named_by": null, "phase": "Solid", "discovery_year": 1794, "density": 4.472, "boiling_point": "3609 K", "melting_point": "1799 K", "block": "d",
    "electronegativity_pauling": 1.22, "ionization_energy": "600 kJ/mol", "neutrons": 50, "atomic_radius": 180, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 11.42, "heat_of_vaporization": 365, "specific_heat": 0.298, "thermal_conductivity": 17.2, "molar_volume": 19.8, "cas_number": "7440-65-5",
    "history": "Discovered by Johan Gadolin in 1794 in a mineral from Ytterby in Sweden. The village of Ytterby is the source of names for four elements: yttrium, terbium, erbium, and ytterbium.", "common_compounds": ["Yttrium(III) oxide (Y₂O₃)"], "abundance_crust": "33 ppm", "abundance_solar": "7 ppb (by weight)", "allotropes": null
  },
  {
    "number": 40, "symbol": "Zr", "name": "Zirconium", "atomic_mass": 91.224, "category": ElementCategory.TransitionMetal, "xpos": 4, "ypos": 5, "shells": [2, 8, 18, 10, 2],
    "electron_configuration": "[Kr] 4d² 5s²", "summary": "Zirconium is a chemical element with symbol Zr and atomic number 40. It is a lustrous, greyish-white, strong, ductile, and malleable transition metal that is highly resistant to corrosion.",
    "discovered_by": "Martin Heinrich Klaproth", "named_by": null, "phase": "Solid", "discovery_year": 1789, "density": 6.52, "boiling_point": "4682 K", "melting_point": "2128 K", "block": "d",
    "electronegativity_pauling": 1.33, "ionization_energy": "640.1 kJ/mol", "neutrons": 51, "atomic_radius": 160, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 14, "heat_of_vaporization": 573, "specific_heat": 0.278, "thermal_conductivity": 22.6, "molar_volume": 14.1, "cas_number": "7440-67-7",
    "history": "Discovered by Martin Heinrich Klaproth in 1789, and isolated by Jöns Jacob Berzelius in 1824. It is named after the mineral zircon, its most important source.", "common_compounds": ["Zirconium dioxide (ZrO₂)"], "abundance_crust": "165 ppm", "abundance_solar": "10 ppb (by weight)", "allotropes": null
  },
  {
    "number": 41, "symbol": "Nb", "name": "Niobium", "atomic_mass": 92.90637, "category": ElementCategory.TransitionMetal, "xpos": 5, "ypos": 5, "shells": [2, 8, 18, 12, 1],
    "electron_configuration": "[Kr] 4d⁴ 5s¹", "summary": "Niobium, formerly columbium, is a chemical element with symbol Nb and atomic number 41. It is a light grey, crystalline, and ductile transition metal.",
    "discovered_by": "Charles Hatchett", "named_by": null, "phase": "Solid", "discovery_year": 1801, "density": 8.57, "boiling_point": "5017 K", "melting_point": "2750 K", "block": "d",
    "electronegativity_pauling": 1.6, "ionization_energy": "652.1 kJ/mol", "neutrons": 52, "atomic_radius": 146, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 26.8, "heat_of_vaporization": 689.9, "specific_heat": 0.265, "thermal_conductivity": 53.7, "molar_volume": 10.8, "cas_number": "7440-03-1",
    "history": "Discovered by Charles Hatchett in 1801, who named it columbium. It was later rediscovered and named niobium after Niobe, daughter of Tantalus in Greek mythology, due to its similarity to tantalum.", "common_compounds": ["Niobium pentoxide (Nb₂O₅)"], "abundance_crust": "20 ppm", "abundance_solar": "0.8 ppb (by weight)", "allotropes": null
  },
  {
    "number": 42, "symbol": "Mo", "name": "Molybdenum", "atomic_mass": 95.95, "category": ElementCategory.TransitionMetal, "xpos": 6, "ypos": 5, "shells": [2, 8, 18, 13, 1],
    "electron_configuration": "[Kr] 4d⁵ 5s¹", "summary": "Molybdenum is a chemical element with the symbol Mo and atomic number 42. It is a silvery-white metal with a very high melting point, and is used in high-strength steel alloys.",
    "discovered_by": "Carl Wilhelm Scheele", "named_by": null, "phase": "Solid", "discovery_year": 1778, "density": 10.28, "boiling_point": "4912 K", "melting_point": "2896 K", "block": "d",
    "electronegativity_pauling": 2.16, "ionization_energy": "684.3 kJ/mol", "neutrons": 54, "atomic_radius": 139, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 37.48, "heat_of_vaporization": 617, "specific_heat": 0.251, "thermal_conductivity": 138, "molar_volume": 9.38, "cas_number": "7439-98-7",
    "history": "Identified by Carl Wilhelm Scheele in 1778, and first isolated by Peter Jacob Hjelm in 1781. Its name comes from the Neo-Latin 'molybdaenum', from Ancient Greek 'molybdos', meaning lead, since its ores were confused with lead ores.", "common_compounds": ["Molybdenum disulfide (MoS₂)", "Molybdenum trioxide (MoO₃)"], "abundance_crust": "1.2 ppm", "abundance_solar": "2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 43, "symbol": "Tc", "name": "Technetium", "atomic_mass": 98, "category": ElementCategory.TransitionMetal, "xpos": 7, "ypos": 5, "shells": [2, 8, 18, 13, 2],
    "electron_configuration": "[Kr] 4d⁵ 5s²", "summary": "Technetium is a chemical element with symbol Tc and atomic number 43. It is the lightest element whose isotopes are all radioactive; none are stable.",
    "discovered_by": "Carlo Perrier & Emilio Segrè", "named_by": null, "phase": "Solid", "discovery_year": 1937, "density": 11.5, "boiling_point": "4538 K", "melting_point": "2430 K", "block": "d",
    "electronegativity_pauling": 1.9, "ionization_energy": "702 kJ/mol", "neutrons": 55, "atomic_radius": 136, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 33.29, "heat_of_vaporization": 585.2, "specific_heat": 0.24, "thermal_conductivity": 50.6, "molar_volume": 8.63, "cas_number": "7440-26-8",
    "history": "Its existence was predicted by Dmitri Mendeleev. It was the first artificially produced element, synthesized by Carlo Perrier and Emilio Segrè in 1937. Its name comes from the Greek 'technetos', meaning artificial.", "common_compounds": ["Technetium(VII) oxide (Tc₂O₇)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 44, "symbol": "Ru", "name": "Ruthenium", "atomic_mass": 101.07, "category": ElementCategory.TransitionMetal, "xpos": 8, "ypos": 5, "shells": [2, 8, 18, 15, 1],
    "electron_configuration": "[Kr] 4d⁷ 5s¹", "summary": "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table.",
    "discovered_by": "Karl Ernst Claus", "named_by": null, "phase": "Solid", "discovery_year": 1844, "density": 12.37, "boiling_point": "4423 K", "melting_point": "2607 K", "block": "d",
    "electronegativity_pauling": 2.2, "ionization_energy": "710.2 kJ/mol", "neutrons": 57, "atomic_radius": 134, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 38.59, "heat_of_vaporization": 567.6, "specific_heat": 0.238, "thermal_conductivity": 117, "molar_volume": 8.3, "cas_number": "7440-18-8",
    "history": "Discovered by Karl Ernst Claus in 1844 at Kazan State University. He named it Ruthenium from 'Ruthenia', the Latin word for Rus', a historical area which includes present-day western Russia, Ukraine, and Belarus.", "common_compounds": ["Ruthenium(IV) oxide (RuO₂)"], "abundance_crust": "0.001 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 45, "symbol": "Rh", "name": "Rhodium", "atomic_mass": 102.9055, "category": ElementCategory.TransitionMetal, "xpos": 9, "ypos": 5, "shells": [2, 8, 18, 16, 1],
    "electron_configuration": "[Kr] 4d⁸ 5s¹", "summary": "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, corrosion-resistant transition metal. It is a noble metal and a member of the platinum group.",
    "discovered_by": "William Hyde Wollaston", "named_by": null, "phase": "Solid", "discovery_year": 1803, "density": 12.41, "boiling_point": "3968 K", "melting_point": "2237 K", "block": "d",
    "electronegativity_pauling": 2.28, "ionization_energy": "719.7 kJ/mol", "neutrons": 58, "atomic_radius": 134, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 26.59, "heat_of_vaporization": 494, "specific_heat": 0.243, "thermal_conductivity": 150, "molar_volume": 8.3, "cas_number": "7440-16-6",
    "history": "Discovered in 1803 by William Hyde Wollaston, soon after his discovery of palladium. He named it from the Greek 'rhodon' meaning rose, after the rose color of one of its chlorine compounds.", "common_compounds": ["Rhodium(III) chloride (RhCl₃)"], "abundance_crust": "0.001 ppm", "abundance_solar": "0.4 ppb (by weight)", "allotropes": null
  },
  {
    "number": 46, "symbol": "Pd", "name": "Palladium", "atomic_mass": 106.42, "category": ElementCategory.TransitionMetal, "xpos": 10, "ypos": 5, "shells": [2, 8, 18, 18, 0],
    "electron_configuration": "[Kr] 4d¹⁰", "summary": "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston.",
    "discovered_by": "William Hyde Wollaston", "named_by": null, "phase": "Solid", "discovery_year": 1803, "density": 12.023, "boiling_point": "3236 K", "melting_point": "1828.05 K", "block": "d",
    "electronegativity_pauling": 2.20, "ionization_energy": "804.4 kJ/mol", "neutrons": 60, "atomic_radius": 137, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 16.74, "heat_of_vaporization": 362, "specific_heat": 0.244, "thermal_conductivity": 71.8, "molar_volume": 8.56, "cas_number": "7440-05-3",
    "history": "Discovered by William Hyde Wollaston in 1803. He named it after the asteroid Pallas, which had been discovered two years earlier.", "common_compounds": ["Palladium(II) chloride (PdCl₂)"], "abundance_crust": "0.015 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 47, "symbol": "Ag", "name": "Silver", "atomic_mass": 107.8682, "category": ElementCategory.TransitionMetal, "xpos": 11, "ypos": 5, "shells": [2, 8, 18, 18, 1],
    "electron_configuration": "[Kr] 4d¹⁰ 5s¹", "summary": "Silver is a chemical element with symbol Ag and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 10.49, "boiling_point": "2435 K", "melting_point": "1234.93 K", "block": "d",
    "electronegativity_pauling": 1.93, "ionization_energy": "731.0 kJ/mol", "neutrons": 61, "atomic_radius": 144, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 11.28, "heat_of_vaporization": 250.58, "specific_heat": 0.235, "thermal_conductivity": 429, "molar_volume": 10.27, "cas_number": "7440-22-4",
    "history": "Known since antiquity. Its symbol, Ag, is from the Latin 'argentum', derived from the Proto-Indo-European root *h₂erǵ-, 'shining' or 'white'.", "common_compounds": ["Silver nitrate (AgNO₃)", "Silver chloride (AgCl)"], "abundance_crust": "0.075 ppm", "abundance_solar": "0.4 ppb (by weight)", "allotropes": null
  },
  {
    "number": 48, "symbol": "Cd", "name": "Cadmium", "atomic_mass": 112.414, "category": ElementCategory.TransitionMetal, "xpos": 12, "ypos": 5, "shells": [2, 8, 18, 18, 2],
    "electron_configuration": "[Kr] 4d¹⁰ 5s²", "summary": "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury.",
    "discovered_by": "Karl Samuel Leberecht Hermann & Friedrich Stromeyer", "named_by": null, "phase": "Solid", "discovery_year": 1817, "density": 8.65, "boiling_point": "1040 K", "melting_point": "594.22 K", "block": "d",
    "electronegativity_pauling": 1.69, "ionization_energy": "867.8 kJ/mol", "neutrons": 64, "atomic_radius": 151, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 6.21, "heat_of_vaporization": 99.87, "specific_heat": 0.232, "thermal_conductivity": 96.6, "molar_volume": 13.1, "cas_number": "7440-43-9",
    "history": "Discovered independently in 1817 by Friedrich Stromeyer and Karl Samuel Leberecht Hermann, both as an impurity in zinc carbonate. It was named from the Latin 'cadmia', the Latin name for calamine (zinc carbonate).", "common_compounds": ["Cadmium sulfide (CdS)", "Cadmium selenide (CdSe)"], "abundance_crust": "0.15 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 49, "symbol": "In", "name": "Indium", "atomic_mass": 114.818, "category": ElementCategory.PostTransitionMetal, "xpos": 13, "ypos": 5, "shells": [2, 8, 18, 18, 3],
    "electron_configuration": "[Kr] 4d¹⁰ 5s² 5p¹", "summary": "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metal that makes up 0.21 parts per million of the Earth's crust.",
    "discovered_by": "Ferdinand Reich & Hieronymus Theodor Richter", "named_by": null, "phase": "Solid", "discovery_year": 1863, "density": 7.31, "boiling_point": "2345 K", "melting_point": "429.75 K", "block": "p",
    "electronegativity_pauling": 1.78, "ionization_energy": "558.3 kJ/mol", "neutrons": 66, "atomic_radius": 167, "is_radioactive": false, "crystal_structure": "Body-centered tetragonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 3.281, "heat_of_vaporization": 231.8, "specific_heat": 0.233, "thermal_conductivity": 81.8, "molar_volume": 15.7, "cas_number": "7440-74-6",
    "history": "Discovered by Ferdinand Reich and Hieronymus Theodor Richter in 1863 using spectroscopy. They named it for the brilliant indigo line in its spectrum.", "common_compounds": ["Indium(III) oxide (In₂O₃)", "Indium tin oxide (ITO)"], "abundance_crust": "0.25 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 50, "symbol": "Sn", "name": "Tin", "atomic_mass": 118.71, "category": ElementCategory.PostTransitionMetal, "xpos": 14, "ypos": 5, "shells": [2, 8, 18, 18, 4],
    "electron_configuration": "[Kr] 4d¹⁰ 5s² 5p²", "summary": "Tin is a chemical element with symbol Sn and atomic number 50. It is a post-transition metal in group 14 of the periodic table.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 7.265, "boiling_point": "2875 K", "melting_point": "505.08 K", "block": "p",
    "electronegativity_pauling": 1.96, "ionization_energy": "708.6 kJ/mol", "neutrons": 69, "atomic_radius": 140, "is_radioactive": false, "crystal_structure": "Tetragonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 7.03, "heat_of_vaporization": 296.1, "specific_heat": 0.228, "thermal_conductivity": 66.8, "molar_volume": 16.29, "cas_number": "7440-31-5",
    "history": "Known since antiquity. Its symbol, Sn, comes from its Latin name 'stannum'. The Bronze Age is named for its alloy with copper.", "common_compounds": ["Tin(IV) oxide (SnO₂)", "Tin(II) chloride (SnCl₂)"], "abundance_crust": "2.3 ppm", "abundance_solar": "3 ppb (by weight)", "allotropes": ["Grey tin (α-tin)", "White tin (β-tin)"]
  },
  {
    "number": 51, "symbol": "Sb", "name": "Antimony", "atomic_mass": 121.76, "category": ElementCategory.Metalloid, "xpos": 15, "ypos": 5, "shells": [2, 8, 18, 18, 5],
    "electron_configuration": "[Kr] 4d¹⁰ 5s² 5p³", "summary": "Antimony is a chemical element with symbol Sb and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 6.697, "boiling_point": "1860 K", "melting_point": "903.78 K", "block": "p",
    "electronegativity_pauling": 2.05, "ionization_energy": "834 kJ/mol", "neutrons": 71, "atomic_radius": 141, "is_radioactive": false, "crystal_structure": "Rhombohedral", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 19.79, "heat_of_vaporization": 193, "specific_heat": 0.207, "thermal_conductivity": 24.4, "molar_volume": 18.23, "cas_number": "7440-36-0",
    "history": "Known since ancient times. Its symbol Sb is from 'stibium', its classical Latin name.", "common_compounds": ["Antimony trioxide (Sb₂O₃)", "Stibine (SbH₃)"], "abundance_crust": "0.2 ppm", "abundance_solar": "0.3 ppb (by weight)", "allotropes": ["Blue-white metallic", "Yellow", "Black"]
  },
  {
    "number": 52, "symbol": "Te", "name": "Tellurium", "atomic_mass": 127.6, "category": ElementCategory.Metalloid, "xpos": 16, "ypos": 5, "shells": [2, 8, 18, 18, 6],
    "electron_configuration": "[Kr] 4d¹⁰ 5s² 5p⁴", "summary": "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid.",
    "discovered_by": "Franz-Joseph Müller von Reichenstein", "named_by": "Martin Heinrich Klaproth", "phase": "Solid", "discovery_year": 1782, "density": 6.24, "boiling_point": "1261 K", "melting_point": "722.66 K", "block": "p",
    "electronegativity_pauling": 2.1, "ionization_energy": "869.3 kJ/mol", "neutrons": 76, "atomic_radius": 143, "is_radioactive": false, "crystal_structure": "Hexagonal", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 17.49, "heat_of_vaporization": 114.1, "specific_heat": 0.202, "thermal_conductivity": 2.35, "molar_volume": 20.4, "cas_number": "13494-80-9",
    "history": "Discovered in 1782 by Franz-Joseph Müller von Reichenstein in Transylvania. Named in 1798 by Martin Heinrich Klaproth after 'tellus', the Latin word for earth.", "common_compounds": ["Tellurium dioxide (TeO₂)"], "abundance_crust": "0.001 ppm", "abundance_solar": "2 ppb (by weight)", "allotropes": ["Amorphous", "Crystalline"]
  },
  {
    "number": 53, "symbol": "I", "name": "Iodine", "atomic_mass": 126.90447, "category": ElementCategory.ReactiveNonmetal, "xpos": 17, "ypos": 5, "shells": [2, 8, 18, 18, 7],
    "electron_configuration": "[Kr] 4d¹⁰ 5s² 5p⁵", "summary": "Iodine is a chemical element with symbol I and atomic number 53. The heaviest of the stable halogens, it exists as a lustrous, purple-black non-metallic solid at standard conditions.",
    "discovered_by": "Bernard Courtois", "named_by": null, "phase": "Solid", "discovery_year": 1811, "density": 4.933, "boiling_point": "457.4 K", "melting_point": "386.85 K", "block": "p",
    "electronegativity_pauling": 2.66, "ionization_energy": "1008.4 kJ/mol", "neutrons": 74, "atomic_radius": 133, "is_radioactive": false, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 15.52, "heat_of_vaporization": 41.57, "specific_heat": 0.214, "thermal_conductivity": 0.449, "molar_volume": 25.72, "cas_number": "7553-56-2",
    "history": "Discovered by French chemist Bernard Courtois in 1811. It was named two years later by Joseph Louis Gay-Lussac from the Greek 'ioeides' for violet, because of the color of iodine vapor.", "common_compounds": ["Hydrogen iodide (HI)", "Potassium iodide (KI)"], "abundance_crust": "0.45 ppm", "abundance_solar": "3 ppb (by weight)", "allotropes": null
  },
  {
    "number": 54, "symbol": "Xe", "name": "Xenon", "atomic_mass": 131.293, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 5, "shells": [2, 8, 18, 18, 8],
    "electron_configuration": "[Kr] 4d¹⁰ 5s² 5p⁶", "summary": "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas found in the Earth's atmosphere in trace amounts.",
    "discovered_by": "Morris Travers & William Ramsay", "named_by": null, "phase": "Gas", "discovery_year": 1898, "density": 5.894, "boiling_point": "165.051 K", "melting_point": "161.4 K", "block": "p",
    "electronegativity_pauling": 2.6, "ionization_energy": "1170.4 kJ/mol", "neutrons": 77, "atomic_radius": 130, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 2.27, "heat_of_vaporization": 12.64, "specific_heat": 0.158, "thermal_conductivity": 0.00565, "molar_volume": 35.9, "cas_number": "7440-63-3",
    "history": "Discovered by William Ramsay and Morris Travers in 1898, shortly after their discovery of krypton and neon. They named it Xenon from the Greek word 'xenos', meaning 'stranger'.", "common_compounds": ["Xenon difluoride (XeF₂)", "Xenon tetrafluoride (XeF₄)"], "abundance_crust": "3.0e-5 ppm", "abundance_solar": "5 ppb (by weight)", "allotropes": null
  },
  {
    "number": 55, "symbol": "Cs", "name": "Cesium", "atomic_mass": 132.90545196, "category": ElementCategory.AlkaliMetal, "xpos": 1, "ypos": 6, "shells": [2, 8, 18, 18, 8, 1],
    "electron_configuration": "[Xe] 6s¹", "summary": "Cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-golden alkali metal with a melting point of 28.5 °C (83.3 °F), which makes it one of only five elemental metals that are liquid at or near room temperature.",
    "discovered_by": "Robert Bunsen & Gustav Kirchhoff", "named_by": null, "phase": "Solid", "discovery_year": 1860, "density": 1.93, "boiling_point": "944 K", "melting_point": "301.7 K", "block": "s",
    "electronegativity_pauling": 0.79, "ionization_energy": "375.7 kJ/mol", "neutrons": 78, "atomic_radius": 265, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 2.09, "heat_of_vaporization": 63.9, "specific_heat": 0.242, "thermal_conductivity": 35.9, "molar_volume": 70.94, "cas_number": "7440-46-2",
    "history": "Discovered spectroscopically by Robert Bunsen and Gustav Kirchhoff in 1860 from mineral water. Its name comes from the Latin 'caesius', meaning sky-blue, due to the two blue lines in its spectrum.", "common_compounds": ["Cesium chloride (CsCl)"], "abundance_crust": "3 ppm", "abundance_solar": "0.3 ppb (by weight)", "allotropes": null
  },
  {
    "number": 56, "symbol": "Ba", "name": "Barium", "atomic_mass": 137.327, "category": ElementCategory.AlkalineEarthMetal, "xpos": 2, "ypos": 6, "shells": [2, 8, 18, 18, 8, 2],
    "electron_configuration": "[Xe] 6s²", "summary": "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in group 2 and is a soft, silvery alkaline earth metal.",
    "discovered_by": "Carl Wilhelm Scheele", "named_by": null, "phase": "Solid", "discovery_year": 1774, "density": 3.51, "boiling_point": "2170 K", "melting_point": "1000 K", "block": "s",
    "electronegativity_pauling": 0.89, "ionization_energy": "502.9 kJ/mol", "neutrons": 81, "atomic_radius": 222, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 7.12, "heat_of_vaporization": 150.9, "specific_heat": 0.204, "thermal_conductivity": 18.4, "molar_volume": 38.1, "cas_number": "7440-39-3",
    "history": "First identified in 1774 by Carl Wilhelm Scheele and extracted in 1808 by Humphry Davy. Its name derives from the alchemical derivative 'baryta', from Greek 'barys', meaning heavy.", "common_compounds": ["Barium sulfate (BaSO₄)", "Barium carbonate (BaCO₃)"], "abundance_crust": "425 ppm", "abundance_solar": "3 ppb (by weight)", "allotropes": null
  },
  {
    "number": 57, "symbol": "La", "name": "Lanthanum", "atomic_mass": 138.90547, "category": ElementCategory.Lanthanide, "xpos": 3, "ypos": 9, "shells": [2, 8, 18, 18, 9, 2],
    "electron_configuration": "[Xe] 5d¹ 6s²", "summary": "Lanthanum is a chemical element with symbol La and atomic number 57. It is a soft, ductile, silvery-white metal that tarnishes rapidly when exposed to air and is soft enough to be cut with a knife.",
    "discovered_by": "Carl Gustaf Mosander", "named_by": null, "phase": "Solid", "discovery_year": 1839, "density": 6.162, "boiling_point": "3737 K", "melting_point": "1193 K", "block": "f",
    "electronegativity_pauling": 1.1, "ionization_energy": "538.1 kJ/mol", "neutrons": 82, "atomic_radius": 187, "is_radioactive": false, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 6.2, "heat_of_vaporization": 402.1, "specific_heat": 0.195, "thermal_conductivity": 13.4, "molar_volume": 22.5, "cas_number": "7439-91-0",
    "history": "Discovered by Swedish chemist Carl Gustaf Mosander in 1839. He named it from the Ancient Greek 'lanthanein', meaning 'to lie hidden'.", "common_compounds": ["Lanthanum(III) oxide (La₂O₃)"], "abundance_crust": "39 ppm", "abundance_solar": "0.5 ppb (by weight)", "allotropes": null
  },
  {
    "number": 58, "symbol": "Ce", "name": "Cerium", "atomic_mass": 140.116, "category": ElementCategory.Lanthanide, "xpos": 4, "ypos": 9, "shells": [2, 8, 18, 19, 9, 2],
    "electron_configuration": "[Xe] 4f¹ 5d¹ 6s²", "summary": "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, ductile, and silvery-white metal that tarnishes when exposed to air, and it is soft enough to be cut with a knife.",
    "discovered_by": "Martin Heinrich Klaproth, Jöns Jacob Berzelius, & Wilhelm Hisinger", "named_by": null, "phase": "Solid", "discovery_year": 1803, "density": 6.77, "boiling_point": "3716 K", "melting_point": "1068 K", "block": "f",
    "electronegativity_pauling": 1.12, "ionization_energy": "534.4 kJ/mol", "neutrons": 82, "atomic_radius": 181, "is_radioactive": false, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 5.46, "heat_of_vaporization": 398, "specific_heat": 0.192, "thermal_conductivity": 11.3, "molar_volume": 20.69, "cas_number": "7440-45-1",
    "history": "Discovered in 1803 by Martin Klaproth and by Jöns Berzelius and Wilhelm Hisinger. It was named by Berzelius after the dwarf planet Ceres, discovered two years earlier.", "common_compounds": ["Cerium(IV) oxide (CeO₂)"], "abundance_crust": "66.5 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 59, "symbol": "Pr", "name": "Praseodymium", "atomic_mass": 140.90766, "category": ElementCategory.Lanthanide, "xpos": 5, "ypos": 9, "shells": [2, 8, 18, 21, 8, 2],
    "electron_configuration": "[Xe] 4f³ 6s²", "summary": "Praseodymium is a chemical element with symbol Pr and atomic number 59. It is the third member of the lanthanide series and is considered to be one of the rare-earth metals.",
    "discovered_by": "Carl Auer von Welsbach", "named_by": null, "phase": "Solid", "discovery_year": 1885, "density": 6.77, "boiling_point": "3793 K", "melting_point": "1208 K", "block": "f",
    "electronegativity_pauling": 1.13, "ionization_energy": "527 kJ/mol", "neutrons": 82, "atomic_radius": 182, "is_radioactive": false, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 6.89, "heat_of_vaporization": 331, "specific_heat": 0.193, "thermal_conductivity": 12.5, "molar_volume": 20.8, "cas_number": "7440-10-0",
    "history": "Discovered in 1885 by Austrian chemist Carl Auer von Welsbach. The name praseodymium comes from the Greek 'prasios', meaning green, and 'didymos', twin.", "common_compounds": ["Praseodymium(III) oxide (Pr₂O₃)"], "abundance_crust": "9.2 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 60, "symbol": "Nd", "name": "Neodymium", "atomic_mass": 144.242, "category": ElementCategory.Lanthanide, "xpos": 6, "ypos": 9, "shells": [2, 8, 18, 22, 8, 2],
    "electron_configuration": "[Xe] 4f⁴ 6s²", "summary": "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.",
    "discovered_by": "Carl Auer von Welsbach", "named_by": null, "phase": "Solid", "discovery_year": 1885, "density": 7.01, "boiling_point": "3347 K", "melting_point": "1297 K", "block": "f",
    "electronegativity_pauling": 1.14, "ionization_energy": "533.1 kJ/mol", "neutrons": 84, "atomic_radius": 181, "is_radioactive": false, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 7.14, "heat_of_vaporization": 289, "specific_heat": 0.19, "thermal_conductivity": 16.5, "molar_volume": 20.6, "cas_number": "7440-00-8",
    "history": "Discovered by Carl Auer von Welsbach in 1885. He separated it from didymium, a material previously thought to be an element. The name comes from Greek 'neos didymos', meaning new twin.", "common_compounds": ["Neodymium(III) oxide (Nd₂O₃)"], "abundance_crust": "41.5 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 61, "symbol": "Pm", "name": "Promethium", "atomic_mass": 145, "category": ElementCategory.Lanthanide, "xpos": 7, "ypos": 9, "shells": [2, 8, 18, 23, 8, 2],
    "electron_configuration": "[Xe] 4f⁵ 6s²", "summary": "Promethium is a chemical element with symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms.",
    "discovered_by": "Jacob A. Marinsky, Lawrence E. Glendenin, & Charles D. Coryell", "named_by": null, "phase": "Solid", "discovery_year": 1945, "density": 7.26, "boiling_point": "3273 K", "melting_point": "1315 K", "block": "f",
    "electronegativity_pauling": 1.13, "ionization_energy": "540 kJ/mol", "neutrons": 84, "atomic_radius": 183, "is_radioactive": true, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 7.13, "heat_of_vaporization": 289, "specific_heat": 0.18, "thermal_conductivity": 17.9, "molar_volume": 20.23, "cas_number": "7440-12-2",
    "history": "Its existence was predicted in 1902, but it was first produced and characterized in 1945 by Jacob A. Marinsky et al. at Oak Ridge National Laboratory. It was named after the Titan Prometheus from Greek mythology who stole fire from the gods and gave it to humans.", "common_compounds": ["Promethium(III) oxide (Pm₂O₃)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 62, "symbol": "Sm", "name": "Samarium", "atomic_mass": 150.36, "category": ElementCategory.Lanthanide, "xpos": 8, "ypos": 9, "shells": [2, 8, 18, 24, 8, 2],
    "electron_configuration": "[Xe] 4f⁶ 6s²", "summary": "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that slowly oxidizes in air.",
    "discovered_by": "Lecoq de Boisbaudran", "named_by": null, "phase": "Solid", "discovery_year": 1879, "density": 7.52, "boiling_point": "2067 K", "melting_point": "1345 K", "block": "f",
    "electronegativity_pauling": 1.17, "ionization_energy": "544.5 kJ/mol", "neutrons": 88, "atomic_radius": 180, "is_radioactive": false, "crystal_structure": "Rhombohedral", "magnetic_ordering": "Antiferromagnetic", "heat_of_fusion": 8.62, "heat_of_vaporization": 175, "specific_heat": 0.197, "thermal_conductivity": 13.3, "molar_volume": 19.98, "cas_number": "7440-19-9",
    "history": "Discovered in 1879 by French chemist Paul-Émile Lecoq de Boisbaudran and named after the mineral samarskite, from which it was isolated. The mineral itself was earlier named after a Russian mine official, Colonel Vassili Samarsky-Bykhovets.", "common_compounds": ["Samarium(III) oxide (Sm₂O₃)"], "abundance_crust": "7.05 ppm", "abundance_solar": "0.3 ppb (by weight)", "allotropes": null
  },
  {
    "number": 63, "symbol": "Eu", "name": "Europium", "atomic_mass": 151.964, "category": ElementCategory.Lanthanide, "xpos": 9, "ypos": 9, "shells": [2, 8, 18, 25, 8, 2],
    "electron_configuration": "[Xe] 4f⁷ 6s²", "summary": "Europium is a chemical element with symbol Eu and atomic number 63. It is a moderately hard, silvery metal which readily oxidizes in air and water.",
    "discovered_by": "Eugène-Anatole Demarçay", "named_by": null, "phase": "Solid", "discovery_year": 1901, "density": 5.264, "boiling_point": "1802 K", "melting_point": "1099 K", "block": "f",
    "electronegativity_pauling": 1.2, "ionization_energy": "547.1 kJ/mol", "neutrons": 89, "atomic_radius": 180, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 9.21, "heat_of_vaporization": 176, "specific_heat": 0.182, "thermal_conductivity": 13.9, "molar_volume": 28.9, "cas_number": "7440-53-1",
    "history": "First observed in 1890, it was isolated in 1901 by Eugène-Anatole Demarçay, who named it after the continent of Europe.", "common_compounds": ["Europium(III) oxide (Eu₂O₃)"], "abundance_crust": "2 ppm", "abundance_solar": "0.1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 64, "symbol": "Gd", "name": "Gadolinium", "atomic_mass": 157.25, "category": ElementCategory.Lanthanide, "xpos": 10, "ypos": 9, "shells": [2, 8, 18, 25, 9, 2],
    "electron_configuration": "[Xe] 4f⁷ 5d¹ 6s²", "summary": "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable, and ductile rare-earth metal.",
    "discovered_by": "Jean Charles Galissard de Marignac", "named_by": null, "phase": "Solid", "discovery_year": 1880, "density": 7.9, "boiling_point": "3546 K", "melting_point": "1585 K", "block": "f",
    "electronegativity_pauling": 1.2, "ionization_energy": "593.4 kJ/mol", "neutrons": 93, "atomic_radius": 180, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Ferromagnetic", "heat_of_fusion": 10.05, "heat_of_vaporization": 301.3, "specific_heat": 0.236, "thermal_conductivity": 10.5, "molar_volume": 19.9, "cas_number": "7440-54-2",
    "history": "Discovered in 1880 by Jean Charles de Marignac, who detected its oxide by using spectroscopy. It is named for the mineral gadolinite, one of the minerals in which gadolinium is found, in turn named for the chemist Johan Gadolin.", "common_compounds": ["Gadolinium(III) oxide (Gd₂O₃)"], "abundance_crust": "6.2 ppm", "abundance_solar": "0.4 ppb (by weight)", "allotropes": null
  },
  {
    "number": 65, "symbol": "Tb", "name": "Terbium", "atomic_mass": 158.92535, "category": ElementCategory.Lanthanide, "xpos": 11, "ypos": 9, "shells": [2, 8, 18, 27, 8, 2],
    "electron_configuration": "[Xe] 4f⁹ 6s²", "summary": "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white, rare earth metal that is malleable, ductile, and soft enough to be cut with a knife.",
    "discovered_by": "Carl Gustaf Mosander", "named_by": null, "phase": "Solid", "discovery_year": 1843, "density": 8.23, "boiling_point": "3503 K", "melting_point": "1629 K", "block": "f",
    "electronegativity_pauling": 1.2, "ionization_energy": "565.8 kJ/mol", "neutrons": 94, "atomic_radius": 177, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 10.15, "heat_of_vaporization": 293, "specific_heat": 0.182, "thermal_conductivity": 11.1, "molar_volume": 19.3, "cas_number": "7440-27-9",
    "history": "Discovered by Swedish chemist Carl Gustaf Mosander in 1843 as an impurity in yttrium oxide. Its name is derived from Ytterby, a village in Sweden.", "common_compounds": ["Terbium(III) oxide (Tb₂O₃)"], "abundance_crust": "1.2 ppm", "abundance_solar": "0.05 ppb (by weight)", "allotropes": null
  },
  {
    "number": 66, "symbol": "Dy", "name": "Dysprosium", "atomic_mass": 162.5, "category": ElementCategory.Lanthanide, "xpos": 12, "ypos": 9, "shells": [2, 8, 18, 28, 8, 2],
    "electron_configuration": "[Xe] 4f¹⁰ 6s²", "summary": "Dysprosium is a chemical element with symbol Dy and atomic number 66. It is a rare earth element with a metallic, bright silver luster.",
    "discovered_by": "Lecoq de Boisbaudran", "named_by": null, "phase": "Solid", "discovery_year": 1886, "density": 8.54, "boiling_point": "2840 K", "melting_point": "1680 K", "block": "f",
    "electronegativity_pauling": 1.22, "ionization_energy": "573.0 kJ/mol", "neutrons": 97, "atomic_radius": 178, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 11.06, "heat_of_vaporization": 280, "specific_heat": 0.17, "thermal_conductivity": 10.7, "molar_volume": 19.01, "cas_number": "7429-91-6",
    "history": "First identified in Paris in 1886 by French chemist Paul Émile Lecoq de Boisbaudran. Its name is derived from the Greek 'dysprositos', meaning 'hard to get'.", "common_compounds": ["Dysprosium(III) oxide (Dy₂O₃)"], "abundance_crust": "5.2 ppm", "abundance_solar": "0.3 ppb (by weight)", "allotropes": null
  },
  {
    "number": 67, "symbol": "Ho", "name": "Holmium", "atomic_mass": 164.93033, "category": ElementCategory.Lanthanide, "xpos": 13, "ypos": 9, "shells": [2, 8, 18, 29, 8, 2],
    "electron_configuration": "[Xe] 4f¹¹ 6s²", "summary": "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare-earth element.",
    "discovered_by": "Jacques-Louis Soret & Marc Delafontaine", "named_by": null, "phase": "Solid", "discovery_year": 1878, "density": 8.79, "boiling_point": "2993 K", "melting_point": "1734 K", "block": "f",
    "electronegativity_pauling": 1.23, "ionization_energy": "581.0 kJ/mol", "neutrons": 98, "atomic_radius": 176, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 17.0, "heat_of_vaporization": 265, "specific_heat": 0.165, "thermal_conductivity": 16.2, "molar_volume": 18.7, "cas_number": "7440-60-0",
    "history": "Discovered by Marc Delafontaine and Jacques-Louis Soret in 1878. It was named after the city of Stockholm (in Latin, 'Holmia'), the native city of one of its discoverers.", "common_compounds": ["Holmium(III) oxide (Ho₂O₃)"], "abundance_crust": "1.3 ppm", "abundance_solar": "0.1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 68, "symbol": "Er", "name": "Erbium", "atomic_mass": 167.259, "category": ElementCategory.Lanthanide, "xpos": 14, "ypos": 9, "shells": [2, 8, 18, 30, 8, 2],
    "electron_configuration": "[Xe] 4f¹² 6s²", "summary": "Erbium is a chemical element with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements.",
    "discovered_by": "Carl Gustaf Mosander", "named_by": null, "phase": "Solid", "discovery_year": 1843, "density": 9.066, "boiling_point": "3141 K", "melting_point": "1802 K", "block": "f",
    "electronegativity_pauling": 1.24, "ionization_energy": "589.3 kJ/mol", "neutrons": 99, "atomic_radius": 176, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 19.90, "heat_of_vaporization": 280, "specific_heat": 0.168, "thermal_conductivity": 14.5, "molar_volume": 18.4, "cas_number": "7440-52-0",
    "history": "Discovered by Carl Gustaf Mosander in 1843. Mosander separated 'yttria' from the mineral gadolinite into three fractions which he called yttria, erbia, and terbia. He named the new element after the village of Ytterby where large concentrations of yttria and erbium are located.", "common_compounds": ["Erbium(III) oxide (Er₂O₃)"], "abundance_crust": "3.5 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 69, "symbol": "Tm", "name": "Thulium", "atomic_mass": 168.93422, "category": ElementCategory.Lanthanide, "xpos": 15, "ypos": 9, "shells": [2, 8, 18, 31, 8, 2],
    "electron_configuration": "[Xe] 4f¹³ 6s²", "summary": "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and third-to-last element in the lanthanide series.",
    "discovered_by": "Per Teodor Cleve", "named_by": null, "phase": "Solid", "discovery_year": 1879, "density": 9.32, "boiling_point": "2223 K", "melting_point": "1818 K", "block": "f",
    "electronegativity_pauling": 1.25, "ionization_energy": "596.7 kJ/mol", "neutrons": 100, "atomic_radius": 175, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 16.84, "heat_of_vaporization": 247, "specific_heat": 0.16, "thermal_conductivity": 16.9, "molar_volume": 18.1, "cas_number": "7440-30-4",
    "history": "Discovered by Swedish chemist Per Teodor Cleve in 1879. He named it after Thule, an ancient name for Scandinavia.", "common_compounds": ["Thulium(III) oxide (Tm₂O₃)"], "abundance_crust": "0.52 ppm", "abundance_solar": "0.03 ppb (by weight)", "allotropes": null
  },
  {
    "number": 70, "symbol": "Yb", "name": "Ytterbium", "atomic_mass": 173.045, "category": ElementCategory.Lanthanide, "xpos": 16, "ypos": 9, "shells": [2, 8, 18, 32, 8, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 6s²", "summary": "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state.",
    "discovered_by": "Jean Charles Galissard de Marignac", "named_by": null, "phase": "Solid", "discovery_year": 1878, "density": 6.9, "boiling_point": "1469 K", "melting_point": "1097 K", "block": "f",
    "electronegativity_pauling": 1.1, "ionization_energy": "603.4 kJ/mol", "neutrons": 103, "atomic_radius": 175, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 7.66, "heat_of_vaporization": 159, "specific_heat": 0.155, "thermal_conductivity": 38.5, "molar_volume": 24.84, "cas_number": "7440-64-4",
    "history": "Discovered by the Swiss chemist Jean Charles Galissard de Marignac in 1878. Marignac found a new component in the earth then known as erbia, and he named it ytterbia, for Ytterby, the village in Sweden near where he found the new component of erbium.", "common_compounds": ["Ytterbium(III) oxide (Yb₂O₃)"], "abundance_crust": "3.2 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 71, "symbol": "Lu", "name": "Lutetium", "atomic_mass": 174.9668, "category": ElementCategory.Lanthanide, "xpos": 17, "ypos": 9, "shells": [2, 8, 18, 32, 9, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹ 6s²", "summary": "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry air, but not in moist air.",
    "discovered_by": "Georges Urbain, Carl Auer von Welsbach, & Charles James", "named_by": null, "phase": "Solid", "discovery_year": 1907, "density": 9.841, "boiling_point": "3675 K", "melting_point": "1925 K", "block": "d",
    "electronegativity_pauling": 1.27, "ionization_energy": "523.5 kJ/mol", "neutrons": 104, "atomic_radius": 173, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 22, "heat_of_vaporization": 414, "specific_heat": 0.154, "thermal_conductivity": 16.4, "molar_volume": 17.78, "cas_number": "7439-94-3",
    "history": "Discovered independently in 1907 by French scientist Georges Urbain, Austrian mineralogist Baron Carl Auer von Welsbach, and American chemist Charles James. It is named after Lutetia, the ancient Roman name for Paris.", "common_compounds": ["Lutetium(III) oxide (Lu₂O₃)"], "abundance_crust": "0.8 ppm", "abundance_solar": "0.03 ppb (by weight)", "allotropes": null
  },
  {
    "number": 72, "symbol": "Hf", "name": "Hafnium", "atomic_mass": 178.49, "category": ElementCategory.TransitionMetal, "xpos": 4, "ypos": 6, "shells": [2, 8, 18, 32, 10, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d² 6s²", "summary": "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in many zirconium minerals.",
    "discovered_by": "Dirk Coster & Georg von Hevesy", "named_by": null, "phase": "Solid", "discovery_year": 1923, "density": 13.31, "boiling_point": "4876 K", "melting_point": "2506 K", "block": "d",
    "electronegativity_pauling": 1.3, "ionization_energy": "658.5 kJ/mol", "neutrons": 106, "atomic_radius": 159, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 27.2, "heat_of_vaporization": 571, "specific_heat": 0.144, "thermal_conductivity": 23.0, "molar_volume": 13.44, "cas_number": "7440-58-6",
    "history": "Its existence was predicted by Dmitri Mendeleev in 1869. It was discovered by Dirk Coster and Georg von Hevesy in 1923 in Copenhagen, Denmark. The name Hafnium comes from Hafnia, the Latin name for Copenhagen.", "common_compounds": ["Hafnium(IV) oxide (HfO₂)"], "abundance_crust": "3.3 ppm", "abundance_solar": "0.1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 73, "symbol": "Ta", "name": "Tantalum", "atomic_mass": 180.94788, "category": ElementCategory.TransitionMetal, "xpos": 5, "ypos": 6, "shells": [2, 8, 18, 32, 11, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d³ 6s²", "summary": "Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology.",
    "discovered_by": "Anders Gustaf Ekeberg", "named_by": null, "phase": "Solid", "discovery_year": 1802, "density": 16.69, "boiling_point": "5731 K", "melting_point": "3290 K", "block": "d",
    "electronegativity_pauling": 1.5, "ionization_energy": "761 kJ/mol", "neutrons": 108, "atomic_radius": 146, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 36.57, "heat_of_vaporization": 732.8, "specific_heat": 0.14, "thermal_conductivity": 57.5, "molar_volume": 10.85, "cas_number": "7440-25-7",
    "history": "Discovered in Sweden in 1802 by Anders Ekeberg. It was named after Tantalus, a figure from Greek mythology, because of the difficulty in dissolving its oxide in acid.", "common_compounds": ["Tantalum pentoxide (Ta₂O₅)"], "abundance_crust": "2 ppm", "abundance_solar": "0.02 ppb (by weight)", "allotropes": null
  },
  {
    "number": 74, "symbol": "W", "name": "Tungsten", "atomic_mass": 183.84, "category": ElementCategory.TransitionMetal, "xpos": 6, "ypos": 6, "shells": [2, 8, 18, 32, 12, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d⁴ 6s²", "summary": "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone.",
    "discovered_by": "Fausto & Juan José Elhuyar", "named_by": null, "phase": "Solid", "discovery_year": 1783, "density": 19.25, "boiling_point": "5828 K", "melting_point": "3695 K", "block": "d",
    "electronegativity_pauling": 2.36, "ionization_energy": "770 kJ/mol", "neutrons": 110, "atomic_radius": 139, "is_radioactive": false, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 35.3, "heat_of_vaporization": 806.7, "specific_heat": 0.132, "thermal_conductivity": 173, "molar_volume": 9.47, "cas_number": "7440-33-7",
    "history": "Identified as a new element in 1781, and first isolated as a metal in 1783 by two Spanish brothers. Its symbol W is from its other name, wolfram, which comes from the mineral wolframite.", "common_compounds": ["Tungsten carbide (WC)", "Tungsten(VI) oxide (WO₃)"], "abundance_crust": "1.3 ppm", "abundance_solar": "0.1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 75, "symbol": "Re", "name": "Rhenium", "atomic_mass": 186.207, "category": ElementCategory.TransitionMetal, "xpos": 7, "ypos": 6, "shells": [2, 8, 18, 32, 13, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d⁵ 6s²", "summary": "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table.",
    "discovered_by": "Walter Noddack, Ida Tacke, & Otto Berg", "named_by": null, "phase": "Solid", "discovery_year": 1925, "density": 21.02, "boiling_point": "5869 K", "melting_point": "3459 K", "block": "d",
    "electronegativity_pauling": 1.9, "ionization_energy": "760 kJ/mol", "neutrons": 111, "atomic_radius": 137, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 33.2, "heat_of_vaporization": 704, "specific_heat": 0.137, "thermal_conductivity": 48, "molar_volume": 8.86, "cas_number": "7440-15-5",
    "history": "The last stable element to be discovered. It was found in 1925 by Walter Noddack, Ida Tacke, and Otto Berg. It was named after the Rhine river in Europe.", "common_compounds": ["Rhenium(VII) oxide (Re₂O₇)"], "abundance_crust": "7.0e-4 ppm", "abundance_solar": "0.05 ppb (by weight)", "allotropes": null
  },
  {
    "number": 76, "symbol": "Os", "name": "Osmium", "atomic_mass": 190.23, "category": ElementCategory.TransitionMetal, "xpos": 8, "ypos": 6, "shells": [2, 8, 18, 32, 14, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d⁶ 6s²", "summary": "Osmium is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores.",
    "discovered_by": "Smithson Tennant", "named_by": null, "phase": "Solid", "discovery_year": 1803, "density": 22.59, "boiling_point": "5285 K", "melting_point": "3306 K", "block": "d",
    "electronegativity_pauling": 2.2, "ionization_energy": "840 kJ/mol", "neutrons": 114, "atomic_radius": 135, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 57.85, "heat_of_vaporization": 738, "specific_heat": 0.13, "thermal_conductivity": 87.6, "molar_volume": 8.43, "cas_number": "7440-04-2",
    "history": "Discovered in 1803 by Smithson Tennant in London. He named it from the Greek 'osme' meaning 'smell', from the pungent odor of its volatile tetroxide.", "common_compounds": ["Osmium tetroxide (OsO₄)"], "abundance_crust": "0.0015 ppm", "abundance_solar": "0.7 ppb (by weight)", "allotropes": null
  },
  {
    "number": 77, "symbol": "Ir", "name": "Iridium", "atomic_mass": 192.217, "category": ElementCategory.TransitionMetal, "xpos": 9, "ypos": 6, "shells": [2, 8, 18, 32, 15, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d⁷ 6s²", "summary": "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is the second-densest element (after osmium) and is the most corrosion-resistant metal, even at temperatures as high as 2000 °C.",
    "discovered_by": "Smithson Tennant", "named_by": null, "phase": "Solid", "discovery_year": 1803, "density": 22.56, "boiling_point": "4701 K", "melting_point": "2719 K", "block": "d",
    "electronegativity_pauling": 2.20, "ionization_energy": "880 kJ/mol", "neutrons": 115, "atomic_radius": 136, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 41.12, "heat_of_vaporization": 563, "specific_heat": 0.131, "thermal_conductivity": 147, "molar_volume": 8.52, "cas_number": "7439-88-5",
    "history": "Discovered in 1803 by Smithson Tennant. He named it after the Latin 'iris', meaning 'rainbow', because many of its salts are brightly colored.", "common_compounds": ["Iridium(IV) oxide (IrO₂)"], "abundance_crust": "0.001 ppm", "abundance_solar": "0.7 ppb (by weight)", "allotropes": null
  },
  {
    "number": 78, "symbol": "Pt", "name": "Platinum", "atomic_mass": 195.084, "category": ElementCategory.TransitionMetal, "xpos": 10, "ypos": 6, "shells": [2, 8, 18, 32, 17, 1],
    "electron_configuration": "[Xe] 4f¹⁴ 5d⁹ 6s¹", "summary": "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal.",
    "discovered_by": "Antonio de Ulloa", "named_by": null, "phase": "Solid", "discovery_year": 1735, "density": 21.45, "boiling_point": "4098 K", "melting_point": "2041.4 K", "block": "d",
    "electronegativity_pauling": 2.28, "ionization_energy": "870 kJ/mol", "neutrons": 117, "atomic_radius": 139, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 22.17, "heat_of_vaporization": 469, "specific_heat": 0.133, "thermal_conductivity": 71.6, "molar_volume": 9.09, "cas_number": "7440-06-4",
    "history": "Known by pre-Columbian South American natives. Its first European reference was in 1557. It was named from the Spanish 'platina', meaning 'little silver'.", "common_compounds": ["Chloroplatinic acid (H₂PtCl₆)"], "abundance_crust": "0.005 ppm", "abundance_solar": "1 ppb (by weight)", "allotropes": null
  },
  {
    "number": 79, "symbol": "Au", "name": "Gold", "atomic_mass": 196.96657, "category": ElementCategory.TransitionMetal, "xpos": 11, "ypos": 6, "shells": [2, 8, 18, 32, 18, 1],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "summary": "Gold is a chemical element with symbol Au and atomic number 79, making it one of the higher atomic number elements that occur naturally. In a pure form, it is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 19.3, "boiling_point": "3129 K", "melting_point": "1337.33 K", "block": "d",
    "electronegativity_pauling": 2.54, "ionization_energy": "890.1 kJ/mol", "neutrons": 118, "atomic_radius": 144, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 12.55, "heat_of_vaporization": 324, "specific_heat": 0.129, "thermal_conductivity": 318, "molar_volume": 10.21, "cas_number": "7440-57-5",
    "history": "Known since antiquity. Its symbol Au is from its Latin name 'aurum'.", "common_compounds": ["Gold(III) chloride (AuCl₃)"], "abundance_crust": "0.004 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 80, "symbol": "Hg", "name": "Mercury", "atomic_mass": 200.592, "category": ElementCategory.TransitionMetal, "xpos": 12, "ypos": 6, "shells": [2, 8, 18, 32, 18, 2],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s²", "summary": "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Liquid", "discovery_year": null, "density": 13.534, "boiling_point": "629.88 K", "melting_point": "234.321 K", "block": "d",
    "electronegativity_pauling": 2.00, "ionization_energy": "1007.1 kJ/mol", "neutrons": 121, "atomic_radius": 151, "is_radioactive": false, "crystal_structure": "Rhombohedral", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 2.29, "heat_of_vaporization": 59.11, "specific_heat": 0.14, "thermal_conductivity": 8.3, "molar_volume": 14.09, "cas_number": "7439-97-6",
    "history": "Known to ancient Chinese, Hindus and found in Egyptian tombs from 1500 BC. Its symbol Hg comes from its Greek name, 'hydrargyrum', which means 'water-silver'.", "common_compounds": ["Mercury(II) sulfide (HgS)", "Mercury(I) chloride (Hg₂Cl₂)"], "abundance_crust": "0.085 ppm", "abundance_solar": "0.06 ppb (by weight)", "allotropes": null
  },
  {
    "number": 81, "symbol": "Tl", "name": "Thallium", "atomic_mass": 204.38, "category": ElementCategory.PostTransitionMetal, "xpos": 13, "ypos": 6, "shells": [2, 8, 18, 32, 18, 3],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", "summary": "Thallium is a chemical element with symbol Tl and atomic number 81. It is a gray post-transition metal that is not found free in nature.",
    "discovered_by": "William Crookes & Claude-Auguste Lamy", "named_by": null, "phase": "Solid", "discovery_year": 1861, "density": 11.85, "boiling_point": "1746 K", "melting_point": "577 K", "block": "p",
    "electronegativity_pauling": 1.62, "ionization_energy": "589.4 kJ/mol", "neutrons": 123, "atomic_radius": 170, "is_radioactive": false, "crystal_structure": "Hexagonal close-packed", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 4.14, "heat_of_vaporization": 165.1, "specific_heat": 0.129, "thermal_conductivity": 46.1, "molar_volume": 17.2, "cas_number": "7440-28-0",
    "history": "Discovered spectroscopically in 1861 by William Crookes. Its name comes from the Greek 'thallos', meaning a green shoot or twig, due to the bright green emission line in its spectrum.", "common_compounds": ["Thallium(I) sulfate (Tl₂SO₄)"], "abundance_crust": "0.85 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 82, "symbol": "Pb", "name": "Lead", "atomic_mass": 207.2, "category": ElementCategory.PostTransitionMetal, "xpos": 14, "ypos": 6, "shells": [2, 8, 18, 32, 18, 4],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", "summary": "Lead is a chemical element with symbol Pb and atomic number 82. It is a heavy metal that is denser than most common materials.",
    "discovered_by": "Ancient civilizations", "named_by": null, "phase": "Solid", "discovery_year": null, "density": 11.34, "boiling_point": "2022 K", "melting_point": "600.61 K", "block": "p",
    "electronegativity_pauling": 2.33, "ionization_energy": "715.6 kJ/mol", "neutrons": 125, "atomic_radius": 175, "is_radioactive": false, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 4.77, "heat_of_vaporization": 179.5, "specific_heat": 0.129, "thermal_conductivity": 35.3, "molar_volume": 18.26, "cas_number": "7439-92-1",
    "history": "Known since antiquity. Its symbol Pb is from its Latin name 'plumbum'.", "common_compounds": ["Lead(II) oxide (PbO)", "Lead(II) sulfide (PbS)"], "abundance_crust": "14 ppm", "abundance_solar": "3 ppb (by weight)", "allotropes": null
  },
  {
    "number": 83, "symbol": "Bi", "name": "Bismuth", "atomic_mass": 208.9804, "category": ElementCategory.PostTransitionMetal, "xpos": 15, "ypos": 6, "shells": [2, 8, 18, 32, 18, 5],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", "summary": "Bismuth is a chemical element with symbol Bi and atomic number 83. It is a post-transition metal and one of the pnictogens with chemical properties resembling its lighter group 15 siblings arsenic and antimony.",
    "discovered_by": "Claude François Geoffroy", "named_by": null, "phase": "Solid", "discovery_year": 1753, "density": 9.78, "boiling_point": "1837 K", "melting_point": "544.7 K", "block": "p",
    "electronegativity_pauling": 2.02, "ionization_energy": "703 kJ/mol", "neutrons": 126, "atomic_radius": 156, "is_radioactive": false, "crystal_structure": "Rhombohedral", "magnetic_ordering": "Diamagnetic", "heat_of_fusion": 11.3, "heat_of_vaporization": 179, "specific_heat": 0.122, "thermal_conductivity": 7.97, "molar_volume": 21.3, "cas_number": "7440-69-9",
    "history": "Known since ancient times, but often confused with lead and tin. It was shown to be a distinct element in 1753 by French chemist Claude François Geoffroy.", "common_compounds": ["Bismuth(III) oxide (Bi₂O₃)"], "abundance_crust": "0.0085 ppm", "abundance_solar": "0.2 ppb (by weight)", "allotropes": null
  },
  {
    "number": 84, "symbol": "Po", "name": "Polonium", "atomic_mass": 209, "category": ElementCategory.PostTransitionMetal, "xpos": 16, "ypos": 6, "shells": [2, 8, 18, 32, 18, 6],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", "summary": "Polonium is a chemical element with symbol Po and atomic number 84. A rare and highly radioactive metal with no stable isotopes, polonium is chemically similar to bismuth and tellurium.",
    "discovered_by": "Marie & Pierre Curie", "named_by": null, "phase": "Solid", "discovery_year": 1898, "density": 9.196, "boiling_point": "1235 K", "melting_point": "527 K", "block": "p",
    "electronegativity_pauling": 2.0, "ionization_energy": "812.1 kJ/mol", "neutrons": 125, "atomic_radius": 167, "is_radioactive": true, "crystal_structure": "Simple cubic", "magnetic_ordering": "Non-magnetic", "heat_of_fusion": 13, "heat_of_vaporization": 102.9, "specific_heat": 0.125, "thermal_conductivity": 20, "molar_volume": 22.97, "cas_number": "7440-08-6",
    "history": "Discovered by Marie and Pierre Curie in 1898, and was named after Marie's native land of Poland (Polonia in Latin).", "common_compounds": ["Polonium dioxide (PoO₂)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": ["α-Po", "β-Po"]
  },
  {
    "number": 85, "symbol": "At", "name": "Astatine", "atomic_mass": 210, "category": ElementCategory.Metalloid, "xpos": 17, "ypos": 6, "shells": [2, 8, 18, 32, 18, 7],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", "summary": "Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It is the heaviest of the halogens.",
    "discovered_by": "Dale R. Corson, Kenneth Ross MacKenzie, & Emilio Segrè", "named_by": null, "phase": "Solid", "discovery_year": 1940, "density": 7, "boiling_point": "610 K", "melting_point": "575 K", "block": "p",
    "electronegativity_pauling": 2.2, "ionization_energy": "899.0 kJ/mol", "neutrons": 125, "atomic_radius": 140, "is_radioactive": true, "crystal_structure": "Face-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": 11.6, "heat_of_vaporization": 40, "specific_heat": null, "thermal_conductivity": 1.7, "molar_volume": null, "cas_number": "7440-68-8",
    "history": "Synthesized in 1940 by Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè at the University of California, Berkeley. Its name comes from the Greek 'astatos', meaning unstable.", "common_compounds": null, "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 86, "symbol": "Rn", "name": "Radon", "atomic_mass": 222, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 6, "shells": [2, 8, 18, 32, 18, 8],
    "electron_configuration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", "summary": "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas.",
    "discovered_by": "Friedrich Ernst Dorn", "named_by": null, "phase": "Gas", "discovery_year": 1900, "density": 9.73, "boiling_point": "211.5 K", "melting_point": "202 K", "block": "p",
    "electronegativity_pauling": 2.2, "ionization_energy": "1037 kJ/mol", "neutrons": 136, "atomic_radius": 145, "is_radioactive": true, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Non-magnetic", "heat_of_fusion": 3.247, "heat_of_vaporization": 16.4, "specific_heat": 0.094, "thermal_conductivity": 0.00361, "molar_volume": null, "cas_number": "10043-92-2",
    "history": "Discovered in 1900 by Friedrich Ernst Dorn. In 1908, William Ramsay and Robert Whytlaw-Gray named it niton (from Latin 'nitens' meaning shining), but in 1923, the name was changed to radon.", "common_compounds": ["Radon difluoride (RnF₂)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 87, "symbol": "Fr", "name": "Francium", "atomic_mass": 223, "category": ElementCategory.AlkaliMetal, "xpos": 1, "ypos": 7, "shells": [2, 8, 18, 32, 18, 8, 1],
    "electron_configuration": "[Rn] 7s¹", "summary": "Francium is a chemical element with symbol Fr and atomic number 87. It is extremely radioactive; its most stable isotope, francium-223, has a half-life of only 22 minutes.",
    "discovered_by": "Marguerite Perey", "named_by": null, "phase": "Solid", "discovery_year": 1939, "density": 1.87, "boiling_point": "950 K", "melting_point": "300 K", "block": "s",
    "electronegativity_pauling": 0.7, "ionization_energy": "380 kJ/mol", "neutrons": 136, "atomic_radius": 270, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": 2, "heat_of_vaporization": 65, "specific_heat": null, "thermal_conductivity": 15, "molar_volume": null, "cas_number": "7440-73-5",
    "history": "Discovered by Marguerite Perey in 1939. It was named after France, her home country. It was the last element first discovered in nature, rather than by synthesis.", "common_compounds": null, "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 88, "symbol": "Ra", "name": "Radium", "atomic_mass": 226, "category": ElementCategory.AlkalineEarthMetal, "xpos": 2, "ypos": 7, "shells": [2, 8, 18, 32, 18, 8, 2],
    "electron_configuration": "[Rn] 7s²", "summary": "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals.",
    "discovered_by": "Marie & Pierre Curie", "named_by": null, "phase": "Solid", "discovery_year": 1898, "density": 5.5, "boiling_point": "2010 K", "melting_point": "973 K", "block": "s",
    "electronegativity_pauling": 0.9, "ionization_energy": "509.3 kJ/mol", "neutrons": 138, "atomic_radius": 220, "is_radioactive": true, "crystal_structure": "Body-centered cubic", "magnetic_ordering": "Non-magnetic", "heat_of_fusion": 8.5, "heat_of_vaporization": 113, "specific_heat": 0.094, "thermal_conductivity": 18.6, "molar_volume": 41, "cas_number": "7440-14-4",
    "history": "Discovered by Marie and Pierre Curie in 1898. They extracted the radium compound from uraninite. It was named from the Latin 'radius', meaning 'ray', in recognition of its power of emitting energy in the form of rays.", "common_compounds": ["Radium chloride (RaCl₂)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 89, "symbol": "Ac", "name": "Actinium", "atomic_mass": 227, "category": ElementCategory.Actinide, "xpos": 3, "ypos": 10, "shells": [2, 8, 18, 32, 18, 9, 2],
    "electron_configuration": "[Rn] 6d¹ 7s²", "summary": "Actinium is a radioactive chemical element with symbol Ac and atomic number 89. It was the first non-primordial radioactive element to be isolated.",
    "discovered_by": "André-Louis Debierne", "named_by": null, "phase": "Solid", "discovery_year": 1899, "density": 10, "boiling_point": "3471 K", "melting_point": "1323 K", "block": "f",
    "electronegativity_pauling": 1.1, "ionization_energy": "499 kJ/mol", "neutrons": 138, "atomic_radius": 188, "is_radioactive": true, "crystal_structure": "Face-centered cubic", "magnetic_ordering": null, "heat_of_fusion": 14, "heat_of_vaporization": 400, "specific_heat": 0.12, "thermal_conductivity": 12, "molar_volume": 22.55, "cas_number": "7440-34-8",
    "history": "Discovered in 1899 by André-Louis Debierne. Its name is derived from Greek 'aktis, aktinos', meaning beam or ray.", "common_compounds": ["Actinium(III) oxide (Ac₂O₃)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 90, "symbol": "Th", "name": "Thorium", "atomic_mass": 232.0377, "category": ElementCategory.Actinide, "xpos": 4, "ypos": 10, "shells": [2, 8, 18, 32, 18, 10, 2],
    "electron_configuration": "[Rn] 6d² 7s²", "summary": "Thorium is a radioactive actinide metal of chemical element with symbol Th and atomic number 90.",
    "discovered_by": "Jöns Jacob Berzelius", "named_by": null, "phase": "Solid", "discovery_year": 1829, "density": 11.724, "boiling_point": "5061 K", "melting_point": "2115 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "587 kJ/mol", "neutrons": 142, "atomic_radius": 179, "is_radioactive": true, "crystal_structure": "Face-centered cubic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 13.81, "heat_of_vaporization": 514, "specific_heat": 0.113, "thermal_conductivity": 54, "molar_volume": 19.8, "cas_number": "7440-29-1",
    "history": "Discovered in 1829 by Jöns Jacob Berzelius and named after Thor, the Norse god of thunder.", "common_compounds": ["Thorium dioxide (ThO₂)"], "abundance_crust": "9.6 ppm", "abundance_solar": "0.04 ppb (by weight)", "allotropes": null
  },
  {
    "number": 91, "symbol": "Pa", "name": "Protactinium", "atomic_mass": 231.03588, "category": ElementCategory.Actinide, "xpos": 5, "ypos": 10, "shells": [2, 8, 18, 32, 20, 9, 2],
    "electron_configuration": "[Rn] 5f² 6d¹ 7s²", "summary": "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray actinide metal which readily reacts with oxygen, water vapor and inorganic acids.",
    "discovered_by": "Kasimir Fajans & Oswald Helmuth Göhring", "named_by": null, "phase": "Solid", "discovery_year": 1913, "density": 15.37, "boiling_point": "4300 K", "melting_point": "1841 K", "block": "f",
    "electronegativity_pauling": 1.5, "ionization_energy": "568 kJ/mol", "neutrons": 140, "atomic_radius": 163, "is_radioactive": true, "crystal_structure": "Tetragonal", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 12.34, "heat_of_vaporization": 481, "specific_heat": 0.12, "thermal_conductivity": 47, "molar_volume": 15.18, "cas_number": "7440-13-3",
    "history": "First identified in 1913 by Kasimir Fajans and Oswald Göhring. The name means 'parent of actinium', as actinium is a decay product of protactinium.", "common_compounds": ["Protactinium(V) oxide (Pa₂O₅)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 92, "symbol": "U", "name": "Uranium", "atomic_mass": 238.02891, "category": ElementCategory.Actinide, "xpos": 6, "ypos": 10, "shells": [2, 8, 18, 32, 21, 9, 2],
    "electron_configuration": "[Rn] 5f³ 6d¹ 7s²", "summary": "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-grey metal in the actinide series of the periodic table.",
    "discovered_by": "Martin Heinrich Klaproth", "named_by": null, "phase": "Solid", "discovery_year": 1789, "density": 19.1, "boiling_point": "4404 K", "melting_point": "1405.3 K", "block": "f",
    "electronegativity_pauling": 1.38, "ionization_energy": "597.6 kJ/mol", "neutrons": 146, "atomic_radius": 156, "is_radioactive": true, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 9.14, "heat_of_vaporization": 417.1, "specific_heat": 0.116, "thermal_conductivity": 27.5, "molar_volume": 12.49, "cas_number": "7440-61-1",
    "history": "Discovered in 1789 by Martin Klaproth. It was named after the planet Uranus, which had been discovered eight years earlier.", "common_compounds": ["Uranium dioxide (UO₂)"], "abundance_crust": "2.7 ppm", "abundance_solar": "0.02 ppb (by weight)", "allotropes": null
  },
  {
    "number": 93, "symbol": "Np", "name": "Neptunium", "atomic_mass": 237, "category": ElementCategory.Actinide, "xpos": 7, "ypos": 10, "shells": [2, 8, 18, 32, 22, 9, 2],
    "electron_configuration": "[Rn] 5f⁴ 6d¹ 7s²", "summary": "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element.",
    "discovered_by": "Edwin McMillan & Philip H. Abelson", "named_by": null, "phase": "Solid", "discovery_year": 1940, "density": 20.45, "boiling_point": "4273 K", "melting_point": "917 K", "block": "f",
    "electronegativity_pauling": 1.36, "ionization_energy": "604.5 kJ/mol", "neutrons": 144, "atomic_radius": 155, "is_radioactive": true, "crystal_structure": "Orthorhombic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 5.19, "heat_of_vaporization": 336, "specific_heat": 0.12, "thermal_conductivity": 6.3, "molar_volume": 11.59, "cas_number": "7439-99-8",
    "history": "First produced by Edwin McMillan and Philip Abelson in 1940 at Berkeley Radiation Laboratory. It was named after the planet Neptune, the next planet out from Uranus, after which uranium was named.", "common_compounds": ["Neptunium(IV) oxide (NpO₂)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 94, "symbol": "Pu", "name": "Plutonium", "atomic_mass": 244, "category": ElementCategory.Actinide, "xpos": 8, "ypos": 10, "shells": [2, 8, 18, 32, 24, 8, 2],
    "electron_configuration": "[Rn] 5f⁶ 7s²", "summary": "Plutonium is a radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air.",
    "discovered_by": "Glenn T. Seaborg et al.", "named_by": null, "phase": "Solid", "discovery_year": 1940, "density": 19.816, "boiling_point": "3505 K", "melting_point": "912.5 K", "block": "f",
    "electronegativity_pauling": 1.28, "ionization_energy": "584.7 kJ/mol", "neutrons": 150, "atomic_radius": 159, "is_radioactive": true, "crystal_structure": "Monoclinic", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 2.82, "heat_of_vaporization": 333.5, "specific_heat": 0.13, "thermal_conductivity": 6.74, "molar_volume": 12.32, "cas_number": "7440-07-5",
    "history": "First synthesized in 1940 by a team led by Glenn T. Seaborg and Edwin McMillan at the University of California, Berkeley. It was named after the dwarf planet Pluto, the next planetary body out from Neptune.", "common_compounds": ["Plutonium(IV) oxide (PuO₂)"], "abundance_crust": "Trace amounts", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 95, "symbol": "Am", "name": "Americium", "atomic_mass": 243, "category": ElementCategory.Actinide, "xpos": 9, "ypos": 10, "shells": [2, 8, 18, 32, 25, 8, 2],
    "electron_configuration": "[Rn] 5f⁷ 7s²", "summary": "Americium is a synthetic radioactive chemical element with symbol Am and atomic number 95.",
    "discovered_by": "Glenn T. Seaborg et al.", "named_by": null, "phase": "Solid", "discovery_year": 1944, "density": 13.67, "boiling_point": "2880 K", "melting_point": "1449 K", "block": "f",
    "electronegativity_pauling": 1.13, "ionization_energy": "578 kJ/mol", "neutrons": 148, "atomic_radius": 173, "is_radioactive": true, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": 14.39, "heat_of_vaporization": 238.5, "specific_heat": 0.14, "thermal_conductivity": 10, "molar_volume": 17.85, "cas_number": "7440-35-9",
    "history": "The fourth transuranic element to be discovered, it was synthesized in 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley. It was named for the Americas, by analogy with europium.", "common_compounds": ["Americium(IV) oxide (AmO₂)"], "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 96, "symbol": "Cm", "name": "Curium", "atomic_mass": 247, "category": ElementCategory.Actinide, "xpos": 10, "ypos": 10, "shells": [2, 8, 18, 32, 25, 9, 2],
    "electron_configuration": "[Rn] 5f⁷ 6d¹ 7s²", "summary": "Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96.",
    "discovered_by": "Glenn T. Seaborg et al.", "named_by": null, "phase": "Solid", "discovery_year": 1944, "density": 13.51, "boiling_point": "3383 K", "melting_point": "1613 K", "block": "f",
    "electronegativity_pauling": 1.28, "ionization_energy": "581 kJ/mol", "neutrons": 151, "atomic_radius": 174, "is_radioactive": true, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Antiferromagnetic", "heat_of_fusion": 15.1, "heat_of_vaporization": 338.3, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": 18.28, "cas_number": "7440-51-9",
    "history": "Named after Marie and Pierre Curie. It was first intentionally produced and identified in 1944 at the University of California, Berkeley by Glenn T. Seaborg's group.", "common_compounds": ["Curium(III) oxide (Cm₂O₃)"], "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 97, "symbol": "Bk", "name": "Berkelium", "atomic_mass": 247, "category": ElementCategory.Actinide, "xpos": 11, "ypos": 10, "shells": [2, 8, 18, 32, 27, 8, 2],
    "electron_configuration": "[Rn] 5f⁹ 7s²", "summary": "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97.",
    "discovered_by": "Glenn T. Seaborg et al.", "named_by": null, "phase": "Solid", "discovery_year": 1949, "density": 14.78, "boiling_point": "2900 K", "melting_point": "1259 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "601 kJ/mol", "neutrons": 150, "atomic_radius": 170, "is_radioactive": true, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": null, "heat_of_fusion": 7.92, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": 16.8, "cas_number": "7440-40-6",
    "history": "First intentionally synthesized by Glenn T. Seaborg's team at the University of California, Berkeley in December 1949. It was named after Berkeley, California, the city where it was discovered.", "common_compounds": ["Berkelium(III) oxide (Bk₂O₃)"], "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 98, "symbol": "Cf", "name": "Californium", "atomic_mass": 251, "category": ElementCategory.Actinide, "xpos": 12, "ypos": 10, "shells": [2, 8, 18, 32, 28, 8, 2],
    "electron_configuration": "[Rn] 5f¹⁰ 7s²", "summary": "Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98.",
    "discovered_by": "Glenn T. Seaborg et al.", "named_by": null, "phase": "Solid", "discovery_year": 1950, "density": 15.1, "boiling_point": "1743 K", "melting_point": "1173 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "608 kJ/mol", "neutrons": 153, "atomic_radius": 186, "is_radioactive": true, "crystal_structure": "Double hexagonal close-packed", "magnetic_ordering": "Paramagnetic", "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": 16.5, "cas_number": "7440-71-3",
    "history": "First made in 1950 at the University of California, Berkeley, by the team of Glenn Seaborg. It was named for the university and the state of California.", "common_compounds": ["Californium(III) oxide (Cf₂O₃)"], "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 99, "symbol": "Es", "name": "Einsteinium", "atomic_mass": 252, "category": ElementCategory.Actinide, "xpos": 13, "ypos": 10, "shells": [2, 8, 18, 32, 29, 8, 2],
    "electron_configuration": "[Rn] 5f¹¹ 7s²", "summary": "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide.",
    "discovered_by": "Albert Ghiorso et al.", "named_by": null, "phase": "Solid", "discovery_year": 1952, "density": 8.84, "boiling_point": "1269 K", "melting_point": "1133 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "619 kJ/mol", "neutrons": 153, "atomic_radius": 186, "is_radioactive": true, "crystal_structure": "Face-centered cubic", "magnetic_ordering": null, "heat_of_fusion": 9.4, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": null, "cas_number": "7429-92-7",
    "history": "Discovered in 1952 in the debris of the first hydrogen bomb explosion by a team of scientists led by Albert Ghiorso. It was named in honor of Albert Einstein.", "common_compounds": ["Einsteinium(III) oxide (Es₂O₃)"], "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 100, "symbol": "Fm", "name": "Fermium", "atomic_mass": 257, "category": ElementCategory.Actinide, "xpos": 14, "ypos": 10, "shells": [2, 8, 18, 32, 30, 8, 2],
    "electron_configuration": "[Rn] 5f¹² 7s²", "summary": "Fermium is a synthetic element with symbol Fm and atomic number 100. It is an actinide and is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities.",
    "discovered_by": "Albert Ghiorso et al.", "named_by": null, "phase": "Solid", "discovery_year": 1952, "density": 9.7, "boiling_point": null, "melting_point": "1800 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "627 kJ/mol", "neutrons": 157, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Face-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": null, "cas_number": "7440-72-4",
    "history": "Discovered in the debris of the first hydrogen bomb explosion in 1952. It was named after Enrico Fermi, one of the pioneers of nuclear physics.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 101, "symbol": "Md", "name": "Mendelevium", "atomic_mass": 258, "category": ElementCategory.Actinide, "xpos": 15, "ypos": 10, "shells": [2, 8, 18, 32, 31, 8, 2],
    "electron_configuration": "[Rn] 5f¹³ 7s²", "summary": "Mendelevium is a synthetic element with chemical symbol Md and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements.",
    "discovered_by": "Albert Ghiorso et al.", "named_by": null, "phase": "Solid", "discovery_year": 1955, "density": 10.3, "boiling_point": null, "melting_point": "1100 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "635 kJ/mol", "neutrons": 157, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Face-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": null, "cas_number": "7440-11-1",
    "history": "Synthesized in 1955 by a team of scientists led by Albert Ghiorso at the University of California, Berkeley. It was named after Dmitri Mendeleev, the father of the periodic table.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 102, "symbol": "No", "name": "Nobelium", "atomic_mass": 259, "category": ElementCategory.Actinide, "xpos": 16, "ypos": 10, "shells": [2, 8, 18, 32, 32, 8, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 7s²", "summary": "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science.",
    "discovered_by": "Joint Institute for Nuclear Research", "named_by": null, "phase": "Solid", "discovery_year": 1966, "density": 9.9, "boiling_point": null, "melting_point": "1100 K", "block": "f",
    "electronegativity_pauling": 1.3, "ionization_energy": "642 kJ/mol", "neutrons": 157, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Face-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": null, "cas_number": "10028-14-5",
    "history": "First correctly identified in 1966 by scientists at the Joint Institute for Nuclear Research in Dubna, Russia. It was named in honor of Alfred Nobel.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 103, "symbol": "Lr", "name": "Lawrencium", "atomic_mass": 266, "category": ElementCategory.Actinide, "xpos": 17, "ypos": 10, "shells": [2, 8, 18, 32, 32, 8, 3],
    "electron_configuration": "[Rn] 5f¹⁴ 7s² 7p¹", "summary": "Lawrencium is a synthetic chemical element with chemical symbol Lr and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements.",
    "discovered_by": "Albert Ghiorso et al.", "named_by": null, "phase": "Solid", "discovery_year": 1961, "density": null, "boiling_point": null, "melting_point": "1900 K", "block": "d",
    "electronegativity_pauling": 1.3, "ionization_energy": "470 kJ/mol", "neutrons": 163, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": 10, "molar_volume": null, "cas_number": "22537-19-5",
    "history": "First synthesized in 1961 by a team of scientists led by Albert Ghiorso at the Lawrence Berkeley National Laboratory. It was named in honor of Ernest O. Lawrence.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 104, "symbol": "Rf", "name": "Rutherfordium", "atomic_mass": 267, "category": ElementCategory.TransitionMetal, "xpos": 4, "ypos": 7, "shells": [2, 8, 18, 32, 32, 10, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d² 7s²", "summary": "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive.",
    "discovered_by": "Joint Institute for Nuclear Research", "named_by": null, "phase": "Solid", "discovery_year": 1966, "density": 23.2, "boiling_point": "5800 K", "melting_point": "2400 K", "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "580 kJ/mol", "neutrons": 163, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "53850-36-5",
    "history": "First detected in 1966 at the Joint Institute for Nuclear Research in Dubna. It was named in honor of New Zealand physicist Ernest Rutherford.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 105, "symbol": "Db", "name": "Dubnium", "atomic_mass": 268, "category": ElementCategory.TransitionMetal, "xpos": 5, "ypos": 7, "shells": [2, 8, 18, 32, 32, 11, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d³ 7s²", "summary": "Dubnium is a chemical element with symbol Db and atomic number 105. It is a synthetic element and radioactive.",
    "discovered_by": "Joint Institute for Nuclear Research", "named_by": null, "phase": "Solid", "discovery_year": 1968, "density": 29.3, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "665 kJ/mol", "neutrons": 163, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "53850-35-4",
    "history": "First reported in 1968 by scientists at the Joint Institute for Nuclear Research in Dubna, Russia. It was named after the town of Dubna.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 106, "symbol": "Sg", "name": "Seaborgium", "atomic_mass": 269, "category": ElementCategory.TransitionMetal, "xpos": 6, "ypos": 7, "shells": [2, 8, 18, 32, 32, 12, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d⁴ 7s²", "summary": "Seaborgium is a chemical element with symbol Sg and atomic number 106. It is a synthetic element and radioactive.",
    "discovered_by": "Albert Ghiorso et al.", "named_by": null, "phase": "Solid", "discovery_year": 1974, "density": 35.0, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "757 kJ/mol", "neutrons": 163, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54038-81-2",
    "history": "First synthesized in 1974 by a team of scientists led by Albert Ghiorso at the Lawrence Berkeley Laboratory. It was named in honor of Glenn T. Seaborg.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 107, "symbol": "Bh", "name": "Bohrium", "atomic_mass": 270, "category": ElementCategory.TransitionMetal, "xpos": 7, "ypos": 7, "shells": [2, 8, 18, 32, 32, 13, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d⁵ 7s²", "summary": "Bohrium is a chemical element with symbol Bh and atomic number 107. It is a synthetic element and radioactive.",
    "discovered_by": "Peter Armbruster, Gottfried Münzenberg, et al.", "named_by": null, "phase": "Solid", "discovery_year": 1976, "density": 37.1, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "743 kJ/mol", "neutrons": 163, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54037-14-8",
    "history": "First synthesized in 1976 by a Soviet team led by Yuri Oganessian, and then in 1981 by a German research team. It was named in honor of the Danish physicist Niels Bohr.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 108, "symbol": "Hs", "name": "Hassium", "atomic_mass": 277, "category": ElementCategory.TransitionMetal, "xpos": 8, "ypos": 7, "shells": [2, 8, 18, 32, 32, 14, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d⁶ 7s²", "summary": "Hassium is a chemical element with symbol Hs and atomic number 108. It is a synthetic element and radioactive.",
    "discovered_by": "Peter Armbruster, Gottfried Münzenberg, et al.", "named_by": null, "phase": "Solid", "discovery_year": 1984, "density": 40.7, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "733 kJ/mol", "neutrons": 169, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54037-57-9",
    "history": "Synthesized in 1984 by a German research team led by Peter Armbruster and Gottfried Münzenberg. It was named after the German state of Hesse (Hassia in Latin).", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 109, "symbol": "Mt", "name": "Meitnerium", "atomic_mass": 278, "category": ElementCategory.Unknown, "xpos": 9, "ypos": 7, "shells": [2, 8, 18, 32, 32, 15, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d⁷ 7s²", "summary": "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is a synthetic element and radioactive.",
    "discovered_by": "Peter Armbruster, Gottfried Münzenberg, et al.", "named_by": null, "phase": "Solid", "discovery_year": 1982, "density": 37.4, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "800 kJ/mol", "neutrons": 169, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Face-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54038-01-6",
    "history": "Synthesized in 1982 by a German research team led by Peter Armbruster and Gottfried Münzenberg. It was named in honor of the Austrian physicist Lise Meitner.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 110, "symbol": "Ds", "name": "Darmstadtium", "atomic_mass": 281, "category": ElementCategory.Unknown, "xpos": 10, "ypos": 7, "shells": [2, 8, 18, 32, 32, 16, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d⁸ 7s²", "summary": "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is a synthetic element and radioactive.",
    "discovered_by": "Sigurd Hofmann, Peter Armbruster, Gottfried Münzenberg, et al.", "named_by": null, "phase": "Solid", "discovery_year": 1994, "density": 34.8, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "955 kJ/mol", "neutrons": 171, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54083-77-1",
    "history": "Synthesized in 1994 by a team at the Gesellschaft für Schwerionenforschung (GSI) in Darmstadt, Germany. It was named after the city of Darmstadt.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 111, "symbol": "Rg", "name": "Roentgenium", "atomic_mass": 282, "category": ElementCategory.Unknown, "xpos": 11, "ypos": 7, "shells": [2, 8, 18, 32, 32, 17, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d⁹ 7s²", "summary": "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is a synthetic element and radioactive.",
    "discovered_by": "Sigurd Hofmann, Peter Armbruster, Gottfried Münzenberg, et al.", "named_by": null, "phase": "Solid", "discovery_year": 1994, "density": 28.7, "boiling_point": null, "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "1020 kJ/mol", "neutrons": 171, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54386-24-2",
    "history": "Synthesized in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany. It was named in honor of the German physicist Wilhelm Conrad Röntgen.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 112, "symbol": "Cn", "name": "Copernicium", "atomic_mass": 285, "category": ElementCategory.TransitionMetal, "xpos": 12, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 2],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s²", "summary": "Copernicium is a chemical element with symbol Cn and atomic number 112. It is a synthetic element and radioactive.",
    "discovered_by": "Sigurd Hofmann, Victor Ninov, et al.", "named_by": null, "phase": "Gas", "discovery_year": 1996, "density": 23.7, "boiling_point": "357 K", "melting_point": null, "block": "d",
    "electronegativity_pauling": null, "ionization_energy": "1155 kJ/mol", "neutrons": 173, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54084-26-3",
    "history": "First created in 1996 by the GSI Helmholtz Centre for Heavy Ion Research. It is named for the astronomer Nicolaus Copernicus.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 113, "symbol": "Nh", "name": "Nihonium", "atomic_mass": 286, "category": ElementCategory.Unknown, "xpos": 13, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 3],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", "summary": "Nihonium is a chemical element with symbol Nh and atomic number 113. It is a synthetic element and radioactive.",
    "discovered_by": "Riken", "named_by": null, "phase": "Solid", "discovery_year": 2003, "density": 16, "boiling_point": "1430 K", "melting_point": "700 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "704.9 kJ/mol", "neutrons": 173, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54084-70-7",
    "history": "First synthesized in 2003 by a team of Russian and American scientists at the Joint Institute for Nuclear Research (JINR) in Dubna, Russia, and later confirmed by a team of Japanese scientists at Riken. It was named in 2016 from the Japanese name for Japan, Nihon.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 114, "symbol": "Fl", "name": "Flerovium", "atomic_mass": 289, "category": ElementCategory.PostTransitionMetal, "xpos": 14, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 4],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", "summary": "Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114.",
    "discovered_by": "Joint Institute for Nuclear Research", "named_by": null, "phase": "Solid", "discovery_year": 1998, "density": 14, "boiling_point": "210 K", "melting_point": null, "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "823.9 kJ/mol", "neutrons": 175, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Face-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54085-16-4",
    "history": "First synthesized in 1998 by a team of scientists at the Joint Institute for Nuclear Research in Dubna, Russia. It was named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute, where the element was synthesized. The laboratory, in turn, was named after the Russian physicist Georgy Flyorov.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 115, "symbol": "Mc", "name": "Moscovium", "atomic_mass": 290, "category": ElementCategory.Unknown, "xpos": 15, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 5],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", "summary": "Moscovium is a synthetic chemical element with symbol Mc and atomic number 115.",
    "discovered_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory", "named_by": null, "phase": "Solid", "discovery_year": 2003, "density": 13.5, "boiling_point": "1400 K", "melting_point": "700 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "538.3 kJ/mol", "neutrons": 175, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54085-64-2",
    "history": "First synthesized in 2003 by a joint team of Russian and American scientists at the Joint Institute for Nuclear Research (JINR) in Dubna, Russia. It was named in 2016 for the Moscow Oblast, where the JINR is located.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 116, "symbol": "Lv", "name": "Livermorium", "atomic_mass": 293, "category": ElementCategory.Unknown, "xpos": 16, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 6],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", "summary": "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116.",
    "discovered_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory", "named_by": null, "phase": "Solid", "discovery_year": 2000, "density": 12.9, "boiling_point": "1035–1135 K", "melting_point": "637–780 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "664.1 kJ/mol", "neutrons": 177, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Hexagonal close-packed (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54100-71-9",
    "history": "First synthesized in 2000 by a team of scientists at the Joint Institute for Nuclear Research in Dubna, Russia, and the Lawrence Livermore National Laboratory in California. It was named in honor of the Lawrence Livermore National Laboratory.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 117, "symbol": "Ts", "name": "Tennessine", "atomic_mass": 294, "category": ElementCategory.Unknown, "xpos": 17, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 7],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", "summary": "Tennessine is a synthetic chemical element with symbol Ts and atomic number 117.",
    "discovered_by": "Joint Institute for Nuclear Research & Oak Ridge National Laboratory", "named_by": null, "phase": "Solid", "discovery_year": 2010, "density": 7.1, "boiling_point": "883 K", "melting_point": "723 K", "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "742.9 kJ/mol", "neutrons": 177, "atomic_radius": null, "is_radioactive": true, "crystal_structure": null, "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "87658-56-8",
    "history": "First made in 2010 in a collaboration between the Joint Institute for Nuclear Research in Dubna, Russia, and several American institutions including Oak Ridge National Laboratory in Tennessee. It was named in honor of the state of Tennessee.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  },
  {
    "number": 118, "symbol": "Og", "name": "Oganesson", "atomic_mass": 294, "category": ElementCategory.NobleGas, "xpos": 18, "ypos": 7, "shells": [2, 8, 18, 32, 32, 18, 8],
    "electron_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", "summary": "Oganesson is a synthetic chemical element with symbol Og and atomic number 118.",
    "discovered_by": "Joint Institute for Nuclear Research & Lawrence Livermore National Laboratory", "named_by": null, "phase": "Gas", "discovery_year": 2002, "density": 5.0, "boiling_point": "350 K", "melting_point": null, "block": "p",
    "electronegativity_pauling": null, "ionization_energy": "861.4 kJ/mol", "neutrons": 176, "atomic_radius": null, "is_radioactive": true, "crystal_structure": "Body-centered cubic (predicted)", "magnetic_ordering": null, "heat_of_fusion": null, "heat_of_vaporization": null, "specific_heat": null, "thermal_conductivity": null, "molar_volume": null, "cas_number": "54144-19-3",
    "history": "First synthesized in 2002 at the Joint Institute for Nuclear Research in Dubna, Russia, by a joint team of Russian and American scientists. It was named in honor of the Russian nuclear physicist Yuri Oganessian.", "common_compounds": null, "abundance_crust": "Synthetic", "abundance_solar": "Negligible", "allotropes": null
  }
];
