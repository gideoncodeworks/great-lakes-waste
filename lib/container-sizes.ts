export type ContainerSize = {
  slug: string;
  yards: number;
  name: string;
  tagline: string;
  monthlyStarting: number;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  bestFor: string[];
  useCases: string[];
  pickupFrequencyOptions: string[];
  isToter?: boolean;
};

export const CONTAINER_SIZES: ContainerSize[] = [
  {
    slug: "96-gallon-toter",
    yards: 0.5,
    name: "96-Gallon Toter",
    tagline: "The rolling curbside can",
    monthlyStarting: 29,
    dimensions: { length: "26 in", width: "24 in", height: "45 in" },
    bestFor: ["Small offices", "Retail storefronts", "Corner cafés"],
    useCases: [
      "Small offices under 10 employees",
      "Boutique retail with light packaging waste",
      "Coffee shops and cafés",
      "Small restaurants with once-weekly pickup",
    ],
    pickupFrequencyOptions: ["Weekly", "2× weekly", "3× weekly"],
    isToter: true,
  },
  {
    slug: "2-yard",
    yards: 2,
    name: "2 Yard Rear-Load",
    tagline: "Compact commercial",
    monthlyStarting: 89,
    dimensions: { length: "6 ft", width: "3 ft", height: "4 ft" },
    bestFor: ["Small restaurants", "Dry cleaners", "Convenience stores"],
    useCases: [
      "Small restaurants and cafés with daily kitchen waste",
      "Dry cleaners with plastic and packaging",
      "Convenience stores with steady volume",
      "Small medical offices (non-biohazard)",
    ],
    pickupFrequencyOptions: ["Weekly", "2× weekly", "3× weekly"],
  },
  {
    slug: "3-yard",
    yards: 3,
    name: "3 Yard Rear-Load",
    tagline: "The workhorse",
    monthlyStarting: 129,
    dimensions: { length: "6 ft", width: "3.5 ft", height: "5 ft" },
    bestFor: ["Restaurants", "Salons & spas", "Auto shops"],
    useCases: [
      "Full-service restaurants",
      "Salons and spa businesses with packaging waste",
      "Auto shops with light general waste",
      "Multi-tenant office buildings",
    ],
    pickupFrequencyOptions: ["Weekly", "2× weekly", "3× weekly", "Daily"],
  },
  {
    slug: "4-yard",
    yards: 4,
    name: "4 Yard Rear-Load",
    tagline: "Our most popular size",
    monthlyStarting: 169,
    dimensions: { length: "6 ft", width: "4 ft", height: "6 ft" },
    bestFor: ["Restaurants (high volume)", "Small warehouses", "Retail centers"],
    useCases: [
      "High-volume restaurants and bars",
      "Small warehouse operations",
      "Strip mall and retail center shared containers",
      "Grocery stores and specialty markets",
    ],
    pickupFrequencyOptions: ["Weekly", "2× weekly", "3× weekly", "Daily"],
  },
  {
    slug: "6-yard",
    yards: 6,
    name: "6 Yard Rear-Load",
    tagline: "Heavy commercial",
    monthlyStarting: 219,
    dimensions: { length: "6 ft", width: "5 ft", height: "6 ft" },
    bestFor: ["Manufacturing", "Warehouses", "Multi-tenant properties"],
    useCases: [
      "Manufacturing facilities with moderate waste",
      "Warehouse and distribution centers",
      "Multi-tenant office complexes",
      "Apartment complexes (medium buildings)",
    ],
    pickupFrequencyOptions: ["Weekly", "2× weekly", "3× weekly", "Daily"],
  },
  {
    slug: "8-yard",
    yards: 8,
    name: "8 Yard Rear-Load",
    tagline: "Maximum capacity",
    monthlyStarting: 269,
    dimensions: { length: "6.5 ft", width: "5.5 ft", height: "7 ft" },
    bestFor: ["Large manufacturing", "Apartment communities", "Big-box retail"],
    useCases: [
      "Large-scale manufacturing operations",
      "Apartment complexes (100+ units)",
      "Big-box retailers",
      "Distribution centers with high throughput",
    ],
    pickupFrequencyOptions: ["Weekly", "2× weekly", "3× weekly", "Daily"],
  },
];

export function getSizeBySlug(slug: string): ContainerSize | undefined {
  return CONTAINER_SIZES.find((s) => s.slug === slug);
}
