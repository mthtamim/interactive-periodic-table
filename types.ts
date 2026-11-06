
export enum ElementCategory {
  AlkaliMetal = 'alkali-metal',
  AlkalineEarthMetal = 'alkaline-earth-metal',
  Lanthanide = 'lanthanide',
  Actinide = 'actinide',
  TransitionMetal = 'transition-metal',
  PostTransitionMetal = 'post-transition-metal',
  Metalloid = 'metalloid',
  ReactiveNonmetal = 'reactive-nonmetal',
  NobleGas = 'noble-gas',
  Unknown = 'unknown',
}

export interface PeriodicElement {
  number: number;
  symbol: string;
  name: string;
  atomic_mass: number;
  category: ElementCategory;
  xpos: number;
  ypos: number;
  shells: number[];
  electron_configuration: string;
  summary: string;
  discovered_by: string | null;
  named_by: string | null;
  phase: 'Gas' | 'Liquid' | 'Solid';

  // New detailed properties
  discovery_year?: number | null;
  neutrons?: number | null;
  atomic_radius?: number | null; // pm
  density?: number | null; // g/cm^3
  melting_point?: string | null; // K with unit as string for simplicity
  boiling_point?: string | null; // K with unit as string for simplicity
  block?: 's' | 'p' | 'd' | 'f' | null;
  crystal_structure?: string | null;
  magnetic_ordering?: string | null;
  is_radioactive?: boolean;
  electronegativity_pauling?: number | null;
  ionization_energy?: string | null; // kJ/mol with unit as string
  heat_of_fusion?: number | null; // kJ/mol
  heat_of_vaporization?: number | null; // kJ/mol
  specific_heat?: number | null; // J/(g·K)
  thermal_conductivity?: number | null; // W/(m·K)
  molar_volume?: number | null; // cm³/mol
  cas_number?: string | null;

  // New properties for more complex information
  history?: string | null;
  common_compounds?: string[] | null;
  abundance_crust?: string | null;
  abundance_solar?: string | null;
  allotropes?: string[] | null;
}

export type PaletteName = 'Classic' | 'Vibrant' | 'Pastel' | 'Monochrome';