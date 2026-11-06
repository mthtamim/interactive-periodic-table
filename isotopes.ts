export interface Isotope {
  mass_number: number;
  half_life: string;
  decay_modes: string[];
  daughter_nuclide?: { symbol: string; mass_number: number } | null;
}

// Data sourced from various public scientific databases.
// y = years, d = days, h = hours, m = minutes, s = seconds, ms = milliseconds
export const ISOTOPE_DATA: Record<number, Isotope[]> = {
    1: [ // Hydrogen
        { mass_number: 1, half_life: "Stable", decay_modes: [] },
        { mass_number: 2, half_life: "Stable", decay_modes: [] },
        { mass_number: 3, half_life: "12.32 y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'He', mass_number: 3 } },
    ],
    2: [ // Helium
        { mass_number: 3, half_life: "Stable", decay_modes: [] },
        { mass_number: 4, half_life: "Stable", decay_modes: [] },
    ],
    3: [ // Lithium
        { mass_number: 6, half_life: "Stable", decay_modes: [] },
        { mass_number: 7, half_life: "Stable", decay_modes: [] },
    ],
    4: [ // Beryllium
        { mass_number: 9, half_life: "Stable", decay_modes: [] },
        { mass_number: 10, half_life: "1.51×10⁶ y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'B', mass_number: 10 } },
    ],
    5: [ // Boron
        { mass_number: 10, half_life: "Stable", decay_modes: [] },
        { mass_number: 11, half_life: "Stable", decay_modes: [] },
    ],
    6: [ // Carbon
        { mass_number: 12, half_life: "Stable", decay_modes: [] },
        { mass_number: 13, half_life: "Stable", decay_modes: [] },
        { mass_number: 14, half_life: "5730 y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'N', mass_number: 14 } },
    ],
    7: [ // Nitrogen
        { mass_number: 14, half_life: "Stable", decay_modes: [] },
        { mass_number: 15, half_life: "Stable", decay_modes: [] },
    ],
    8: [ // Oxygen
        { mass_number: 16, half_life: "Stable", decay_modes: [] },
        { mass_number: 17, half_life: "Stable", decay_modes: [] },
        { mass_number: 18, half_life: "Stable", decay_modes: [] },
    ],
    9: [ // Fluorine
        { mass_number: 19, half_life: "Stable", decay_modes: [] },
    ],
    10: [ // Neon
        { mass_number: 20, half_life: "Stable", decay_modes: [] },
        { mass_number: 21, half_life: "Stable", decay_modes: [] },
        { mass_number: 22, half_life: "Stable", decay_modes: [] },
    ],
    11: [ // Sodium
        { mass_number: 23, half_life: "Stable", decay_modes: [] },
    ],
    12: [ // Magnesium
        { mass_number: 24, half_life: "Stable", decay_modes: [] },
        { mass_number: 25, half_life: "Stable", decay_modes: [] },
        { mass_number: 26, half_life: "Stable", decay_modes: [] },
    ],
    13: [ // Aluminium
        { mass_number: 27, half_life: "Stable", decay_modes: [] },
    ],
    14: [ // Silicon
        { mass_number: 28, half_life: "Stable", decay_modes: [] },
        { mass_number: 29, half_life: "Stable", decay_modes: [] },
        { mass_number: 30, half_life: "Stable", decay_modes: [] },
    ],
    15: [ // Phosphorus
        { mass_number: 31, half_life: "Stable", decay_modes: [] },
    ],
    16: [ // Sulfur
        { mass_number: 32, half_life: "Stable", decay_modes: [] },
        { mass_number: 33, half_life: "Stable", decay_modes: [] },
        { mass_number: 34, half_life: "Stable", decay_modes: [] },
        { mass_number: 36, half_life: "Stable", decay_modes: [] },
    ],
    17: [ // Chlorine
        { mass_number: 35, half_life: "Stable", decay_modes: [] },
        { mass_number: 37, half_life: "Stable", decay_modes: [] },
    ],
    18: [ // Argon
        { mass_number: 36, half_life: "Stable", decay_modes: [] },
        { mass_number: 38, half_life: "Stable", decay_modes: [] },
        { mass_number: 40, half_life: "Stable", decay_modes: [] },
    ],
    19: [ // Potassium
        { mass_number: 39, half_life: "Stable", decay_modes: [] },
        { mass_number: 40, half_life: "1.248×10⁹ y", decay_modes: ["β⁻", "EC", "β⁺"], daughter_nuclide: { symbol: 'Ar', mass_number: 40 } },
        { mass_number: 41, half_life: "Stable", decay_modes: [] },
    ],
    20: [ // Calcium
        { mass_number: 40, half_life: "Stable", decay_modes: [] },
        { mass_number: 42, half_life: "Stable", decay_modes: [] },
        { mass_number: 43, half_life: "Stable", decay_modes: [] },
        { mass_number: 44, half_life: "Stable", decay_modes: [] },
        { mass_number: 46, half_life: "Stable", decay_modes: [] },
        { mass_number: 48, half_life: "4.3×10¹⁹ y", decay_modes: ["β⁻β⁻"] },
    ],
    21: [ // Scandium
        { mass_number: 45, half_life: "Stable", decay_modes: [] },
    ],
    22: [ // Titanium
        { mass_number: 46, half_life: "Stable", decay_modes: [] },
        { mass_number: 47, half_life: "Stable", decay_modes: [] },
        { mass_number: 48, half_life: "Stable", decay_modes: [] },
        { mass_number: 49, half_life: "Stable", decay_modes: [] },
        { mass_number: 50, half_life: "Stable", decay_modes: [] },
    ],
    23: [ // Vanadium
        { mass_number: 50, half_life: "1.4×10¹⁷ y", decay_modes: ["EC", "β⁻"], daughter_nuclide: { symbol: 'Ti', mass_number: 50 } },
        { mass_number: 51, half_life: "Stable", decay_modes: [] },
    ],
    24: [ // Chromium
        { mass_number: 50, half_life: "Stable", decay_modes: [] },
        { mass_number: 52, half_life: "Stable", decay_modes: [] },
        { mass_number: 53, half_life: "Stable", decay_modes: [] },
        { mass_number: 54, half_life: "Stable", decay_modes: [] },
    ],
    25: [ // Manganese
        { mass_number: 55, half_life: "Stable", decay_modes: [] },
    ],
    26: [ // Iron
        { mass_number: 54, half_life: "Stable", decay_modes: [] },
        { mass_number: 56, half_life: "Stable", decay_modes: [] },
        { mass_number: 57, half_life: "Stable", decay_modes: [] },
        { mass_number: 58, half_life: "Stable", decay_modes: [] },
    ],
    27: [ // Cobalt
        { mass_number: 59, half_life: "Stable", decay_modes: [] },
        { mass_number: 60, half_life: "5.27 y", decay_modes: ["β⁻", "γ"], daughter_nuclide: { symbol: 'Ni', mass_number: 60 } },
    ],
    28: [ // Nickel
        { mass_number: 58, half_life: "Stable", decay_modes: [] },
        { mass_number: 60, half_life: "Stable", decay_modes: [] },
        { mass_number: 61, half_life: "Stable", decay_modes: [] },
        { mass_number: 62, half_life: "Stable", decay_modes: [] },
        { mass_number: 64, half_life: "Stable", decay_modes: [] },
    ],
    29: [ // Copper
        { mass_number: 63, half_life: "Stable", decay_modes: [] },
        { mass_number: 65, half_life: "Stable", decay_modes: [] },
    ],
    30: [ // Zinc
        { mass_number: 64, half_life: "Stable", decay_modes: [] },
        { mass_number: 66, half_life: "Stable", decay_modes: [] },
        { mass_number: 67, half_life: "Stable", decay_modes: [] },
        { mass_number: 68, half_life: "Stable", decay_modes: [] },
        { mass_number: 70, half_life: "Stable", decay_modes: [] },
    ],
    31: [ // Gallium
        { mass_number: 69, half_life: "Stable", decay_modes: [] },
        { mass_number: 71, half_life: "Stable", decay_modes: [] },
    ],
    32: [ // Germanium
        { mass_number: 70, half_life: "Stable", decay_modes: [] },
        { mass_number: 72, half_life: "Stable", decay_modes: [] },
        { mass_number: 73, half_life: "Stable", decay_modes: [] },
        { mass_number: 74, half_life: "Stable", decay_modes: [] },
    ],
    33: [ // Arsenic
        { mass_number: 75, half_life: "Stable", decay_modes: [] },
    ],
    34: [ // Selenium
        { mass_number: 74, half_life: "Stable", decay_modes: [] },
        { mass_number: 76, half_life: "Stable", decay_modes: [] },
        { mass_number: 77, half_life: "Stable", decay_modes: [] },
        { mass_number: 78, half_life: "Stable", decay_modes: [] },
        { mass_number: 80, half_life: "Stable", decay_modes: [] },
    ],
    35: [ // Bromine
        { mass_number: 79, half_life: "Stable", decay_modes: [] },
        { mass_number: 81, half_life: "Stable", decay_modes: [] },
    ],
    36: [ // Krypton
        { mass_number: 78, half_life: "Stable", decay_modes: [] },
        { mass_number: 80, half_life: "Stable", decay_modes: [] },
        { mass_number: 82, half_life: "Stable", decay_modes: [] },
        { mass_number: 83, half_life: "Stable", decay_modes: [] },
        { mass_number: 84, half_life: "Stable", decay_modes: [] },
        { mass_number: 86, half_life: "Stable", decay_modes: [] },
    ],
    37: [ // Rubidium
        { mass_number: 85, half_life: "Stable", decay_modes: [] },
        { mass_number: 87, half_life: "4.9×10¹⁰ y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'Sr', mass_number: 87 } },
    ],
    38: [ // Strontium
        { mass_number: 84, half_life: "Stable", decay_modes: [] },
        { mass_number: 86, half_life: "Stable", decay_modes: [] },
        { mass_number: 87, half_life: "Stable", decay_modes: [] },
        { mass_number: 88, half_life: "Stable", decay_modes: [] },
    ],
    39: [ // Yttrium
        { mass_number: 89, half_life: "Stable", decay_modes: [] },
    ],
    40: [ // Zirconium
        { mass_number: 90, half_life: "Stable", decay_modes: [] },
        { mass_number: 91, half_life: "Stable", decay_modes: [] },
        { mass_number: 92, half_life: "Stable", decay_modes: [] },
        { mass_number: 94, half_life: "Stable", decay_modes: [] },
    ],
    41: [ // Niobium
        { mass_number: 93, half_life: "Stable", decay_modes: [] },
    ],
    42: [ // Molybdenum
        { mass_number: 92, half_life: "Stable", decay_modes: [] },
        { mass_number: 94, half_life: "Stable", decay_modes: [] },
        { mass_number: 95, half_life: "Stable", decay_modes: [] },
        { mass_number: 96, half_life: "Stable", decay_modes: [] },
        { mass_number: 97, half_life: "Stable", decay_modes: [] },
        { mass_number: 98, half_life: "Stable", decay_modes: [] },
    ],
    43: [ // Technetium
        { mass_number: 98, half_life: "4.2×10⁶ y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'Ru', mass_number: 98 } },
    ],
    44: [ // Ruthenium
        { mass_number: 96, half_life: "Stable", decay_modes: [] },
        { mass_number: 98, half_life: "Stable", decay_modes: [] },
        { mass_number: 99, half_life: "Stable", decay_modes: [] },
        { mass_number: 100, half_life: "Stable", decay_modes: [] },
        { mass_number: 101, half_life: "Stable", decay_modes: [] },
        { mass_number: 102, half_life: "Stable", decay_modes: [] },
        { mass_number: 104, half_life: "Stable", decay_modes: [] },
    ],
    45: [ // Rhodium
        { mass_number: 103, half_life: "Stable", decay_modes: [] },
    ],
    46: [ // Palladium
        { mass_number: 102, half_life: "Stable", decay_modes: [] },
        { mass_number: 104, half_life: "Stable", decay_modes: [] },
        { mass_number: 105, half_life: "Stable", decay_modes: [] },
        { mass_number: 106, half_life: "Stable", decay_modes: [] },
        { mass_number: 108, half_life: "Stable", decay_modes: [] },
        { mass_number: 110, half_life: "Stable", decay_modes: [] },
    ],
    47: [ // Silver
        { mass_number: 107, half_life: "Stable", decay_modes: [] },
        { mass_number: 109, half_life: "Stable", decay_modes: [] },
    ],
    48: [ // Cadmium
        { mass_number: 106, half_life: "Stable", decay_modes: [] },
        { mass_number: 108, half_life: "Stable", decay_modes: [] },
        { mass_number: 110, half_life: "Stable", decay_modes: [] },
        { mass_number: 111, half_life: "Stable", decay_modes: [] },
        { mass_number: 112, half_life: "Stable", decay_modes: [] },
    ],
    49: [ // Indium
        { mass_number: 113, half_life: "Stable", decay_modes: [] },
        { mass_number: 115, half_life: "4.41×10¹⁴ y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'Sn', mass_number: 115 } },
    ],
    50: [ // Tin
        { mass_number: 112, half_life: "Stable", decay_modes: [] },
        { mass_number: 114, half_life: "Stable", decay_modes: [] },
        { mass_number: 115, half_life: "Stable", decay_modes: [] },
        { mass_number: 116, half_life: "Stable", decay_modes: [] },
        { mass_number: 117, half_life: "Stable", decay_modes: [] },
        { mass_number: 118, half_life: "Stable", decay_modes: [] },
        { mass_number: 119, half_life: "Stable", decay_modes: [] },
        { mass_number: 120, half_life: "Stable", decay_modes: [] },
        { mass_number: 122, half_life: "Stable", decay_modes: [] },
        { mass_number: 124, half_life: "Stable", decay_modes: [] },
    ],
    51: [ // Antimony
        { mass_number: 121, half_life: "Stable", decay_modes: [] },
        { mass_number: 123, half_life: "Stable", decay_modes: [] },
    ],
    52: [ // Tellurium
        { mass_number: 120, half_life: "Stable", decay_modes: [] },
        { mass_number: 122, half_life: "Stable", decay_modes: [] },
        { mass_number: 123, half_life: "Stable", decay_modes: [] },
        { mass_number: 124, half_life: "Stable", decay_modes: [] },
        { mass_number: 125, half_life: "Stable", decay_modes: [] },
        { mass_number: 126, half_life: "Stable", decay_modes: [] },
    ],
    53: [ // Iodine
        { mass_number: 127, half_life: "Stable", decay_modes: [] },
    ],
    54: [ // Xenon
        { mass_number: 124, half_life: "Stable", decay_modes: [] },
        { mass_number: 126, half_life: "Stable", decay_modes: [] },
        { mass_number: 128, half_life: "Stable", decay_modes: [] },
        { mass_number: 129, half_life: "Stable", decay_modes: [] },
        { mass_number: 130, half_life: "Stable", decay_modes: [] },
        { mass_number: 131, half_life: "Stable", decay_modes: [] },
        { mass_number: 132, half_life: "Stable", decay_modes: [] },
        { mass_number: 134, half_life: "Stable", decay_modes: [] },
        { mass_number: 136, half_life: "Stable", decay_modes: [] },
    ],
    55: [ // Cesium
        { mass_number: 133, half_life: "Stable", decay_modes: [] },
    ],
    56: [ // Barium
        { mass_number: 130, half_life: "Stable", decay_modes: [] },
        { mass_number: 132, half_life: "Stable", decay_modes: [] },
        { mass_number: 134, half_life: "Stable", decay_modes: [] },
        { mass_number: 135, half_life: "Stable", decay_modes: [] },
        { mass_number: 136, half_life: "Stable", decay_modes: [] },
        { mass_number: 137, half_life: "Stable", decay_modes: [] },
        { mass_number: 138, half_life: "Stable", decay_modes: [] },
    ],
    57: [ // Lanthanum
        { mass_number: 138, half_life: "1.02×10¹¹ y", decay_modes: ["EC", "β⁻"], daughter_nuclide: { symbol: 'Ba', mass_number: 138 } },
        { mass_number: 139, half_life: "Stable", decay_modes: [] },
    ],
    58: [ // Cerium
        { mass_number: 136, half_life: "Stable", decay_modes: [] },
        { mass_number: 138, half_life: "Stable", decay_modes: [] },
        { mass_number: 140, half_life: "Stable", decay_modes: [] },
        { mass_number: 142, half_life: "5×10¹⁶ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Ba', mass_number: 138 } },
    ],
    59: [ // Praseodymium
        { mass_number: 141, half_life: "Stable", decay_modes: [] },
    ],
    60: [ // Neodymium
        { mass_number: 142, half_life: "Stable", decay_modes: [] },
        { mass_number: 143, half_life: "Stable", decay_modes: [] },
        { mass_number: 144, half_life: "2.29×10¹⁵ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Ce', mass_number: 140 } },
        { mass_number: 145, half_life: "Stable", decay_modes: [] },
        { mass_number: 146, half_life: "Stable", decay_modes: [] },
        { mass_number: 148, half_life: "Stable", decay_modes: [] },
        { mass_number: 150, half_life: "Stable", decay_modes: [] },
    ],
    61: [ // Promethium
        { mass_number: 145, half_life: "17.7 y", decay_modes: ["EC"], daughter_nuclide: { symbol: 'Nd', mass_number: 145 } },
    ],
    62: [ // Samarium
        { mass_number: 144, half_life: "Stable", decay_modes: [] },
        { mass_number: 147, half_life: "1.06×10¹¹ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Nd', mass_number: 143 } },
        { mass_number: 148, half_life: "7×10¹⁵ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Nd', mass_number: 144 } },
        { mass_number: 149, half_life: "Stable", decay_modes: [] },
        { mass_number: 150, half_life: "Stable", decay_modes: [] },
        { mass_number: 152, half_life: "Stable", decay_modes: [] },
        { mass_number: 154, half_life: "Stable", decay_modes: [] },
    ],
    63: [ // Europium
        { mass_number: 151, half_life: "Stable", decay_modes: [] },
        { mass_number: 153, half_life: "Stable", decay_modes: [] },
    ],
    64: [ // Gadolinium
        { mass_number: 152, half_life: "1.08×10¹⁴ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Sm', mass_number: 148 } },
        { mass_number: 154, half_life: "Stable", decay_modes: [] },
        { mass_number: 155, half_life: "Stable", decay_modes: [] },
        { mass_number: 156, half_life: "Stable", decay_modes: [] },
        { mass_number: 157, half_life: "Stable", decay_modes: [] },
        { mass_number: 158, half_life: "Stable", decay_modes: [] },
        { mass_number: 160, half_life: "Stable", decay_modes: [] },
    ],
    65: [ // Terbium
        { mass_number: 159, half_life: "Stable", decay_modes: [] },
    ],
    66: [ // Dysprosium
        { mass_number: 156, half_life: "Stable", decay_modes: [] },
        { mass_number: 158, half_life: "Stable", decay_modes: [] },
        { mass_number: 160, half_life: "Stable", decay_modes: [] },
        { mass_number: 161, half_life: "Stable", decay_modes: [] },
        { mass_number: 162, half_life: "Stable", decay_modes: [] },
        { mass_number: 163, half_life: "Stable", decay_modes: [] },
        { mass_number: 164, half_life: "Stable", decay_modes: [] },
    ],
    67: [ // Holmium
        { mass_number: 165, half_life: "Stable", decay_modes: [] },
    ],
    68: [ // Erbium
        { mass_number: 162, half_life: "Stable", decay_modes: [] },
        { mass_number: 164, half_life: "Stable", decay_modes: [] },
        { mass_number: 166, half_life: "Stable", decay_modes: [] },
        { mass_number: 167, half_life: "Stable", decay_modes: [] },
        { mass_number: 168, half_life: "Stable", decay_modes: [] },
        { mass_number: 170, half_life: "Stable", decay_modes: [] },
    ],
    69: [ // Thulium
        { mass_number: 169, half_life: "Stable", decay_modes: [] },
    ],
    70: [ // Ytterbium
        { mass_number: 168, half_life: "Stable", decay_modes: [] },
        { mass_number: 170, half_life: "Stable", decay_modes: [] },
        { mass_number: 171, half_life: "Stable", decay_modes: [] },
        { mass_number: 172, half_life: "Stable", decay_modes: [] },
        { mass_number: 173, half_life: "Stable", decay_modes: [] },
        { mass_number: 174, half_life: "Stable", decay_modes: [] },
        { mass_number: 176, half_life: "Stable", decay_modes: [] },
    ],
    71: [ // Lutetium
        { mass_number: 175, half_life: "Stable", decay_modes: [] },
        { mass_number: 176, half_life: "3.78×10¹⁰ y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'Hf', mass_number: 176 } },
    ],
    72: [ // Hafnium
        { mass_number: 176, half_life: "Stable", decay_modes: [] },
        { mass_number: 177, half_life: "Stable", decay_modes: [] },
        { mass_number: 178, half_life: "Stable", decay_modes: [] },
        { mass_number: 179, half_life: "Stable", decay_modes: [] },
        { mass_number: 180, half_life: "Stable", decay_modes: [] },
    ],
    73: [ // Tantalum
        { mass_number: 180, half_life: "8.15 h", decay_modes: ["EC", "β⁻"], daughter_nuclide: { symbol: 'Hf', mass_number: 180 } },
        { mass_number: 181, half_life: "Stable", decay_modes: [] },
    ],
    74: [ // Tungsten
        { mass_number: 180, half_life: "Stable", decay_modes: [] },
        { mass_number: 182, half_life: "Stable", decay_modes: [] },
        { mass_number: 183, half_life: "Stable", decay_modes: [] },
        { mass_number: 184, half_life: "Stable", decay_modes: [] },
        { mass_number: 186, half_life: "Stable", decay_modes: [] },
    ],
    75: [ // Rhenium
        { mass_number: 185, half_life: "Stable", decay_modes: [] },
        { mass_number: 187, half_life: "4.33×10¹⁰ y", decay_modes: ["β⁻"], daughter_nuclide: { symbol: 'Os', mass_number: 187 } },
    ],
    76: [ // Osmium
        { mass_number: 184, half_life: "Stable", decay_modes: [] },
        { mass_number: 186, half_life: "2.0×10¹⁵ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'W', mass_number: 182 } },
        { mass_number: 187, half_life: "Stable", decay_modes: [] },
        { mass_number: 188, half_life: "Stable", decay_modes: [] },
        { mass_number: 189, half_life: "Stable", decay_modes: [] },
        { mass_number: 190, half_life: "Stable", decay_modes: [] },
        { mass_number: 192, half_life: "Stable", decay_modes: [] },
    ],
    77: [ // Iridium
        { mass_number: 191, half_life: "Stable", decay_modes: [] },
        { mass_number: 193, half_life: "Stable", decay_modes: [] },
    ],
    78: [ // Platinum
        { mass_number: 190, half_life: "6.5×10¹¹ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Os', mass_number: 186 } },
        { mass_number: 192, half_life: "Stable", decay_modes: [] },
        { mass_number: 194, half_life: "Stable", decay_modes: [] },
        { mass_number: 195, half_life: "Stable", decay_modes: [] },
        { mass_number: 196, half_life: "Stable", decay_modes: [] },
        { mass_number: 198, half_life: "Stable", decay_modes: [] },
    ],
    79: [ // Gold
        { mass_number: 197, half_life: "Stable", decay_modes: [] },
    ],
    80: [ // Mercury
        { mass_number: 196, half_life: "Stable", decay_modes: [] },
        { mass_number: 198, half_life: "Stable", decay_modes: [] },
        { mass_number: 199, half_life: "Stable", decay_modes: [] },
        { mass_number: 200, half_life: "Stable", decay_modes: [] },
        { mass_number: 201, half_life: "Stable", decay_modes: [] },
        { mass_number: 202, half_life: "Stable", decay_modes: [] },
        { mass_number: 204, half_life: "Stable", decay_modes: [] },
    ],
    81: [ // Thallium
        { mass_number: 203, half_life: "Stable", decay_modes: [] },
        { mass_number: 205, half_life: "Stable", decay_modes: [] },
    ],
    82: [ // Lead
        { mass_number: 204, half_life: "Stable", decay_modes: [] },
        { mass_number: 206, half_life: "Stable", decay_modes: [] },
        { mass_number: 207, half_life: "Stable", decay_modes: [] },
        { mass_number: 208, half_life: "Stable", decay_modes: [] },
    ],
    83: [ // Bismuth
        { mass_number: 209, half_life: "2.01×10¹⁹ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Tl', mass_number: 205 } },
    ],
    84: [ // Polonium
        { mass_number: 209, half_life: "125 y", decay_modes: ["α", "EC"], daughter_nuclide: { symbol: 'Pb', mass_number: 205 } },
        { mass_number: 210, half_life: "138.376 d", decay_modes: ["α"], daughter_nuclide: { symbol: 'Pb', mass_number: 206 } },
    ],
    85: [ // Astatine
        { mass_number: 210, half_life: "8.1 h", decay_modes: ["α", "EC"], daughter_nuclide: { symbol: 'Bi', mass_number: 206 } },
    ],
    86: [ // Radon
        { mass_number: 222, half_life: "3.82 d", decay_modes: ["α"], daughter_nuclide: { symbol: 'Po', mass_number: 218 } },
    ],
    87: [ // Francium
        { mass_number: 223, half_life: "22 m", decay_modes: ["β⁻", "α"], daughter_nuclide: { symbol: 'Ra', mass_number: 223 } },
    ],
    88: [ // Radium
        { mass_number: 226, half_life: "1600 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Rn', mass_number: 222 } },
    ],
    89: [ // Actinium
        { mass_number: 227, half_life: "21.77 y", decay_modes: ["β⁻", "α"], daughter_nuclide: { symbol: 'Th', mass_number: 227 } },
    ],
    90: [ // Thorium
        { mass_number: 232, half_life: "1.405×10¹⁰ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Ra', mass_number: 228 } },
    ],
    91: [ // Protactinium
        { mass_number: 231, half_life: "32760 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Ac', mass_number: 227 } },
    ],
    92: [ // Uranium
        { mass_number: 234, half_life: "2.455×10⁵ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Th', mass_number: 230 } },
        { mass_number: 235, half_life: "7.038×10⁸ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Th', mass_number: 231 } },
        { mass_number: 238, half_life: "4.468×10⁹ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Th', mass_number: 234 } },
    ],
    93: [ // Neptunium
        { mass_number: 237, half_life: "2.144×10⁶ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Pa', mass_number: 233 } },
    ],
    94: [ // Plutonium
        { mass_number: 239, half_life: "24110 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'U', mass_number: 235 } },
        { mass_number: 244, half_life: "8.08×10⁷ y", decay_modes: ["α", "SF"], daughter_nuclide: { symbol: 'U', mass_number: 240 } },
    ],
    95: [ // Americium
        { mass_number: 241, half_life: "432.2 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Np', mass_number: 237 } },
        { mass_number: 243, half_life: "7370 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Np', mass_number: 239 } },
    ],
    96: [ // Curium
        { mass_number: 247, half_life: "1.56×10⁷ y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Pu', mass_number: 243 } },
    ],
    97: [ // Berkelium
        { mass_number: 247, half_life: "1380 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Am', mass_number: 243 } },
    ],
    98: [ // Californium
        { mass_number: 251, half_life: "898 y", decay_modes: ["α"], daughter_nuclide: { symbol: 'Cm', mass_number: 247 } },
    ],
    99: [ // Einsteinium
        { mass_number: 252, half_life: "471.7 d", decay_modes: ["α", "EC", "β⁻"], daughter_nuclide: { symbol: 'Bk', mass_number: 248 } },
    ],
    100: [ // Fermium
        { mass_number: 257, half_life: "100.5 d", decay_modes: ["α", "SF"], daughter_nuclide: { symbol: 'Cf', mass_number: 253 } },
    ],
    101: [ // Mendelevium
        { mass_number: 258, half_life: "51.5 d", decay_modes: ["EC", "α"], daughter_nuclide: { symbol: 'Es', mass_number: 254 } },
    ],
    102: [ // Nobelium
        { mass_number: 259, half_life: "58 m", decay_modes: ["α", "EC"], daughter_nuclide: { symbol: 'Fm', mass_number: 255 } },
    ],
    103: [ // Lawrencium
        { mass_number: 266, half_life: "~11 h", decay_modes: ["SF"] },
    ],
};
